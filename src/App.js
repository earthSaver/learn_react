import React from 'react';
import Header from './components/Header';
import Siderbar from './components/Sidebar';
import Main from './components/Main';
import "./index.css"

export default function App() {
  return (
    <>
      <Header/>
      <Siderbar/>
      <Main/>
    </>
  );
}