import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './router/Coin';
import Coins from './router/Coins';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/:coinId/*' element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
