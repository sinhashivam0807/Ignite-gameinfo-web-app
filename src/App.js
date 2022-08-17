import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes>
      <Route path={'/games/:id'} element={<Home />}/>
      <Route path={'/'} element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
