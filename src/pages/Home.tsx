import { useState } from "react";
import { PrimaryButton } from "../components";
import { WeatherModal } from "../features/weatherModal/WeatherModal";
import WeatherTable from "../features/weatherTable/WeatherTable";
import { PlusIcon } from "../shared/icons";
import { Stack } from "@mui/material";
import { useAddWeatherMutation, useGetWeatherQuery } from "../app/api/weatherApi";
import InputComponent from "../components/InputComponent/InputComponent";
import SearchIcon from "../shared/icons/SearchIcon";

const Home = () => {
  const [mutation] = useAddWeatherMutation();
  const { data } = useGetWeatherQuery();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleModalOpen = () => {
    setOpen(!open);
  };

  const filteredData = data?.filter(({ author }) => author.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="font-semibold text-gray-800">Weather Observations</h1>
        </div>
      </header>

      <Stack component={"article"} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 gap-5">
        <div className="flex flex-row gap-2">
          <InputComponent
            icon={<SearchIcon className="w-5" />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by author name"
            className="w-full"
          />

          <PrimaryButton width="190px" startIcon={<PlusIcon className="w-5" />} onClick={toggleModalOpen}>
            Add Observation
          </PrimaryButton>
        </div>

        <WeatherTable data={filteredData} />
      </Stack>

      <WeatherModal open={open} onClose={toggleModalOpen} onSubmit={mutation} />
    </>
  );
};

export default Home;
