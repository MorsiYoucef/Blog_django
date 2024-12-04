import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './views/core/Index'
import MainWrapper from '../src/layouts/MainWrapper'
function App() {
  return 
  ;<>
    <Router>
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </MainWrapper>
    </Router>
  </>
}

export default App
