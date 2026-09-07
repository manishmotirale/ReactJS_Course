import { useCounterStore } from "../store/Counter";

const CounterButton = () => {
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <button onClick={increase}>+</button> <br />
      <button onClick={reset}>Reset</button> <br />
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default CounterButton;
