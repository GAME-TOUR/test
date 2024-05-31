import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Main';
import Test from './components/Test';
import Tmp from './components/tmp';
import SearchPage from './components/Searchpage';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/test'} element={<Test />}></Route>
          <Route path={'/srch'} element={<SearchPage />}></Route>
          {/* <Route path={'/tmp'} element={<Tmp />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;