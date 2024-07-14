import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='main-content min-h-screen'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
