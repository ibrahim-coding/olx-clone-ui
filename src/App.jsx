import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
