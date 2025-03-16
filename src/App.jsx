import { useEffect, useState } from "react";
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
import { LoadingMainPage } from "./components/LoadingMainPage/LoadingMainPage.jsx";
import { getCards } from "./api.js";

function App() {
  const [theme, setTheme] = useState("light");
  const [card, setCard] = useState([]);
  const [user, setUset] = useState(JSON.parse(localStorage.getItem("user")));
  const [isAuth, setIsAuth] = useState(user ? true : false);
  const [isloading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [task, setTask] = useState([]);
  const [dis, setDis] = useState(true);
  const [selected, setSelected] = useState(new Date());

  const updateUser = (newCard) => {
    setUset(newCard);
  };

  useEffect(() => {
    updateUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    user &&
      getCards(user.token)
        .then((tasks) => {
          setIsLoading(false);
          setCard(tasks.tasks);
          setDis(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setDis(true);
          setErr(error.message);
        });
  }, [user]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <UserContext.Provider value={{ user, updateUser }}>
          <GlobalStyle />
          <Wrapper>
            <Header
              dis={dis}
              isAuth={isAuth}
              theme={theme}
              setTheme={setTheme}
            />
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
                          card={card}
                          setCard={setCard}
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
                        setCard={setCard}
                      />
                    }
                  />
                  <Route
                    path={Router.UserCard}
                    element={
                      <UserCard
                        task={task}
                        setTask={setTask}
                        setCard={setCard}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    }
                  />
                </Route>
              </Route>
              <Route
                path={Router.login}
                element={<Login setCard={setCard} setIsAuth={setIsAuth} />}
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
    </>
  );
}

export default App;
