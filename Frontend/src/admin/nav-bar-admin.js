import React, { useContext } from "react";
import "./css/admin-nav-bar.css";

function Header() {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      style={{ float: "left"}}
    >
      <a
        className='sidebar-brand d-flex align-items-center justify-content-center'
        href='/dashboard'
      >
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fas fa-laugh-wink'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>AGRI STORE</div>
      </a>
      <hr className='sidebar-divider my-0' />
      <li className='nav-item active'>
        <a className='nav-link' href='/dashboard'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </a>
      </li>
      <hr className='sidebar-divider' />
      <div className='sidebar-heading'>AGRI STORE</div>
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='/create_products'
          data-target='#collapseTwo'
          aria-expanded='true'
          aria-controls='collapseTwo'
        >
          <span>Create Listings</span>
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='/listing'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'
        >
          <span>Active Listings</span>
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='/display'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'
        >
          <span></span>
        </a>
      </li>
      <hr className='sidebar-divider' />
      <div className='sidebar-heading'>Orders</div>
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='/newOrders'
          data-target='#collapsePages'
          aria-expanded='true'
          aria-controls='collapsePages'
        >
          <span>New Orders</span>
        </a>
        <a
          className='nav-link collapsed'
          href='/delivered'
          data-target='#collapsePages'
          aria-expanded='true'
          aria-controls='collapsePages'
        >
          <span>Shipped Order</span>
        </a>
      </li>
      <hr className='sidebar-divider' />
      <div className='sidebar-heading'></div>
      <li className='nav-item'>
        <a className='nav-link'></a>
      </li>
      <li className='nav-item'>
        <a className='nav-link'></a>
      </li>
      <li className='nav-item'>
        <a className='nav-link'></a>
      </li>
      <li className='nav-item'></li>
      <hr className='sidebar-divider d-none d-md-block' />
      <li className='nav-item'>
        <a className='nav-link'></a>
      </li>
      <li className='nav-item'>
        <a className='nav-link'></a>
      </li>
    </ul>
  );
}
export default Header;
