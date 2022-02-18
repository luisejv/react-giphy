import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Gif from "./components/Gif";
import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [listaGifs, setListaGifs] = useState([]);
  const [gifSeleccionado, setGifSeleccionado] = useState({
    id: "xT9IgDEI1iZyb2wqo8",
    images: {
      downsized: {
        url: "https://media4.giphy.com/media/xT9IgDEI1iZyb2wqo8/giphy.gif?cid=790b76117b5f7ea79f5874d2779a0b1a61e42b00cbbf66a9&rid=giphy.gif&ct=g",
      },
    },
  });

  useEffect(() => {
    if (busqueda !== "") {
      traerGifs();
    }
  }, [busqueda]);

  const traerGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${busqueda}&limit=5`;
    const response = await axios.get(url);
    console.log(response);
    setListaGifs(response.data.data);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar setBusqueda={setBusqueda} />
        <div className="selected-gif">
          <Gif url={gifSeleccionado.images.downsized.url} />
        </div>
      </div>
      <div className="right-scene">
        <GifList
          listaGifs={listaGifs}
          setGifSeleccionado={setGifSeleccionado}
        />
      </div>
    </div>
  );
};

export default App;
