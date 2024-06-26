import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

import MainPage from "./MainPage/MainPage";
import Info from "./p1.Info/Info";
import PublicArtMain from "./p2.PublicArtMain/PublicArtMain";
import Community from "./p3.Community/Community";
import Project from "./p4.Project/Project";
import SignUp from "./signUp/SignUp";
import Login from "./login/Login";
import logo2 from './images/logo2.png';
import PublicArtDetail from './p2.PublicArtMain/PublicArtDetail';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/p1', label: '공공조형물' },
    { path: '/p2', label: '둘러보기' },
    { path: '/p3', label: '소통하기' },
    { path: '/p4', label: '계획하기' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex justify-between items-center h-20 w-9/12 text-xl font-bold'>

      <div className='logo-container'>
        <Link to='/'>
          <img src={logo2} alt="logo2" className='logo2' />
        </Link>
      </div>

      <div className='flex'>
        {navItems.map((item) => (
          <div key={item.path}
            className={`mx-5 hover:text-sky-500 ${location.pathname === item.path ? 'text-sky-500' : ''}`}>
            <Link to={item.path}>
              <p className='hide-on-small-screen text-xl'>{item.label}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className='flex justify-end'>
        <div className='mx-2 p-2 hover:text-sky-500 rounded-md'>
          <Link to='/signUp'><p className='p2 hide-on-small-screen'>회원가입</p></Link>
        </div>
        <div className='bar my-1.5'>|</div>
        <div className='mx-2 p-2 hover:text-sky-500 rounded-md'>
          <Link to='/login'><p className='p2 hide-on-small-screen'>로그인</p></Link>
        </div>
      </div>

      <div className='navi'>
        <FaBars className='cursor-pointer' size={24} onClick={toggleMenu} />
        {isMenuOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg'>
            {navItems.map((item) => (
              <Link to={item.path} key={item.path} onClick={() => setIsMenuOpen(false)}
                className='block px-4 py-2 text-sm hover:bg-gray-200'>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col w-full justify-start items-center h-screen mx-auto'>
        <Header />
        <hr className='border-solid w-full' />
        <main className='grow flex flex-col w-full justify-center items-center overscroll-y-auto'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/p1" element={<Info />} />
            <Route path="/p2" element={<PublicArtMain />} />
            <Route path="/p3" element={<Community />} />
            <Route path="/p4" element={<Project />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path='/p2/publicArt' element={<PublicArtDetail />} />
          </Routes>
        </main>
        <footer className='flex justify-center items-center h-20 p-10 w-full text-base bg-black text-white'>
          ⓒ 2024 Ocean Squad. All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

