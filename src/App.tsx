import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IronManGiphy from "./pages/IronManGiphy";
import SearchGiphy from "./pages/SearchGiphy";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iron-man-giphy" element={<IronManGiphy />} />
      <Route path="/search-giphy" element={<SearchGiphy />} />
    </Routes>
  );
};

export default App;
