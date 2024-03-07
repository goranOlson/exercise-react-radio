import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { RootLayout } from "./components/RootLayout";
import { ChannelPage } from "./pages/ChannelPage";
import { LandingPage } from "./pages/LandingPage";


import './css/index.css/'






export function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}  >
          <Route path="/" element={<LandingPage />} index />
          <Route path="/channel/:channel" element={<ChannelPage /> } />
        </Route>
      </Route>
    )
  );

  return <>
    <RouterProvider router={router} />
  </>;
}




