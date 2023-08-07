import React from 'react'

import './Navbar.css'

import Logo from './Logo/Logo'
import Cluster from './Cluster/Cluster';
import AboutMe from './AboutMe/AboutMe';

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <Cluster />
      <AboutMe />
    </nav>
  )
}
