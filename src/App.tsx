import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home';
import { BemVindo } from './pages/BemVindo';
import { Login } from './pages/Login';
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/bem-vindo" exact component={BemVindo} />        
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
