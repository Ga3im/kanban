import { useState } from "react";
import { cardList } from "./data";
import "./App.css";
import { Main } from "./components/Main/Main";
import { darkTheme, GlobalStyle, lightTheme, Wrapper } from "./Global.styled";
import { Header } from "./components/Header/Header.styled";
import { Route, Routes } from "react-router-dom";
import { Router } from "./pages/routes";
import { Exit } from "./pages/Exit/Exit.jsx";
import { ThemeProvider } from "styled-components";
import { Register } from "./pages/Register/Register.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [card, setCard] = useState(cardList);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route
              path={Router.main}
              element={
                <>
                  <Header theme={theme} setTheme={setTheme} setCard={setCard} />
                  <Main card={card} />
                </>
              }
            />
            <Route path={Router.card} element={<Card />} />
            <Route path={Router.register} element={<Register />} />
            <Route path={Router.exit} element={<Exit />} />
            <Route path={Router.notFound} element={<NotFound />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
