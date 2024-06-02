import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Main';
import Test from './components/Test';
import GameDetailPage from './components/GameDetailPage';
import SearchResultPage from './components/SearchResultPage';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/test'} element={<Test />}></Route>
          <Route path={'/search'} element={<SearchResultPage />}></Route>
          <Route path='/game/:gameid' element={<GameDetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;