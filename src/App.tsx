import React from "react";
import DataProvider from "./Context/DataProvider";
import Questions from "./Components/Questions";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="page-container">
        <Questions />
      </div>
    </DataProvider>
  );
}

export default App;
