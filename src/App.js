import "./style/app.scss";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFoundPage";
import FullFilm from "./pages/FullFilmPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/film/:id" element={<FullFilm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
