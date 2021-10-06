import './App.css';
import Form from './components/Form/Form';
import Admin from './components/Admin/Admin';
import{BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/" component={Form} />
    </div>
    <div className="Admin">
      <Route exact path="/admin" component={Admin} />
    </div>
    </BrowserRouter>
  );
}

export default App;
