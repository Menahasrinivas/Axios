import React from 'react'
import AppRoutes from './utils/AppRoutes';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
export const API_URL = 'https://659a5909652b843dea5378c7.mockapi.io/api/axios/Axioscard'
function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router} />
    </>
}

export default App
