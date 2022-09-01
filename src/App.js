import React, { memo } from 'react';
import { Routes, Route } from "react-router-dom";
import AppFooter from './components/app-footer';

import AppHeader from './components/app-header';
import Discover from './pages/discover';
import Friend from './pages/friend';
import Mine from './pages/mine';
import Recommend from './pages/discover/child-pages/recommend'
import Toplist from './pages/discover/child-pages/toplist'
import Songs from './pages/discover/child-pages/songs'
import Radio from './pages/discover/child-pages/radio'
import Artists from './pages/discover/child-pages/artists'
import Album from './pages/discover/child-pages/album'

export default memo(function App() {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="discover" element={<Discover />}>
          <Route path="recommend" element={<Recommend />}/>
          <Route path="toplist" element={<Toplist />}/>
          <Route path="songs" element={<Songs />}/>
          <Route path="radio" element={<Radio />}/>
          <Route path="artists" element={<Artists />}/>
          <Route path="album" element={<Album />}/>
        </Route>
        <Route path="friend" element={<Friend />} />
        <Route path="mine" element={<Mine />} />
      </Routes>
      <AppFooter />
    </div>
  )
})

