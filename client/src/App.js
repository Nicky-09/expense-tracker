import "./App.css";
import AddExpense from "./components/AddExpense";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Track your expenses
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <Graph />
          <AddExpense />
        </div>
      </div>
    </div>
  );
}

export default App;
