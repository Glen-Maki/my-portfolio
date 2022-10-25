import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Works" element={<Works />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
