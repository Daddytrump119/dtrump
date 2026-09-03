import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Article } from "./pages/Article";
import { DonkeyRun } from "./pages/DonkeyRun";
import { Games } from "./pages/Games";
import { Home } from "./pages/Home";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Games />} />
        <Route path="/play/donkey-run" element={<DonkeyRun />} />
        <Route path="/secrets/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}
