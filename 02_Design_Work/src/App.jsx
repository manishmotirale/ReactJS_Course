import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Hero from "./Components/Hero"

function App() {
  return (
    <>
    <Hero/>
      <Header />
      <h1 className="text-blue-600 dark:text-sky-400 border-3 p-4 b">
        Learn to Integrate Tailwindcss
      </h1>
      <div className="flex gap-4">
        <Card title="Python" buttonText="Join Now" />
        <Card title="NodeJs" />
        <Card title="NextJs" buttonText="Buy Now" />
      </div>
    </>
  );
}

export default App;
