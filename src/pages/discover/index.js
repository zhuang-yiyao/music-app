import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderCategory } from './style'

import AppNavBar from '../../components/nav-bar'

export default memo(function Discover() {
  return (
    <HeaderCategory>
      <AppNavBar />
      <Outlet/>
    </HeaderCategory>
  )
})