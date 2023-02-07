
import './App.css';
import CounterClass from './component/CounterClass';
import CounterFunction from './component/CounterFunction';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <CounterClass/>
      <CounterFunction/>
    </div>
  );
}

export default App;
