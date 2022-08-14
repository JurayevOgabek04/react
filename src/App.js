import { Provite } from "./LoginPages/Provite";
import { Public } from "./LoginPages/Public";
import { useAuth } from "./hook/useAuth";
import './App.css';

function App() {
  const { token } = useAuth()
  return (
    <div className="App">
      {
        token ? <Provite /> : <Public />
      }
    </div>
  );
}

export default App;
