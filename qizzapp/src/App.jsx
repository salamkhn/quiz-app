import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Firstpage from "./Components/Firstpage"
import Secondpage from "./Components/Secondpage"
import Third from "./Components/Third"
import Forth from "./Components/Forth"
import Fifth from "./Components/Fifth"
import "./Components/Style.css"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Firstpage />
    },
    {
      path: "/secondpage",
      element: <Secondpage />
    },
    {
      path: "/thirdpage",
      element: <Third />
    },
    {
      path: "/forthpage",
      element: <Forth />

    },
    {
      path: "/fifthpage",
      element: <Fifth />

    }


  ])
  return (<>
    <RouterProvider router={router}>

    </RouterProvider>
  </>)
}
export default App