import "./App.css";
import BlockingPostList from "./components/BlockingPostList";
import NonBlockingPostList from "./components/NonBlockingPostList";

function App() {
  return (
    <div className="App">
      <BlockingPostList />
      <NonBlockingPostList />
    </div>
  );
}

export default App;
