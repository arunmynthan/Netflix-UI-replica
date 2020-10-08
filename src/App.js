import React from "react";
import Row from "./components/Rows";
import request from "./request";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchurl={request.fetchNeflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchurl={request.fetchTrending} />

      <Row title={"Top Rated"} fetchurl={request.fetchTopRated} />
      <Row title={"Action Movies"} fetchurl={request.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchurl={request.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchurl={request.fetchHorrorMovies} />
      <Row title={"Historical Movies"} fetchurl={request.fetchDocumentaries} />
      <Row title={"Romance Movies"} fetchurl={request.fetchRomanceMovies} />
    </div>
  );
}

export default App;
