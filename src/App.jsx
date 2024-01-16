import { Footer } from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { MenuBar } from './Components/header/MenuBar'


// import { Container } from 'react-bootstrap'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MenuBar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
