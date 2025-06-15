import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import WeatherTable from "./features/weatherTable/WeatherTable";

async function enableMSW() {
  const { worker } = await import("./app/api/msw/browser");
  await worker.start();
}

enableMSW().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <>
          <WeatherTable />
        </>
      </Provider>
    </StrictMode>
  )
);
