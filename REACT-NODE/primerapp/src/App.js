import logo from './logo.svg';
import './App.css';


function App(props) {
  const cDate = new Date();
  
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Fecha actual es {cDate.toLocaleDateString()} El tiempo actual es {cDate.toLocaleTimeString()}</h2>
      <h1></h1>
    </div>
  );
}
export default App;

