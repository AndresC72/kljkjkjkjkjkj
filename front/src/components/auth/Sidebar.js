import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar" data-color="purple" data-background-color="white" data-image="assets/img/sidebar-1.jpg">
        <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
            Creative Tim</a></div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active  ">
              <Link className="nav-link" to="/dashboard">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
                </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/user">
                <i className="material-icons">person</i>
                <p>User Profile</p>
                </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/tables">
                <i className="material-icons">content_paste</i>
                <p>Table List</p>
                </Link>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./typography.html">
                <i className="material-icons">library_books</i>
                <p>Typography</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./icons.html">
                <i className="material-icons">bubble_chart</i>
                <p>Icons</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./map.html">
                <i className="material-icons">location_ons</i>
                <p>Maps</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./notifications.html">
                <i className="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="./rtl.html">
                <i class="material-icons">language</i>
                <p>RTL Support</p>
              </a>
            </li>
            <li class="nav-item active-pro ">
              <a class="nav-link" href="./upgrade.html">
                <i class="material-icons">unarchive</i>
                <p>Upgrade to PRO</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Sidebar;
