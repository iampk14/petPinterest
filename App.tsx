import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutMe from "./src/components/AboutMe";
import Error from "./src/components/Error";
import GlobalStyles from "./src/styles/GlobalStyles";
import { theme } from "./src/styles/theme";

const AppLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutMe /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
