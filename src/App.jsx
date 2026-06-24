import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Header title="Interactive Counter App" />

      <h2 className="text-5xl font-bold">
        {count}
      </h2>

      <div className="flex flex-wrap gap-4">
        <Button
          text="Increase"
          onClick={() => setCount(count + 1)}
        />

        <Button
          text="Decrease"
          onClick={() => setCount(count - 1)}
        />

        <Button
          text="Reset"
          onClick={() => setCount(0)}
        />
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;