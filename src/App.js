import "./App.css";
import Inline from "./components/Inline";
import "./appStyles.css";
import style from "./appStyles.module.css";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent />
      <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      <Inline />
      <h1 className="error">error</h1>
      <h1 className={style.success}>success</h1>
    </div>
  );
}

export default App;
