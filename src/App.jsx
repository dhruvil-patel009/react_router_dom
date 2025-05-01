import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movies } from "./pages/Movies";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import './App.css'
import { ErrorPage } from "./pages/Error";
import { getMoviesData } from "./api/GetAPIData";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movies />,
          loader: getMoviesData,
        },
        {
          path: "/contact",
          element: <Contact />
        },

      ]
    },

  ])

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/movie" element={<Movies/>}/>
  //       <Route path="/contact" element={<Contact/>}/>
  //     </Route>
  //   )
  // )

  return <RouterProvider router={router} />
}

export default App;