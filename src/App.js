import { Route, Routes } from 'react-router-dom';
import FoodCostPage from './pages/FoodCostPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import SquarePage from './pages/SquarePage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="food-cost" element={<FoodCostPage />} />
        <Route path="recipe" element={<RecipeListPage />} />
        <Route path="recipe/detail" element={<RecipeDetailPage />} />
        <Route path="square" element={<SquarePage />} />
        <Route path="mypage" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
