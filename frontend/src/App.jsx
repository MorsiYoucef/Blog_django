import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './views/core/Index'
import MainWrapper from '../src/layouts/MainWrapper'

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  )
}

export default App
