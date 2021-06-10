import React from "react";
import Loader from "react-loader-spinner";

function LoaderComp({ type, color, height, width }) {
  return (
    <div>
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default LoaderComp;
