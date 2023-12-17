import { Routes } from "./routes";
import { Provider, useAtom } from "jotai";
import { MusicController } from "./components/MusicController";

function App() {
  return (
    <Provider>
      <MusicController />
      <Routes />
    </Provider>
  );
}

export default App;
