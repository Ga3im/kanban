import { useEffect, useState } from "react";
import { Main } from "./components/Main/Main";
import { darkTheme, GlobalStyle, lightTheme, Wrapper } from "./Global.styled";
import { Header } from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { Router } from "./pages/routes";
import { ThemeProvider } from "styled-components";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { CreateCard } from "./pages/CreateCard/CreateCard.jsx";
import { UserCard } from "./pages/UserCard/UserCard.jsx";
import { LoadingMainPage } from "./components/LoadingMainPage/LoadingMainPage.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { PopUpConfirm } from "./components/PopUpConfirm/PopUpConfirm.jsx";
import { ArchiveCards } from "./pages/ArchiveCards/ArchiveCards.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [isloading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [selected, setSelected] = useState(new Date());

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Wrapper>
            <Header theme={theme} setTheme={setTheme} />
            <Routes>
              <Route
                path={Router.main}
                element={
                  <>
                    {isloading ? (
                      <LoadingMainPage />
                    ) : (
                      <Main err={err} setErr={setErr} />
                    )}
                  </>
                }
              >
                <Route
                  path={Router.UserCard}
                  element={
                    <UserCard selected={selected} setSelected={setSelected} />
                  }
                />
                <Route
                  path={Router.CreateCard}
                  element={
                    <CreateCard selected={selected} setSelected={setSelected} />
                  }
                />
              </Route>
              <Route path={Router.archive} element={<ArchiveCards />}>
                {" "}
                <Route
                  path={Router.UserCard}
                  element={
                    <UserCard selected={selected} setSelected={setSelected} />
                  }
                />
              </Route>

              <Route path={Router.notFound} element={<NotFound />} />
            </Routes>
            <PopUpConfirm />
          </Wrapper>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
