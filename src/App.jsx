import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movies } from "./pages/Movies";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import './App.css'
import { ErrorPage } from "./pages/Error";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";


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
          path:"/movie/:movieID",
          element:<MovieDetails/>,
          loader:getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
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