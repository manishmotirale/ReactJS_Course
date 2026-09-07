import { useCounterStore } from "../store/Counter";

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);
  return <h2>Count: {count}</h2>;
};

export default CounterValue;
