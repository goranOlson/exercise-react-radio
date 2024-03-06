import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { LandingPage } from "./pages/LandingPage";








export function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}  >
          <Route index path="/" element={<LandingPage />} />
        </Route>
      </Route>
    )
  );

  return <>
    <RouterProvider router={router} />
  </>;
}




