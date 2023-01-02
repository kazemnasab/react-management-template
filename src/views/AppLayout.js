import React, { Children } from 'react'
import Footer from '../Containers/Footer/Footer'
import TopNav from '../Containers/TopNav/TopNav'
import { Outlet } from "react-router-dom";

export default function AppLayout({children}) {
    return (
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <div className="layout-page">
              <TopNav/>
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                  
                  {children}
                </div>
                <Footer/>
    
                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>
          <div className="layout-overlay layout-menu-toggle"></div>
    
          <div className="drag-target"></div>
        </div>
      )
    }
    