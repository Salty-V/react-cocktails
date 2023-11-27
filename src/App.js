import './App.css';
import CocktailRandomPage from './pages/CocktailRandomPage';
import CocktailsCat from './pages/CocktailsCat';
import CocktailsIngredientsPage from './pages/CocktailsIngredientsPage';
import CocktailsPage from './pages/CocktailsPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<CocktailsPage />} />
        <Route path="/random" element = {<CocktailRandomPage />} />
        <Route path="/categories" element = {<CocktailsCat />} />
        <Route path='/ingredients' element = {<CocktailsIngredientsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
