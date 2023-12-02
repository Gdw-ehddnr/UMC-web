import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/TV";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/movie" element={<Movies />}  />
      <Route path="/tv" element={<Tv />}  />
      <Route path="/person" element={<Celebrity />}  />
      <Route path="/*" element={<NotFound />}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
