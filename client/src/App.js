import Header from './components/layout/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <div className='flex flex-col h-screen'>
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/profile/:id' element={<Profile/>} />
              <Route path='/auth//*' element={<Auth/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
