import { RouterProvider } from "react-router-dom";
import router from "./Routes.jsx";
import Welcome from "./component/welcome&select/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
