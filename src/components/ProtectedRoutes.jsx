import React from 'react'; 
import {Navigate, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './header/Header';
import './header/Header.css'

const ProtectedRoutes = () => {

  const {trainerSlice} = useSelector(state => state)

  if(trainerSlice.name){
    return (
      <>
        <Header/>
        <Outlet/>
      </>
    ) 
  }else {
    return <Navigate to='/'/>
  }

}

export default ProtectedRoutes

