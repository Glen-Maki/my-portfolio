import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../Layout/Layout";
import { Home } from "../../Page/Home";
import { Profile } from "../../Page/Profile";
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
            path="/Profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/Works"
            element={
              <Layout>
                <Works />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
