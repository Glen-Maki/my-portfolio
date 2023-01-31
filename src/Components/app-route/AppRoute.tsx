import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../Layout/Layout";
import { Home } from "../../Page/Home";
import { Profile } from "../../Page/Profile";
import { WorkPage } from "../../Page/WorkPage";
import { Works } from "../../Page/Works";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/works"
            element={
              <Layout>
                <Works />
              </Layout>
            }
          />
          <Route
            path="works/:workKey"
            index
            element={
              <Layout>
                <WorkPage />
              </Layout>
            }
          ></Route>
          <Route
            path="*"
            element={
              <Layout>
                <></>
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
