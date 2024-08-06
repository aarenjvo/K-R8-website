import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './assets/k-r8-logo.png'
import './App.css'
import Home from './Home'
import Nav from './Nav'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
