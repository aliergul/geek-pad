import React, { useEffect } from "react";

const Games = () => {
  useEffect(() => {
    localStorage.setItem("path", window.location.pathname);
  }, []);

  return <div>Games</div>;
};

export default Games;
