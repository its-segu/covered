import "./App.css";
import FormPage from "./components/Form";
import Results from "./components/Results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/covered" component={FormPage} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
