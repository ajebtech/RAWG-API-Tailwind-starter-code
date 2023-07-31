import Games from "./Components/Games";
import "./App.css";
import StateProvider from "./Components/StateProvider";

function App() {
  return (
    <div >
      <StateProvider>
        <Games  />
      </StateProvider>
    </div>
  );
}

export default App;
