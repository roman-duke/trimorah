import '../../index.scss';
import './root.scss'
// import { useState } from 'react'
import Navbar from './Navbar/navbar';
// import Loader from './loader'
// import { AnimatePresence } from 'framer-motion';
import Footer from './Footer/footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  // const [loading, setLoading] = useState(true);

  return (
    // <AnimatePresence mode="wait">
    //   {loading ? 
    //     <Loader key="loader" setLoading={setLoading}/>
    //    : <div className="random">Hello World!</div>}
    // </AnimatePresence>
    <>
      <Navbar />
      <main className="slot">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
