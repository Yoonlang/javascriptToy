import "./App.css";
import AbortControlledInput from "./components/AbortControlledInput";
import BlockingPostList from "./components/BlockingPostList";
import NonBlockingPostList from "./components/NonBlockingPostList";

function App() {
  return (
    <div className="App">
      <BlockingPostList />
      <NonBlockingPostList />
      <AbortControlledInput />
    </div>
  );
}

export default App;
