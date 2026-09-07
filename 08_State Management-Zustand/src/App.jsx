import "./App.css";
import Counter from "./Components/Counter";
import CounterButton from "./Components/CounterButton";
import CounterValue from "./Components/CounterValue";
import Posts from "./Components/Posts";

function App() {
  return (
    <>
      <h1>Zustand</h1>
      {/* <Counter/> */}

      <CounterValue />
      <CounterButton />

      <Posts />
    </>
  );
}

export default App;
