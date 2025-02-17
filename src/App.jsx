import { useState } from "react";
import { cardList } from "./data";
import "./App.css";
import { Main } from "./components/Main/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route } from "./pages/routes";

function App() {
  const [card, setCard] = useState(cardList);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={Route.main}
            element={<Main card={card} setCard={setCard} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
