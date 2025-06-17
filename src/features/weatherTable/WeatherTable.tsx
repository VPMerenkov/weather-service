import { Stack } from "@mui/material";
import { CaretDownIcon, CloudyIcon, SunIcon } from "../../shared/icons";
import type { Weather } from "../../types/weather";
import { format } from "date-fns";
import { useState } from "react";

interface Props {
  data?: Weather[];
}

const WeatherTable = (props: Props) => {
  const { data } = props;

  const [sortedAsc, setSortedAsc] = useState(true);

  const weatherIcons = {
    sunny: <SunIcon className="text-yellow-500 w-4" />,
    cloudy: <CloudyIcon className="text-gray-500 w-4" />,
    overcast: <CloudyIcon className="text-gray-700 w-4" />,
  };

  const toggleAscSorting = () => {
    setSortedAsc(!sortedAsc);
  };

  const sortedData = data?.sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();

    return sortedAsc ? aTime - bTime : bTime - aTime;
  });

  return (
    <Stack component={"section"} className="bg-white shadow-sm rounded-lg overflow-hidden max-h-100">
      <div
        className="overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#CBD5E0 #F7FAFC",
        }}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer w-1/4"
                onClick={toggleAscSorting}
              >
                <div className="flex items-center space-x-1">
                  <span>Date & Time</span>
                  {sortedAsc ? <CaretDownIcon className="rotate-180" /> : <CaretDownIcon />}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
              >
                Temperature
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Weather
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Author
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
              >
                Comment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData && sortedData.length > 0 ? (
              sortedData.map((observation) => {
                return (
                  <tr key={observation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {format(new Date(observation.date), "dd.MM.yyyy, HH:mm")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{observation.temperature}°C</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center space-x-2">
                        {weatherIcons[observation.weather]}
                        <span className="capitalize leading-4.5">{observation.weather}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{observation.author}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{observation.comment}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                  No observations found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Stack>
  );
};

export default WeatherTable;
