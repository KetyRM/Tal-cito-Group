import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Product from './components/Product'

function App() {
  return (
    <>
     <main>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Product' element={<Product />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;

