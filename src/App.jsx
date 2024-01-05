import { Footer } from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'
// import { Container } from 'react-bootstrap'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
