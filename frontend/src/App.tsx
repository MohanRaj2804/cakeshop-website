import './App.css';
import './stlyes/custom.scss';
import { Route, Routes } from "react-router-dom";
// explicitly point to .tsx file so Vite doesn't resolve the similarly named authContext.ts
import { AuthProvider } from './context/AuthContext.tsx';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cake from './components/Cake/Cake';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/cake' element={<Cake/>} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </AuthProvider>
  )
}

export default App
