import { useGetWeatherQuery } from "../../app/api/weatherApi";

const WeatherTable = () => {
  const { data, refetch } = useGetWeatherQuery();

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {data?.map((weather) => (
        <div>
          <span>{weather.date}</span>
        </div>
      ))}
    </div>
  );
};

export default WeatherTable;
