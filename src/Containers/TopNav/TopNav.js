import React from 'react'
import Language from './Language'
import Notifications from './Notifications'
import Profile from './Profile'
import SearchIcon from './SearchIcon'
import Shortcuts from './Shortcuts'
import Search from './Search'

export default function TopNav() {
  return (
    <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="container-fluid">

              <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <SearchIcon/>
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <Language/>
                  <li className="nav-item me-2 me-xl-0">
                    <a className="nav-link style-switcher-toggle hide-arrow" >
                      <i className="bx bx-sm"></i>
                    </a>
                  </li>
                  <Shortcuts/>
                  <Notifications/>
                  <Profile/>
                </ul>
              </div>
              <Search/>
            </div>
          </nav>
  )
}
