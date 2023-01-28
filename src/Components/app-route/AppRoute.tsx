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
            index
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/profile"
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
            path="works/:work"
            element={
              <Layout>
                <WorkPage />
              </Layout>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
