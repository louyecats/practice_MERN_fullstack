import logo from './logo.svg';
import './App.css';
import PersonForm from './components/PersonForm';
//import the PersonForm component

function App() {
  return (
    <div className="App">
      {/* Make PersonForm a child component of the App component */}
      <PersonForm/>
    </div>
  );
}

export default App;
