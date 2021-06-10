import React, { createContext, useState } from "react";

export const searchString = createContext();

function SearchStringProvider({ children }) {
  const [string, setString] = useState([]);

  return (
    <searchString.Provider value={{ string, setString }}>
      {children}
    </searchString.Provider>
  );
}

export default SearchStringProvider;
