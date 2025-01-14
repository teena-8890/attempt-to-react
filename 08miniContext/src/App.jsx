
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Welcome, to our Site</h1>
      <h3>PLEASE LOGIN--FILL REQUIRED INFO</h3>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App