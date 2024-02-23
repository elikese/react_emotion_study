import { Reset } from 'styled-reset';
import './App.css';
import SideBar from './components/SideBarTop/SideBarTop';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Reset />
      <SideBar />
      <Routes>

        <Route path='/mypage' element={<>마이페이지</>} />
        <Route path='/board' element={<>게시판</>} />
        <Route path='/notice' element={<>공지사항</>} />

      </Routes>
    </>
  );
}