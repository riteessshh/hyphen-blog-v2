import "./App.css";
import Acomponent from "./Component";
import LoginButton from "./login";

function App() {
  return (
    <div>
      Hello!
      <Acomponent name="ritesh" />
      <LoginButton />
      {/* <LogoutButton /> */}
    </div>
  );
}

export default App;
