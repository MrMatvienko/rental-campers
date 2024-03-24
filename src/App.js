import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Rental from "./pages/Rental/Rental";
import Favorites from "./pages/Favorites/Favorites";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/rental" element={<Layout />}>
        <Route index element={<Rental />} />
      </Route>
      <Route path="/favorites" element={<Layout />}>
        <Route index element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
