import React, { createContext, useState } from "react";

export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
});
export default function CursorManager(props) {
  const [size, setSize] = useState("large");
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {props.children}
    </CursorContext.Provider>
  );
}