import { useEffect, useState } from "react";
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
import { LoadingMainPage } from "./components/LoadingMainPage/LoadingMainPage.jsx";
import { cardList } from "./data.js";
import { Provider } from "react-redux";
import store from "./store/index.js";

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUset] = useState(JSON.parse(localStorage.getItem("user")));
  const [isAuth, setIsAuth] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [selected, setSelected] = useState(new Date());

  const updateUser = (newCard) => {
    setUset(newCard);
  };

  useEffect(() => {
    updateUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <UserContext.Provider value={{ user, updateUser }}>
            <GlobalStyle />
            <Wrapper>
              <Header isAuth={isAuth} theme={theme} setTheme={setTheme} />
              <Routes>
                <Route element={<PrivateRoute isAuth={isAuth} />}>
                  <Route
                    path={Router.main}
                    element={
                      <>
                        {isloading ? (
                          <LoadingMainPage />
                        ) : (
                          <Main
                            err={err}
                            setErr={setErr}
                          />
                        )}
                      </>
                    }
                  >
                    <Route
                      path={Router.exit}
                      element={<Exit setIsAuth={setIsAuth} />}
                    />
                    <Route
                      path={Router.CreateCard}
                      element={
                        <CreateCard
                          selected={selected}
                          setSelected={setSelected}
                        />
                      }
                    />
                    <Route
                      path={Router.UserCard}
                      element={
                        <UserCard
                          selected={selected}
                          setSelected={setSelected}
                        />
                      }
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
          </UserContext.Provider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
