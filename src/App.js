import "./App.css";
import { fetchTopAlbums } from "./api/api";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [topAlbum, setTopAlbum] = useState([]);

  const getTopAlbum = async () => {
    const data = await fetchTopAlbums();
    setTopAlbum(data);
    // console.log(data);
  };
  useEffect(() => {
    getTopAlbum();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        {topAlbum.map((item) => {
          return <Card key={item.id} data={item} type="album" />;
        })}
      </header>
    </div>
  );
}

export default App;
