import { MainPage } from "./components/mainPage/MainPage";
import { Header } from "./components/header/Header";
import { Search } from "./components/search/Search";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/notFound/NotFound";
import { FilmInfo } from "./components/filmInfo/FilmInfo";
import { Casts } from "./components/casts/Casts";
import { Reviews } from "./components/reviews/Reviews";
import "./App.css";
import type React from "react";

const App: React.FC = ()  => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<Search />}>
          {/* <Route path="film-info/:id" element={<FilmInfo />} /> */}
        </Route>
        <Route path="/movies/:id" element={<FilmInfo />}>
          <Route path="casts" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
