import { useState } from "react";
import { cardList } from "./data";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/Popups/PopBrowse/PopBrowse";
import { PopUser } from "./components/Popups/PopUser/PopUser";
import { GlobalStyle } from "./Global.styled";

function App() {
	
  const [card, setCard] = useState(cardList);
 
  return (
    <>
	<GlobalStyle/>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header card={card} setCard={setCard}/>
        <Main card={card} />
      </div>
    </>
  );
}

export default App;
