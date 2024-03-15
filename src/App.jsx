import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Vendas from './pages/Vendas';
import Produtos from './pages/Produtos';

function App() {
  

  return (
   <>
    <Router>
      <Routes>
        <Route path='/vendas' element={<Vendas/>}></Route>
        <Route path='/' element={<Produtos/>}></Route>
        <Route path='/produtos' element={<Produtos/>}></Route>
      </Routes>
    </Router>
   </>
  )
}

export default App
