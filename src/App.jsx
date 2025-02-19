import { useState } from "react";
import { cardList } from "./data";
import "./App.css";
import { Main } from "./components/Main/Main";
import { darkTheme, GlobalStyle, lightTheme, Wrapper } from "./Global.styled";
import { Header } from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { Router } from "./pages/routes";
import { Exit } from "./pages/Exit/Exit.jsx";
import { ThemeProvider } from "styled-components";
import { Register } from "./pages/Register/Register.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { CreateCard } from "./pages/CreateCard/CreateCard.jsx";
import { UserCard } from "./pages/UserCard/UserCard.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [card, setCard] = useState(cardList);
  const [isAuth, setIsAuth] = useState(true);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Wrapper>
          <Header
            isAuth={isAuth}
            theme={theme}
            setTheme={setTheme}
            setCard={setCard}
          />
          <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
              <Route path={Router.main} element={<Main card={card} />}>
                <Route
                  path={Router.exit}
                  element={<Exit setIsAuth={setIsAuth} />}
                />
                <Route
                  path={Router.CreateCard}
                  element={<CreateCard setCard={setCard} />}
                />
                <Route path={Router.UserCard} element={<UserCard card={card}/>} />
              </Route>
            </Route>
            <Route
              path={Router.login}
              element={<Login setIsAuth={setIsAuth} />}
            />
            <Route path={Router.register} element={<Register />} />
            <Route path={Router.notFound} element={<NotFound />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
