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
import { UserContext } from "./context/UserContext.jsx";
import { CardContext } from "./context/CardContext.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [card, setCard] = useState(cardList);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUset] = useState("");
  localStorage.setItem("user", JSON.stringify(user));

  const updateCard = (newCard) => {
    setCard(newCard);
  };

  const updateUser = (newCard) => {
    setUset(newCard);
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <UserContext.Provider value={{ user, updateUser }}>
          <CardContext.Provider value={{ card, updateCard }}>
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
                  <Route
                    path={Router.main}
                    element={<Main card={card} setCard={setCard} />}
                  >
                    <Route
                      path={Router.exit}
                      element={<Exit setIsAuth={setIsAuth} />}
                    />
                    <Route
                      path={Router.CreateCard}
                      element={<CreateCard setCard={setCard} />}
                    />
                    <Route
                      path={Router.UserCard}
                      element={<UserCard card={card} setCard={setCard} />}
                    />
                  </Route>
                </Route>
                <Route
                  path={Router.login}
                  element={<Login setIsAuth={setIsAuth} />}
                />
                <Route
                  path={Router.register}
                  element={<Register setIsAuth={setIsAuth} />}
                />
                <Route path={Router.notFound} element={<NotFound />} />
              </Routes>
            </Wrapper>
          </CardContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
