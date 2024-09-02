import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Place from '../pages/Place'
import Error from '../pages/Error'
import Layout from '../layout/Layout'



function App() {
      return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path='/place/:id' element={<Layout><Place /></Layout>} />
          <Route path='*' element={<Layout><Error /></Layout>} />
        </Routes>
      </BrowserRouter>
      )
}

export default App