import { Reset } from 'styled-reset';
import './App.css';
import SideBar from './components/SideBarTop/SideBarTop';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout';
import Mypage from './components/pages/Mypage/Mypage';

export default function App() {
  return (
    <>
      <Reset />
      <SideBar />
      <RootLayout>
        <Routes>
          <Route path='/mypage' element={<><Mypage /></>} />
          <Route path='/board' element={<>게시판</>} />
          <Route path='/notice' element={<>공지사항</>} />
        </Routes>
      </RootLayout>
    </>
  );
}