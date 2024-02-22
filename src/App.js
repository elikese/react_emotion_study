import { Reset } from 'styled-reset';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Reset />
      <SideBar />
      <Routes>

        <Route />
        <Route />
        <Route />

      </Routes>
    </>
  );
}