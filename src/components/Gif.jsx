import React from "react";

const Gif = ({ url, setGifSeleccionado, gif }) => {
  return (
    <img
      src={url}
      alt=""
      className="gif"
      onClick={() => setGifSeleccionado(gif)}
    />
  );
};

export default Gif;
