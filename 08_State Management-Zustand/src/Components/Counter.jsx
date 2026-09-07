import { useCounterStore } from "../store/Counter";

const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h2>Counter {count}</h2>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
