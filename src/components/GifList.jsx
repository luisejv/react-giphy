import React from "react";
import Gif from "./Gif";

const GifList = ({ listaGifs, setGifSeleccionado }) => {
  return (
    <div className="gif-list">
      {listaGifs.map((gif) => {
        return (
          <Gif
            key={gif.id}
            url={gif.images.downsized.url}
            setGifSeleccionado={setGifSeleccionado}
            gif={gif}
          />
        );
      })}
    </div>
  );
};

export default GifList;
