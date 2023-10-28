import logo from "./logo.svg";
 import { routes } from "./pages/routesConfig";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
