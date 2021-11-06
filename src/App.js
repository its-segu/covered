import "./App.css";
import PageContainer from "./components/PageContainer";
import Results from "./components/Results";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/covered" component={PageContainer} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
