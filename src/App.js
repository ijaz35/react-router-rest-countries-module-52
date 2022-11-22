import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      <h2>Hello From Countries</h2>
      <Link to='/countries'>Countries</Link>
      <Routes>
        <Route path="/countries" element={<Countries />}>
          <Route path=":countryName" element={<Country></Country>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
