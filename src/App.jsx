import Home from "./pages/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:categoryId' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
