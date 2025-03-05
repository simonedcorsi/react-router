import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostsList from "./pages/postlist";
import AboutUs from "./pages/aboutUs";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";

import DefaultLayout from "./layouts/DefaultLayout";

import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/about-us" Component={AboutUs} />
              <Route path="/posts-list" Component={PostsList} />
              <Route path="/posts-list/:index" Component={SinglePost} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
