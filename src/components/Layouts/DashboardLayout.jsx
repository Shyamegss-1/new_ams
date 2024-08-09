"use client"
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <main className="main" id="top">
      <div className="container-fluid" data-layout="container">
        <nav className="navbar navbar-light navbar-vertical navbar-expand-xl navbar-card">
          <div className="d-flex align-items-center">
            <div className="toggle-icon-wrapper">
              <button
                className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                aria-label="Toggle Navigation"
                data-bs-original-title="Toggle Navigation"
                fdprocessedid="7npcmf"
              >
                <span className="navbar-toggle-icon">
                  <span className="toggle-line" />
                </span>
              </button>
            </div>
            <a className="navbar-brand" href="index.html">
              <div className="d-flex align-items-center py-3">
                <img
                  className="me-2"
                  src="/img/icons/spot-illustrations/falcon.png"
                  alt=""
                  width={40}
                />
                <span className="font-sans-serif text-primary">falcon</span>
              </div>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div className="navbar-vertical-content scrollbar">
              <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                <li className="nav-item">
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator collapsed"
                    href="#dashboard"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="dashboard"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-chart-pie fa-w-17"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chart-pie"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 544 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                          />
                        </svg>
                        {/* <span class="fas fa-chart-pie"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Dashboard</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="dashboard" style={{}}>
                    <li className="nav-item">
                      <a className="nav-link active" href="index.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Default</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard/analytics.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Analytics</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard/crm.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">CRM</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard/e-commerce.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">E commerce</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard/lms.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">LMS</span>
                          <span className="badge rounded-pill ms-2 badge-subtle-success">
                            New
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="dashboard/project-management.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Management</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard/saas.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">SaaS</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard/support-desk.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Support desk</span>
                          <span className="badge rounded-pill ms-2 badge-subtle-success">
                            New
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* label*/}
                  <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div className="col-auto navbar-vertical-label">App</div>
                    <div className="col ps-0">
                      <hr className="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>
                  {/* parent pages*/}
                  <a className="nav-link" href="app/calendar.html" role="button">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-calendar-alt fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="calendar-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                          />
                        </svg>
                        {/* <span class="fas fa-calendar-alt"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Calendar</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a className="nav-link" href="app/chat.html" role="button">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-comments fa-w-18"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="comments"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"
                          />
                        </svg>
                        {/* <span class="fas fa-comments"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Chat</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator collapsed"
                    href="#email"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="email"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-envelope-open fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="envelope-open"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"
                          />
                        </svg>
                        {/* <span class="fas fa-envelope-open"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Email</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="email" style={{}}>
                    <li className="nav-item">
                      <a className="nav-link" href="app/email/inbox.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Inbox</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/email/email-detail.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Email detail</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/email/compose.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Compose</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#events"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="events"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-calendar-day fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="calendar-day"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                          />
                        </svg>
                        {/* <span class="fas fa-calendar-day"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Events</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="events">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/events/create-an-event.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Create an event
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/events/event-detail.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Event detail</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/events/event-list.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Event list</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#e-commerce"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="e-commerce"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-shopping-cart fa-w-18"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="shopping-cart"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          />
                        </svg>
                        {/* <span class="fas fa-shopping-cart"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">E commerce</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="e-commerce">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#product"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="e-commerce"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Product</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="product">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/product/product-list.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Product list
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/product/product-grid.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Product grid
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/product/product-details.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Product details
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/product/add-product.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Add product
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#orders"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="e-commerce"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Orders</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="orders">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/orders/order-list.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Order list</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/orders/order-details.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Order details
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/e-commerce/customers.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Customers</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/customer-details.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Customer details
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/shopping-cart.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Shopping cart</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/e-commerce/checkout.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Checkout</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/e-commerce/billing.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Billing</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/e-commerce/invoice.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Invoice</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#e-learning"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="e-learning"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-graduation-cap fa-w-20"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="graduation-cap"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
                          />
                        </svg>
                        {/* <span class="fas fa-graduation-cap"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">E learning</span>
                      <span className="badge rounded-pill ms-2 badge-subtle-success">
                        New
                      </span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="e-learning">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#course"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="e-learning"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Course</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="course">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-learning/course/course-list.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Course list
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-learning/course/course-grid.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Course grid
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-learning/course/course-details.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Course details
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-learning/course/create-a-course.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Create a course
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-learning/student-overview.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Student overview
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-learning/trainer-profile.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Trainer profile
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a className="nav-link" href="app/kanban.html" role="button">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-trello fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="trello"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"
                          />
                        </svg>
                        {/* <span class="fab fa-trello"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Kanban</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#social"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="social"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-share-alt fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="share-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
                          />
                        </svg>
                        {/* <span class="fas fa-share-alt"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Social</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="social">
                    <li className="nav-item">
                      <a className="nav-link" href="app/social/feed.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Feed</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/social/activity-log.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Activity log</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/social/notifications.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Notifications</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/social/followers.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Followers</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#support-desk"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="support-desk"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-ticket-alt fa-w-18"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="ticket-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"
                          />
                        </svg>
                        {/* <span class="fas fa-ticket-alt"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Support desk</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="support-desk">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/support-desk/table-view.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Table view</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/support-desk/card-view.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Card view</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/support-desk/contacts.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Contacts</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/support-desk/contact-details.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Contact details
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/support-desk/tickets-preview.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Tickets preview
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/support-desk/quick-links.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Quick links</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="app/support-desk/reports.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Reports</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* label*/}
                  <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div className="col-auto navbar-vertical-label">Pages</div>
                    <div className="col ps-0">
                      <hr className="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>
                  {/* parent pages*/}
                  <a className="nav-link" href="pages/starter.html" role="button">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-flag fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="flag"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"
                          />
                        </svg>
                        {/* <span class="fas fa-flag"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Starter</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a className="nav-link" href="pages/landing.html" role="button">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-globe fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="globe"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                          />
                        </svg>
                        {/* <span class="fas fa-globe"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Landing</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#authentication"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="authentication"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-lock fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="lock"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                          />
                        </svg>
                        {/* <span class="fas fa-lock"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Authentication</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="authentication">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#simple"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="authentication"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Simple</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="simple">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/simple/login.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Login</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/simple/logout.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Logout</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/simple/register.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Register</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/simple/forgot-password.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Forgot password
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/simple/confirm-mail.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Confirm mail
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/simple/reset-password.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Reset password
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/simple/lock-screen.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Lock screen
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#card"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="authentication"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Card</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="card">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/card/login.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Login</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/card/logout.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Logout</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/card/register.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Register</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/card/forgot-password.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Forgot password
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/card/confirm-mail.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Confirm mail
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/card/reset-password.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Reset password
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/card/lock-screen.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Lock screen
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#split"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="authentication"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Split</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="split">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/split/login.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Login</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/split/logout.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Logout</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/split/register.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Register</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/split/forgot-password.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Forgot password
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/split/confirm-mail.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Confirm mail
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/split/reset-password.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Reset password
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/authentication/split/lock-screen.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Lock screen
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/authentication/wizard.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Wizard</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#authentication-modal"
                        data-bs-toggle="modal"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Modal</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#user"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="user"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-user fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="user"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                          />
                        </svg>
                        {/* <span class="fas fa-user"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">User</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="user">
                    <li className="nav-item">
                      <a className="nav-link" href="pages/user/profile.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Profile</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/user/settings.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Settings</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#pricing"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="pricing"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-tags fa-w-20"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="tags"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"
                          />
                        </svg>
                        {/* <span class="fas fa-tags"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Pricing</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="pricing">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/pricing/pricing-default.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Pricing default
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/pricing/pricing-alt.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Pricing alt</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#faq"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="faq"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-question-circle fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="question-circle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                          />
                        </svg>
                        {/* <span class="fas fa-question-circle"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Faq</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="faq">
                    <li className="nav-item">
                      <a className="nav-link" href="pages/faq/faq-basic.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Faq basic</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/faq/faq-alt.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Faq alt</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/faq/faq-accordion.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Faq accordion</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#errors"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="errors"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-exclamation-triangle fa-w-18"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="exclamation-triangle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                          />
                        </svg>
                        {/* <span class="fas fa-exclamation-triangle"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Errors</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="errors">
                    <li className="nav-item">
                      <a className="nav-link" href="pages/errors/404.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">404</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/errors/500.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">500</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#miscellaneous"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="miscellaneous"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-thumbtack fa-w-12"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="thumbtack"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"
                          />
                        </svg>
                        {/* <span class="fas fa-thumbtack"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Miscellaneous</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="miscellaneous">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/miscellaneous/associations.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Associations</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/miscellaneous/invite-people.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Invite people</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/miscellaneous/privacy-policy.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Privacy policy</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#Layouts"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="Layouts"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-window-restore fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="window-restore"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"
                          />
                        </svg>
                        {/* <span class="far fa-window-restore"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Layouts</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="Layouts">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="demo/navbar-vertical.html"
                        target="_blank"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Navbar vertical
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="demo/navbar-top.html"
                        target="_blank"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Top nav</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="demo/navbar-double-top.html"
                        target="_blank"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Double top</span>
                          <span className="badge rounded-pill ms-2 badge-subtle-success">
                            New
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="demo/combo-nav.html"
                        target="_blank"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Combo nav</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* label*/}
                  <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div className="col-auto navbar-vertical-label">Modules</div>
                    <div className="col ps-0">
                      <hr className="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#forms"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="forms"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-file-alt fa-w-12"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="file-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                          />
                        </svg>
                        {/* <span class="fas fa-file-alt"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Forms</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="forms">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#basic"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="forms"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Basic</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="basic">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/basic/form-control.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Form control
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/basic/input-group.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Input group
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/basic/select.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Select</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/basic/checks.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Checks</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/basic/range.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Range</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/basic/layout.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Layout</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#advance"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="forms"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Advance</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="advance">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/advance-select.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Advance select
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/date-picker.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Date picker
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/editor.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Editor</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/emoji-button.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Emoji button
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/file-uploader.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                File uploader
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/input-mask.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Input mask</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/range-slider.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Range slider
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/forms/advance/rating.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Rating</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/floating-labels.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Floating labels
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/forms/wizard.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Wizard</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/forms/validation.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Validation</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#tables"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-table fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="table"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"
                          />
                        </svg>
                        {/* <span class="fas fa-table"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Tables</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="tables">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/tables/basic-tables.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Basic tables</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/tables/advance-tables.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Advance tables</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/tables/bulk-select.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Bulk select</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#charts"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-chart-line fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chart-line"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
                          />
                        </svg>
                        {/* <span class="fas fa-chart-line"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Charts</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="charts">
                    <li className="nav-item">
                      <a className="nav-link" href="modules/charts/chartjs.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Chartjs</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/charts/d3js.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">D3js</span>
                          <span className="badge rounded-pill ms-2 badge-subtle-success">
                            New
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#eCharts"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="charts"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">ECharts</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="eCharts">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/line-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Line charts
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/bar-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Bar charts</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/candlestick-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Candlestick charts
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/geo-map.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Geo map</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/scatter-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Scatter charts
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/pie-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Pie charts</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/gauge-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Gauge charts
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/radar-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Radar charts
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/heatmap-charts.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Heatmap charts
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/charts/echarts/how-to-use.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">How to use</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#icons"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="icons"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-shapes fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="shapes"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M128,256A128,128,0,1,0,256,384,128,128,0,0,0,128,256Zm379-54.86L400.07,18.29a37.26,37.26,0,0,0-64.14,0L229,201.14C214.76,225.52,232.58,256,261.09,256H474.91C503.42,256,521.24,225.52,507,201.14ZM480,288H320a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V320A32,32,0,0,0,480,288Z"
                          />
                        </svg>
                        {/* <span class="fas fa-shapes"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Icons</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="icons">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/icons/font-awesome.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Font awesome</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/icons/bootstrap-icons.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Bootstrap icons
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/icons/feather.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Feather</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/icons/material-icons.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Material icons</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#maps"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="maps"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-map fa-w-18"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="map"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"
                          />
                        </svg>
                        {/* <span class="fas fa-map"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Maps</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="maps">
                    <li className="nav-item">
                      <a className="nav-link" href="modules/maps/google-map.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Google map</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/maps/leaflet-map.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Leaflet map</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#components"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="components"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-puzzle-piece fa-w-18"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="puzzle-piece"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"
                          />
                        </svg>
                        {/* <span class="fas fa-puzzle-piece"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Components</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="components">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/accordion.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Accordion</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/components/alerts.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Alerts</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/components/anchor.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Anchor</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/animated-icons.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Animated icons</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/background.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Background</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/components/badges.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Badges</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/bottom-bar.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Bottom bar</span>
                          <span className="badge rounded-pill ms-2 badge-subtle-success">
                            New
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/breadcrumbs.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Breadcrumbs</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/buttons.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Buttons</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/calendar.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Calendar</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/components/cards.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Cards</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#carousel"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="components"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Carousel</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="carousel">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/carousel/bootstrap.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Bootstrap</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/carousel/swiper.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Swiper</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/collapse.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Collapse</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/cookie-notice.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Cookie notice</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/countup.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Countup</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/dropdowns.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Dropdowns</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/jquery-components.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Jquery</span>
                          <span className="badge rounded-pill ms-2 badge-subtle-success">
                            New
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/list-group.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">List group</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/components/modals.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Modals</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#navs-_and_-Tabs"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="components"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Navs &amp; Tabs
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="navs-_and_-Tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/navs-and-tabs/navs.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Navs</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/navs-and-tabs/navbar.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Navbar</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/navs-and-tabs/vertical-navbar.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Navbar vertical
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/navs-and-tabs/top-navbar.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Top nav</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/navs-and-tabs/double-top-navbar.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Double top</span>
                              <span className="badge rounded-pill ms-2 badge-subtle-success">
                                New
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/navs-and-tabs/combo-navbar.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Combo nav</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/navs-and-tabs/tabs.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Tabs</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/offcanvas.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Offcanvas</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#pictures"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="components"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Pictures</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="pictures">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/pictures/avatar.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Avatar</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/pictures/images.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Images</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/pictures/figures.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Figures</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/pictures/hoverbox.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Hoverbox</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/pictures/lightbox.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Lightbox</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/progress-bar.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Progress bar</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/placeholder.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Placeholder</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/pagination.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Pagination</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/popovers.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Popovers</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/scrollspy.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Scrollspy</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/components/search.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Search</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/sortable.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Sortable</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/spinners.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Spinners</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/timeline.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Timeline</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/components/toasts.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Toasts</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/tooltips.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Tooltips</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/treeview.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Treeview</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/typed-text.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Typed text</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#videos"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="components"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Videos</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="videos">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/videos/embed.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Embed</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="modules/components/videos/plyr.html"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Plyr</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#utilities"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="utilities"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-fire fa-w-12"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="fire"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                          />
                        </svg>
                        {/* <span class="fas fa-fire"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Utilities</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="utilities">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/background.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Background</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/borders.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Borders</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/clearfix.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Clearfix</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/colors.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Colors</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/colored-links.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Colored links</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/display.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Display</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/flex.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Flex</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/float.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Float</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/focus-ring.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Focus ring</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/grid.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Grid</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/icon-link.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Icon link</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/overlayscrollbar.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Overlay scrollbar
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/position.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Position</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/ratio.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Ratio</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/spacing.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Spacing</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="modules/utilities/sizing.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Sizing</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/stretched-link.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Stretched link</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/text-truncation.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Text truncation
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/typography.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Typography</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/vertical-align.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Vertical align</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/vertical-rule.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Vertical rule</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/visibility.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Visibility</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/utilities/visually-hidden.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Visually hidden
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a className="nav-link" href="widgets.html" role="button">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-poll fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="poll"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"
                          />
                        </svg>
                        {/* <span class="fas fa-poll"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Widgets</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#multi-level"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="multi-level"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-layer-group fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="layer-group"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"
                          />
                        </svg>
                        {/* <span class="fas fa-layer-group"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Multi level</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="multi-level">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#level-two"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="multi-level"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Level two</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="level-two">
                        <li className="nav-item">
                          <a className="nav-link" href="#!.html">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 1</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#!.html">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 2</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#level-three"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="multi-level"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Level three</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="level-three">
                        <li className="nav-item">
                          <a className="nav-link" href="#!.html">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 3</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link dropdown-indicator"
                            href="#item-4"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="level-three"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 4</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                          <ul className="nav collapse" id="item-4">
                            <li className="nav-item">
                              <a className="nav-link" href="#!.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text ps-1">Item 5</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text ps-1">Item 6</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#level-four"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="multi-level"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Level four</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse" id="level-four">
                        <li className="nav-item">
                          <a className="nav-link" href="#!.html">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 6</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link dropdown-indicator"
                            href="#item-7"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="level-four"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 7</span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                          <ul className="nav collapse" id="item-7">
                            <li className="nav-item">
                              <a className="nav-link" href="#!.html">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text ps-1">Item 8</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link dropdown-indicator"
                                href="#item-9"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                aria-controls="item-7"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text ps-1">Item 9</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                              <ul className="nav collapse" id="item-9">
                                <li className="nav-item">
                                  <a className="nav-link" href="#!.html">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text ps-1">
                                        Item 10
                                      </span>
                                    </div>
                                  </a>
                                  {/* more inner pages*/}
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#!.html">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text ps-1">
                                        Item 11
                                      </span>
                                    </div>
                                  </a>
                                  {/* more inner pages*/}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* label*/}
                  <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div className="col-auto navbar-vertical-label">
                      Documentation
                    </div>
                    <div className="col ps-0">
                      <hr className="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>
                  {/* parent pages*/}
                  <a
                    className="nav-link"
                    href="documentation/getting-started.html"
                    role="button"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-rocket fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="rocket"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
                          />
                        </svg>
                        {/* <span class="fas fa-rocket"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Getting started</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#customization"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="customization"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-wrench fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="wrench"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                          />
                        </svg>
                        {/* <span class="fas fa-wrench"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Customization</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="customization">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="documentation/customization/configuration.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Configuration</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="documentation/customization/styling.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Styling</span>
                          <span className="badge rounded-pill ms-2 badge-subtle-success">
                            Updated
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="documentation/customization/dark-mode.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Dark mode</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="documentation/customization/plugin.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Plugin</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link"
                    href="documentation/faq.html"
                    role="button"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-question-circle fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="question-circle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                          />
                        </svg>
                        {/* <span class="fas fa-question-circle"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Faq</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a
                    className="nav-link"
                    href="documentation/gulp.html"
                    role="button"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-gulp fa-w-8"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="gulp"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M209.8 391.1l-14.1 24.6-4.6 80.2c0 8.9-28.3 16.1-63.1 16.1s-63.1-7.2-63.1-16.1l-5.8-79.4-14.9-25.4c41.2 17.3 126 16.7 165.6 0zm-196-253.3l13.6 125.5c5.9-20 20.8-47 40-55.2 6.3-2.7 12.7-2.7 18.7.9 5.2 3 9.6 9.3 10.1 11.8 1.2 6.5-2 9.1-4.5 9.1-3 0-5.3-4.6-6.8-7.3-4.1-7.3-10.3-7.6-16.9-2.8-6.9 5-12.9 13.4-17.1 20.7-5.1 8.8-9.4 18.5-12 28.2-1.5 5.6-2.9 14.6-.6 19.9 1 2.2 2.5 3.6 4.9 3.6 5 0 12.3-6.6 15.8-10.1 4.5-4.5 10.3-11.5 12.5-16l5.2-15.5c2.6-6.8 9.9-5.6 9.9 0 0 10.2-3.7 13.6-10 34.7-5.8 19.5-7.6 25.8-7.6 25.8-.7 2.8-3.4 7.5-6.3 7.5-1.2 0-2.1-.4-2.6-1.2-1-1.4-.9-5.3-.8-6.3.2-3.2 6.3-22.2 7.3-25.2-2 2.2-4.1 4.4-6.4 6.6-5.4 5.1-14.1 11.8-21.5 11.8-3.4 0-5.6-.9-7.7-2.4l7.6 79.6c2 5 39.2 17.1 88.2 17.1 49.1 0 86.3-12.2 88.2-17.1l10.9-94.6c-5.7 5.2-12.3 11.6-19.6 14.8-5.4 2.3-17.4 3.8-17.4-5.7 0-5.2 9.1-14.8 14.4-21.5 1.4-1.7 4.7-5.9 4.7-8.1 0-2.9-6-2.2-11.7 2.5-3.2 2.7-6.2 6.3-8.7 9.7-4.3 6-6.6 11.2-8.5 15.5-6.2 14.2-4.1 8.6-9.1 22-5 13.3-4.2 11.8-5.2 14-.9 1.9-2.2 3.5-4 4.5-1.9 1-4.5.9-6.1-.3-.9-.6-1.3-1.9-1.3-3.7 0-.9.1-1.8.3-2.7 1.5-6.1 7.8-18.1 15-34.3 1.6-3.7 1-2.6.8-2.3-6.2 6-10.9 8.9-14.4 10.5-5.8 2.6-13 2.6-14.5-4.1-.1-.4-.1-.8-.2-1.2-11.8 9.2-24.3 11.7-20-8.1-4.6 8.2-12.6 14.9-22.4 14.9-4.1 0-7.1-1.4-8.6-5.1-2.3-5.5 1.3-14.9 4.6-23.8 1.7-4.5 4-9.9 7.1-16.2 1.6-3.4 4.2-5.4 7.6-4.5.6.2 1.1.4 1.6.7 2.6 1.8 1.6 4.5.3 7.2-3.8 7.5-7.1 13-9.3 20.8-.9 3.3-2 9 1.5 9 2.4 0 4.7-.8 6.9-2.4 4.6-3.4 8.3-8.5 11.1-13.5 2-3.6 4.4-8.3 5.6-12.3.5-1.7 1.1-3.3 1.8-4.8 1.1-2.5 2.6-5.1 5.2-5.1 1.3 0 2.4.5 3.2 1.5 1.7 2.2 1.3 4.5.4 6.9-2 5.6-4.7 10.6-6.9 16.7-1.3 3.5-2.7 8-2.7 11.7 0 3.4 3.7 2.6 6.8 1.2 2.4-1.1 4.8-2.8 6.8-4.5 1.2-4.9.9-3.8 26.4-68.2 1.3-3.3 3.7-4.7 6.1-4.7 1.2 0 2.2.4 3.2 1.1 1.7 1.3 1.7 4.1 1 6.2-.7 1.9-.6 1.3-4.5 10.5-5.2 12.1-8.6 20.8-13.2 31.9-1.9 4.6-7.7 18.9-8.7 22.3-.6 2.2-1.3 5.8 1 5.8 5.4 0 19.3-13.1 23.1-17 .2-.3.5-.4.9-.6.6-1.9 1.2-3.7 1.7-5.5 1.4-3.8 2.7-8.2 5.3-11.3.8-1 1.7-1.6 2.7-1.6 2.8 0 4.2 1.2 4.2 4 0 1.1-.7 5.1-1.1 6.2 1.4-1.5 2.9-3 4.5-4.5 15-13.9 25.7-6.8 25.7.2 0 7.4-8.9 17.7-13.8 23.4-1.6 1.9-4.9 5.4-5 6.4 0 1.3.9 1.8 2.2 1.8 2 0 6.4-3.5 8-4.7 5-3.9 11.8-9.9 16.6-14.1l14.8-136.8c-30.5 17.1-197.6 17.2-228.3.2zm229.7-8.5c0 21-231.2 21-231.2 0 0-8.8 51.8-15.9 115.6-15.9 9 0 17.8.1 26.3.4l12.6-48.7L228.1.6c1.4-1.4 5.8-.2 9.9 3.5s6.6 7.9 5.3 9.3l-.1.1L185.9 74l-10 40.7c39.9 2.6 67.6 8.1 67.6 14.6zm-69.4 4.6c0-.8-.9-1.5-2.5-2.1l-.2.8c0 1.3-5 2.4-11.1 2.4s-11.1-1.1-11.1-2.4c0-.1 0-.2.1-.3l.2-.7c-1.8.6-3 1.4-3 2.3 0 2.1 6.2 3.7 13.7 3.7 7.7.1 13.9-1.6 13.9-3.7z"
                          />
                        </svg>
                        {/* <span class="fab fa-gulp"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Gulp</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a
                    className="nav-link"
                    href="documentation/design-file.html"
                    role="button"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-palette fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="palette"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                          />
                        </svg>
                        {/* <span class="fas fa-palette"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Design file</span>
                    </div>
                  </a>
                  {/* parent pages*/}
                  <a className="nav-link" href="changelog.html" role="button">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          className="svg-inline--fa fa-code-branch fa-w-12"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="code-branch"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
                          />
                        </svg>
                        {/* <span class="fas fa-code-branch"></span> Font Awesome fontawesome.com */}
                      </span>
                      <span className="nav-link-text ps-1">Changelog</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="settings my-3">
                <div className="card shadow-none">
                  <div className="card-body alert mb-0" role="alert">
                    <div className="btn-close-falcon-container">
                      <button
                        className="btn btn-link btn-close-falcon p-0"
                        aria-label="Close"
                        data-bs-dismiss="alert"
                        fdprocessedid="0g2qof"
                      />
                    </div>
                    <div className="text-center">
                      <img
                        src="/img/icons/spot-illustrations/navbar-vertical.png"
                        alt=""
                        width={80}
                      />
                      <p className="fs-11 mt-2">
                        Loving what you see? <br />
                        Get your copy of <a href="#!">Falcon</a>
                      </p>
                      <div className="d-grid">
                        <a
                          className="btn btn-sm btn-primary"
                          href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/"
                          target="_blank"
                        >
                          Purchase
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="content">
          <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
            <button
              className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalCollapse"
              aria-controls="navbarVerticalCollapse"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="toggle-line" />
              </span>
            </button>
            <a className="navbar-brand me-1 me-sm-3" href="index.html">
              <div className="d-flex align-items-center">
                <img
                  className="me-2"
                  src="/img/icons/spot-illustrations/falcon.png"
                  alt=""
                  width={40}
                />
                <span className="font-sans-serif text-primary">falcon</span>
              </div>
            </a>
            <ul className="navbar-nav align-items-center d-none d-lg-block">
              <li className="nav-item">
                <div className="search-box" data-list='{"valueNames":["title"]}'>
                  <form
                    className="position-relative"
                    data-bs-toggle="search"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    <input
                      className="form-control search-input fuzzy-search"
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <svg
                      className="svg-inline--fa fa-search fa-w-16 search-box-icon"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                    {/* <span class="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com */}
                  </form>
                  <div
                    className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                    data-bs-dismiss="search"
                  >
                    <button
                      className="btn btn-link btn-close-falcon p-0"
                      aria-label="Close"
                    />
                  </div>
                  <div className="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                    <div
                      className="scrollbar list py-3"
                      style={{ maxHeight: "24rem" }}
                    >
                      <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                        Recently Browsed
                      </h6>
                      <a
                        className="dropdown-item fs-10 px-x1 py-1 hover-primary"
                        href="app/events/event-detail.html"
                      >
                        <div className="d-flex align-items-center">
                          <svg
                            className="svg-inline--fa fa-circle fa-w-16 me-2 text-300 fs-11"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                            />
                          </svg>
                          {/* <span class="fas fa-circle me-2 text-300 fs-11"></span> Font Awesome fontawesome.com */}
                          <div className="fw-normal title">
                            Pages{" "}
                            <svg
                              className="svg-inline--fa fa-chevron-right fa-w-10 mx-1 text-500 fs-11"
                              data-fa-transform="shrink-2"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              data-fa-i2svg=""
                              style={{ transformOrigin: "0.3125em 0.5em" }}
                            >
                              <g transform="translate(160 256)">
                                <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                  <path
                                    fill="currentColor"
                                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    transform="translate(-160 -256)"
                                  />
                                </g>
                              </g>
                            </svg>
                            {/* <span class="fas fa-chevron-right mx-1 text-500 fs-11" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                            Events
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item fs-10 px-x1 py-1 hover-primary"
                        href="app/e-commerce/customers.html"
                      >
                        <div className="d-flex align-items-center">
                          <svg
                            className="svg-inline--fa fa-circle fa-w-16 me-2 text-300 fs-11"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                            />
                          </svg>
                          {/* <span class="fas fa-circle me-2 text-300 fs-11"></span> Font Awesome fontawesome.com */}
                          <div className="fw-normal title">
                            E-commerce{" "}
                            <svg
                              className="svg-inline--fa fa-chevron-right fa-w-10 mx-1 text-500 fs-11"
                              data-fa-transform="shrink-2"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="chevron-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              data-fa-i2svg=""
                              style={{ transformOrigin: "0.3125em 0.5em" }}
                            >
                              <g transform="translate(160 256)">
                                <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                  <path
                                    fill="currentColor"
                                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    transform="translate(-160 -256)"
                                  />
                                </g>
                              </g>
                            </svg>
                            {/* <span class="fas fa-chevron-right mx-1 text-500 fs-11" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                            Customers
                          </div>
                        </div>
                      </a>
                      <hr className="text-200 dark__text-900" />
                      <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                        Suggested Filter
                      </h6>
                      <a
                        className="dropdown-item px-x1 py-1 fs-9"
                        href="app/e-commerce/customers.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="badge fw-medium text-decoration-none me-2 badge-subtle-warning">
                            customers:
                          </span>
                          <div className="flex-1 fs-10 title">
                            All customers list
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item px-x1 py-1 fs-9"
                        href="app/events/event-detail.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="badge fw-medium text-decoration-none me-2 badge-subtle-success">
                            events:
                          </span>
                          <div className="flex-1 fs-10 title">
                            Latest events in current month
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item px-x1 py-1 fs-9"
                        href="app/e-commerce/product/product-grid.html"
                      >
                        <div className="d-flex align-items-center">
                          <span className="badge fw-medium text-decoration-none me-2 badge-subtle-info">
                            products:
                          </span>
                          <div className="flex-1 fs-10 title">
                            Most popular products
                          </div>
                        </div>
                      </a>
                      <hr className="text-200 dark__text-900" />
                      <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                        Files
                      </h6>
                      <a className="dropdown-item px-x1 py-2" href="#!">
                        <div className="d-flex align-items-center">
                          <div className="file-thumbnail me-2">
                            <img
                              className="border h-100 w-100 object-fit-cover rounded-3"
                              src="/img/products/3-thumb.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 title">iPhone</h6>
                            <p className="fs-11 mb-0 d-flex">
                              <span className="fw-semi-bold">Antony</span>
                              <span className="fw-medium text-600 ms-2">
                                27 Sep at 10:30 AM
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item px-x1 py-2" href="#!">
                        <div className="d-flex align-items-center">
                          <div className="file-thumbnail me-2">
                            <img
                              className="img-fluid"
                              src="/img/icons/zip.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 title">Falcon v1.8.2</h6>
                            <p className="fs-11 mb-0 d-flex">
                              <span className="fw-semi-bold">John</span>
                              <span className="fw-medium text-600 ms-2">
                                30 Sep at 12:30 PM
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                      <hr className="text-200 dark__text-900" />
                      <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                        Members
                      </h6>
                      <a
                        className="dropdown-item px-x1 py-2"
                        href="pages/user/profile.html"
                      >
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-l status-online me-2">
                            <img
                              className="rounded-circle"
                              src="/img/team/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 title">Anna Karinina</h6>
                            <p className="fs-11 mb-0 d-flex">Technext Limited</p>
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item px-x1 py-2"
                        href="pages/user/profile.html"
                      >
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-l me-2">
                            <img
                              className="rounded-circle"
                              src="/img/team/2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 title">Antony Hopkins</h6>
                            <p className="fs-11 mb-0 d-flex">Brain Trust</p>
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item px-x1 py-2"
                        href="pages/user/profile.html"
                      >
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-l me-2">
                            <img
                              className="rounded-circle"
                              src="/img/team/3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 title">Emma Watson</h6>
                            <p className="fs-11 mb-0 d-flex">Google</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="text-center mt-n3">
                      <p className="fallback fw-bold fs-8 d-none">
                        No Result Found.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
              <li className="nav-item ps-2 pe-0">
                <div className="dropdown theme-control-dropdown">
                  <a
                    className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait fs-9 pe-1 py-0"
                    href="#"
                    role="button"
                    id="themeSwitchDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-inline--fa fa-sun fa-w-16 fs-7"
                      data-fa-transform="shrink-2"
                      data-theme-dropdown-toggle-icon="light"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="sun"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                      style={{ transformOrigin: "0.5em 0.5em" }}
                    >
                      <g transform="translate(256 256)">
                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                          <path
                            fill="currentColor"
                            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                            transform="translate(-256 -256)"
                          />
                        </g>
                      </g>
                    </svg>
                    {/* <span class="fas fa-sun fs-7" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="light"></span> Font Awesome fontawesome.com */}
                    <svg
                      className="svg-inline--fa fa-moon fa-w-16 fs-7 d-none"
                      data-fa-transform="shrink-3"
                      data-theme-dropdown-toggle-icon="dark"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="moon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                      style={{ transformOrigin: "0.5em 0.5em" }}
                    >
                      <g transform="translate(256 256)">
                        <g transform="translate(0, 0)  scale(0.8125, 0.8125)  rotate(0 0 0)">
                          <path
                            fill="currentColor"
                            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                            transform="translate(-256 -256)"
                          />
                        </g>
                      </g>
                    </svg>
                    {/* <span class="fas fa-moon fs-7 d-none" data-fa-transform="shrink-3" data-theme-dropdown-toggle-icon="dark"></span> Font Awesome fontawesome.com */}
                    <svg
                      className="svg-inline--fa fa-adjust fa-w-16 fs-7 d-none"
                      data-fa-transform="shrink-2"
                      data-theme-dropdown-toggle-icon="auto"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="adjust"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                      style={{ transformOrigin: "0.5em 0.5em" }}
                    >
                      <g transform="translate(256 256)">
                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                          <path
                            fill="currentColor"
                            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
                            transform="translate(-256 -256)"
                          />
                        </g>
                      </g>
                    </svg>
                    {/* <span class="fas fa-adjust fs-7 d-none" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="auto"></span> Font Awesome fontawesome.com */}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-3"
                    aria-labelledby="themeSwitchDropdown"
                  >
                    <div className="bg-white dark__bg-1000 rounded-2 py-2">
                      <button
                        className="dropdown-item d-flex align-items-center gap-2 active"
                        type="button"
                        value="light"
                        data-theme-control="theme"
                      >
                        <svg
                          className="svg-inline--fa fa-sun fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="sun"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                          />
                        </svg>
                        {/* <span class="fas fa-sun"></span> Font Awesome fontawesome.com */}
                        Light
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
                      </button>
                      <button
                        className="dropdown-item d-flex align-items-center gap-2"
                        type="button"
                        value="dark"
                        data-theme-control="theme"
                      >
                        <svg
                          className="svg-inline--fa fa-moon fa-w-16"
                          data-fa-transform=""
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="moon"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                          />
                        </svg>
                        {/* <span class="fas fa-moon" data-fa-transform=""></span> Font Awesome fontawesome.com */}
                        Dark
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
                      </button>
                      <button
                        className="dropdown-item d-flex align-items-center gap-2"
                        type="button"
                        value="auto"
                        data-theme-control="theme"
                      >
                        <svg
                          className="svg-inline--fa fa-adjust fa-w-16"
                          data-fa-transform=""
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="adjust"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
                          />
                        </svg>
                        {/* <span class="fas fa-adjust" data-fa-transform=""></span> Font Awesome fontawesome.com */}
                        Auto
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a
                  className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
                  href="app/e-commerce/shopping-cart.html"
                >
                  <svg
                    className="svg-inline--fa fa-shopping-cart fa-w-18"
                    data-fa-transform="shrink-7"
                    style={{ fontSize: 33, transformOrigin: "0.5625em 0.5em" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="shopping-cart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <g transform="translate(288 256)">
                      <g transform="translate(0, 0)  scale(0.5625, 0.5625)  rotate(0 0 0)">
                        <path
                          fill="currentColor"
                          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          transform="translate(-288 -256)"
                        />
                      </g>
                    </g>
                  </svg>
                  {/* <span class="fas fa-shopping-cart" data-fa-transform="shrink-7" style="font-size: 33px;"></span> Font Awesome fontawesome.com */}
                  <span className="notification-indicator-number">1</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
                  id="navbarDropdownNotification"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-hide-on-body-scroll="data-hide-on-body-scroll"
                >
                  <svg
                    className="svg-inline--fa fa-bell fa-w-14"
                    data-fa-transform="shrink-6"
                    style={{ fontSize: 33, transformOrigin: "0.4375em 0.5em" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bell"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <g transform="translate(224 256)">
                      <g transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)">
                        <path
                          fill="currentColor"
                          d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                          transform="translate(-224 -256)"
                        />
                      </g>
                    </g>
                  </svg>
                  {/* <span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span> Font Awesome fontawesome.com */}
                </a>
                <div
                  className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
                  aria-labelledby="navbarDropdownNotification"
                >
                  <div className="card card-notification shadow-none">
                    <div className="card-header">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <h6 className="card-header-title mb-0">Notifications</h6>
                        </div>
                        <div className="col-auto ps-0 ps-sm-3">
                          <a className="card-link fw-normal" href="#">
                            Mark all as read
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="scrollbar-overlay"
                      style={{ maxHeight: "19rem" }}
                      data-simplebar="init"
                    >
                      <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                          <div
                            className="simplebar-offset"
                            style={{ right: 0, bottom: 0 }}
                          >
                            <div
                              className="simplebar-content-wrapper"
                              tabIndex={0}
                              role="region"
                              aria-label="scrollable content"
                              style={{ height: "auto", overflow: "hidden" }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: 0 }}
                              >
                                <div className="list-group list-group-flush fw-normal fs-10">
                                  <div className="list-group-title border-bottom">
                                    NEW
                                  </div>
                                  <div className="list-group-item">
                                    <a
                                      className="notification notification-flush notification-unread"
                                      href="#!"
                                    >
                                      <div className="notification-avatar">
                                        <div className="avatar avatar-2xl me-3">
                                          <img
                                            className="rounded-circle"
                                            src="/img/team/1-thumb.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="notification-body">
                                        <p className="mb-1">
                                          <strong>Emma Watson</strong> replied to
                                          your comment : "Hello world 😍"
                                        </p>
                                        <span className="notification-time">
                                          <span
                                            className="me-2"
                                            role="img"
                                            aria-label="Emoji"
                                          >
                                            💬
                                          </span>
                                          Just now
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="list-group-item">
                                    <a
                                      className="notification notification-flush notification-unread"
                                      href="#!"
                                    >
                                      <div className="notification-avatar">
                                        <div className="avatar avatar-2xl me-3">
                                          <div className="avatar-name rounded-circle">
                                            <span>AB</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="notification-body">
                                        <p className="mb-1">
                                          <strong>Albert Brooks</strong> reacted to{" "}
                                          <strong>Mia Khalifa's</strong> status
                                        </p>
                                        <span className="notification-time">
                                          <svg
                                            className="svg-inline--fa fa-gratipay fa-w-16 me-2 text-danger"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="gratipay"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 496 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z"
                                            />
                                          </svg>
                                          {/* <span class="me-2 fab fa-gratipay text-danger"></span> Font Awesome fontawesome.com */}
                                          9hr
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="list-group-title border-bottom">
                                    EARLIER
                                  </div>
                                  <div className="list-group-item">
                                    <a
                                      className="notification notification-flush"
                                      href="#!"
                                    >
                                      <div className="notification-avatar">
                                        <div className="avatar avatar-2xl me-3">
                                          <img
                                            className="rounded-circle"
                                            src="/img/icons/weather-sm.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="notification-body">
                                        <p className="mb-1">
                                          The forecast today shows a low of 20℃ in
                                          California. See today's weather.
                                        </p>
                                        <span className="notification-time">
                                          <span
                                            className="me-2"
                                            role="img"
                                            aria-label="Emoji"
                                          >
                                            🌤️
                                          </span>
                                          1d
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="list-group-item">
                                    <a
                                      className="border-bottom-0 notification-unread  notification notification-flush"
                                      href="#!"
                                    >
                                      <div className="notification-avatar">
                                        <div className="avatar avatar-xl me-3">
                                          <img
                                            className="rounded-circle"
                                            src="/img/logos/oxford.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="notification-body">
                                        <p className="mb-1">
                                          <strong>University of Oxford</strong>{" "}
                                          created an event : "Causal Inference
                                          Hilary 2019"
                                        </p>
                                        <span className="notification-time">
                                          <span
                                            className="me-2"
                                            role="img"
                                            aria-label="Emoji"
                                          >
                                            ✌️
                                          </span>
                                          1w
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="list-group-item">
                                    <a
                                      className="border-bottom-0 notification notification-flush"
                                      href="#!"
                                    >
                                      <div className="notification-avatar">
                                        <div className="avatar avatar-xl me-3">
                                          <img
                                            className="rounded-circle"
                                            src="/img/team/10.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="notification-body">
                                        <p className="mb-1">
                                          <strong>James Cameron</strong> invited to
                                          join the group: United Nations
                                          International Children's Fund
                                        </p>
                                        <span className="notification-time">
                                          <span
                                            className="me-2"
                                            role="img"
                                            aria-label="Emoji"
                                          >
                                            🙋‍
                                          </span>
                                          2d
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: 0, height: 0 }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ width: 0, display: "none" }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ height: 0, display: "none" }}
                        />
                      </div>
                    </div>
                    <div className="card-footer text-center border-top">
                      <a
                        className="card-link d-block"
                        href="app/social/notifications.html"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown px-1">
                <a
                  className="nav-link fa-icon-wait nine-dots p-1"
                  id="navbarDropdownMenu"
                  role="button"
                  data-hide-on-body-scroll="data-hide-on-body-scroll"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={43}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx={2} cy={2} r={2} fill="#6C6E71" />
                    <circle cx={2} cy={8} r={2} fill="#6C6E71" />
                    <circle cx={2} cy={14} r={2} fill="#6C6E71" />
                    <circle cx={8} cy={8} r={2} fill="#6C6E71" />
                    <circle cx={8} cy={14} r={2} fill="#6C6E71" />
                    <circle cx={14} cy={8} r={2} fill="#6C6E71" />
                    <circle cx={14} cy={14} r={2} fill="#6C6E71" />
                    <circle cx={8} cy={2} r={2} fill="#6C6E71" />
                    <circle cx={14} cy={2} r={2} fill="#6C6E71" />
                  </svg>
                </a>
                <div
                  className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
                  aria-labelledby="navbarDropdownMenu"
                >
                  <div className="card shadow-none">
                    <div
                      className="scrollbar-overlay nine-dots-dropdown"
                      data-simplebar="init"
                    >
                      <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                          <div
                            className="simplebar-offset"
                            style={{ right: 0, bottom: 0 }}
                          >
                            <div
                              className="simplebar-content-wrapper"
                              tabIndex={0}
                              role="region"
                              aria-label="scrollable content"
                              style={{ height: "auto", overflow: "hidden" }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: 0 }}
                              >
                                <div className="card-body px-3">
                                  <div className="row text-center gx-0 gy-0">
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="pages/user/profile.html"
                                        target="_blank"
                                      >
                                        <div className="avatar avatar-2xl">
                                          {" "}
                                          <img
                                            className="rounded-circle"
                                            src="/img/team/3.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                                          Account
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="https://themewagon.com/"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/themewagon.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Themewagon
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="https://mailbluster.com/"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/mailbluster.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Mailbluster
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/google.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Google
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/spotify.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Spotify
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/steam.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Steam
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/github-light.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Github
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/discord.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Discord
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/xbox.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          xbox
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/trello.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Kanban
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/hp.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Hp
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-12">
                                      <hr className="my-3 mx-n3 bg-200" />
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/linkedin.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Linkedin
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/twitter.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Twitter
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/facebook.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Facebook
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/instagram.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Instagram
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/pinterest.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Pinterest
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/slack.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Slack
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="#!"
                                        target="_blank"
                                      >
                                        <img
                                          className="rounded"
                                          src="/img/nav-icons/deviantart.png"
                                          alt=""
                                          width={40}
                                          height={40}
                                        />
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                          Deviantart
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-4">
                                      <a
                                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                        href="app/events/event-detail.html"
                                        target="_blank"
                                      >
                                        <div className="avatar avatar-2xl">
                                          <div className="avatar-name rounded-circle bg-primary-subtle text-primary">
                                            <span className="fs-7">E</span>
                                          </div>
                                        </div>
                                        <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                                          Events
                                        </p>
                                      </a>
                                    </div>
                                    <div className="col-12">
                                      <a
                                        className="btn btn-outline-primary btn-sm mt-4"
                                        href="#!"
                                      >
                                        Show more
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: 0, height: 0 }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ width: 0, display: "none" }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ height: 0, display: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link pe-0 ps-2"
                  id="navbarDropdownUser"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-xl">
                    <img
                      className="rounded-circle"
                      src="/img/team/3-thumb.png"
                      alt=""
                    />
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
                  aria-labelledby="navbarDropdownUser"
                >
                  <div className="bg-white dark__bg-1000 rounded-2 py-2">
                    <a className="dropdown-item fw-bold text-warning" href="#!">
                      <svg
                        className="svg-inline--fa fa-crown fa-w-20 me-1"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="crown"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
                        />
                      </svg>
                      {/* <span class="fas fa-crown me-1"></span> Font Awesome fontawesome.com */}
                      <span>Go Pro</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#!">
                      Set status
                    </a>
                    <a className="dropdown-item" href="pages/user/profile.html">
                      Profile &amp; account
                    </a>
                    <a className="dropdown-item" href="#!">
                      Feedback
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="pages/user/settings.html">
                      Settings
                    </a>
                    <a
                      className="dropdown-item"
                      href="pages/authentication/card/logout.html"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className="row g-3 mb-3">
            <div className="col-md-6 col-xxl-3">
              <div className="card h-md-100 ecommerce-card-min-width">
                <div className="card-header pb-0">
                  <h6 className="mb-0 mt-2 d-flex align-items-center">
                    Weekly Sales
                    <span
                      className="ms-1 text-400"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Calculated according to last week's sales"
                      data-bs-original-title="Calculated according to last week's sales"
                    >
                      <svg
                        className="svg-inline--fa fa-question-circle fa-w-16"
                        data-fa-transform="shrink-1"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="question-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                        style={{ transformOrigin: "0.5em 0.5em" }}
                      >
                        <g transform="translate(256 256)">
                          <g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)">
                            <path
                              fill="currentColor"
                              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                              transform="translate(-256 -256)"
                            />
                          </g>
                        </g>
                      </svg>
                      {/* <span class="far fa-question-circle" data-fa-transform="shrink-1"></span> Font Awesome fontawesome.com */}
                    </span>
                  </h6>
                </div>
                <div className="card-body d-flex flex-column justify-content-end">
                  <div className="row">
                    <div className="col">
                      <p className="font-sans-serif lh-1 mb-1 fs-5">$47K</p>
                      <span className="badge badge-subtle-success rounded-pill fs-11">
                        +3.5%
                      </span>
                    </div>
                    <div className="col-auto ps-0">
                      <div
                        className="echart-bar-weekly-sales h-100"
                        style={{
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          position: "relative"
                        }}
                        _echarts_instance_="ec_1723181238196"
                      >
                        <div
                          style={{
                            position: "relative",
                            width: 136,
                            height: 61,
                            padding: 0,
                            margin: 0,
                            borderWidth: 0,
                            cursor: "pointer"
                          }}
                        >
                          <canvas
                            data-zr-dom-id="zr_0"
                            width={136}
                            height={61}
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 136,
                              height: 61,
                              userSelect: "none",
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              padding: 0,
                              margin: 0,
                              borderWidth: 0
                            }}
                          />
                        </div>
                        <div
                          className=""
                          style={{
                            position: "absolute",
                            display: "block",
                            borderStyle: "solid",
                            whiteSpace: "nowrap",
                            zIndex: 9999999,
                            boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                            backgroundColor: "rgb(249, 250, 253)",
                            borderWidth: 1,
                            borderRadius: 4,
                            color: "rgb(11, 23, 39)",
                            font: '14px / 21px "Microsoft YaHei"',
                            padding: "7px 10px",
                            top: 0,
                            left: 0,
                            transform: "translate3d(-16px, -4px, 0px)",
                            borderColor: "rgb(216, 226, 239)",
                            pointerEvents: "none",
                            visibility: "hidden",
                            opacity: 0
                          }}
                        >
                          Mon : 200
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3">
              <div className="card h-md-100">
                <div className="card-header pb-0">
                  <h6 className="mb-0 mt-2">Total Order</h6>
                </div>
                <div className="card-body d-flex flex-column justify-content-end">
                  <div className="row justify-content-between">
                    <div className="col-auto align-self-end">
                      <div className="fs-5 fw-normal font-sans-serif text-700 lh-1 mb-1">
                        58.4K
                      </div>
                      <span className="badge rounded-pill fs-11 bg-200 text-primary">
                        <svg
                          className="svg-inline--fa fa-caret-up fa-w-10 me-1"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-up"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                          />
                        </svg>
                        {/* <span class="fas fa-caret-up me-1"></span> Font Awesome fontawesome.com */}
                        13.6%
                      </span>
                    </div>
                    <div className="col-auto ps-0 mt-n4">
                      <div
                        className="echart-default-total-order"
                        data-echarts='{"tooltip":{"trigger":"axis","formatter":"{b0} : {c0}"},"xAxis":{"data":["Week 4","Week 5","Week 6","Week 7"]},"series":[{"type":"line","data":[20,40,100,120],"smooth":true,"lineStyle":{"width":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}'
                        data-echart-responsive="true"
                        _echarts_instance_="ec_1723181238201"
                        style={{
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          position: "relative"
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: 138,
                            height: 90,
                            padding: 0,
                            margin: 0,
                            borderWidth: 0
                          }}
                        >
                          <canvas
                            data-zr-dom-id="zr_0"
                            width={138}
                            height={90}
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 138,
                              height: 90,
                              userSelect: "none",
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              padding: 0,
                              margin: 0,
                              borderWidth: 0
                            }}
                          />
                        </div>
                        <div className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3">
              <div className="card h-md-100">
                <div className="card-body">
                  <div className="row h-100 justify-content-between g-0">
                    <div className="col-5 col-sm-6 col-xxl pe-2">
                      <h6 className="mt-1">Market Share</h6>
                      <div className="fs-11 mt-3">
                        <div className="d-flex flex-between-center mb-1">
                          <div className="d-flex align-items-center">
                            <span className="dot bg-primary" />
                            <span className="fw-semi-bold">Samsung</span>
                          </div>
                          <div className="d-xxl-none">33%</div>
                        </div>
                        <div className="d-flex flex-between-center mb-1">
                          <div className="d-flex align-items-center">
                            <span className="dot bg-info" />
                            <span className="fw-semi-bold">Huawei</span>
                          </div>
                          <div className="d-xxl-none">29%</div>
                        </div>
                        <div className="d-flex flex-between-center mb-1">
                          <div className="d-flex align-items-center">
                            <span className="dot bg-300" />
                            <span className="fw-semi-bold">Apple</span>
                          </div>
                          <div className="d-xxl-none">20%</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto position-relative">
                      <div
                        className="echart-market-share"
                        _echarts_instance_="ec_1723181238197"
                        style={{
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          position: "relative"
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: 106,
                            height: 106,
                            padding: 0,
                            margin: 0,
                            borderWidth: 0,
                            cursor: "default"
                          }}
                        >
                          <canvas
                            data-zr-dom-id="zr_0"
                            width={106}
                            height={106}
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 106,
                              height: 106,
                              userSelect: "none",
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              padding: 0,
                              margin: 0,
                              borderWidth: 0
                            }}
                          />
                        </div>
                        <div className="" />
                      </div>
                      <div className="position-absolute top-50 start-50 translate-middle text-1100 fs-7">
                        26M
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3">
              <div className="card h-md-100">
                <div className="card-header d-flex flex-between-center pb-0">
                  <h6 className="mb-0">Weather</h6>
                  <div className="dropdown font-sans-serif btn-reveal-trigger">
                    <button
                      className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                      type="button"
                      id="dropdown-weather-update"
                      data-bs-toggle="dropdown"
                      data-boundary="viewport"
                      aria-haspopup="true"
                      aria-expanded="false"
                      fdprocessedid="vpy8lj"
                    >
                      <svg
                        className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ellipsis-h"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                        />
                      </svg>
                      {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end border py-2"
                      aria-labelledby="dropdown-weather-update"
                    >
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="row g-0 h-100 align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3"
                          src="/img/icons/weather-icon.png"
                          alt=""
                          height={60}
                        />
                        <div>
                          <h6 className="mb-2">New York City</h6>
                          <div className="fs-11 fw-semi-bold">
                            <div className="text-warning">Sunny</div>Precipitation:
                            50%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-center ps-2">
                      <div className="fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1">
                        31°
                      </div>
                      <div className="fs-10 text-800">32° / 25°</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 pe-lg-2 mb-3">
              <div className="card h-lg-100 overflow-hidden">
                <div className="card-header bg-body-tertiary">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="mb-0">Running Projects</h6>
                    </div>
                    <div className="col-auto text-center pe-x1">
                      <select
                        className="form-select form-select-sm"
                        fdprocessedid="52jdpo"
                      >
                        <option>Working Time</option>
                        <option>Estimated Time</option>
                        <option>Billable Time</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                    <div className="col ps-x1 py-1 position-static">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-xl me-3">
                          <div className="avatar-name rounded-circle bg-primary-subtle text-dark">
                            <span className="fs-9 text-primary">F</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 d-flex align-items-center">
                            <a className="text-800 stretched-link" href="#!">
                              Falcon
                            </a>
                            <span className="badge rounded-pill ms-2 bg-200 text-primary">
                              38%
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col py-1">
                      <div className="row flex-end-center g-0">
                        <div className="col-auto pe-2">
                          <div className="fs-10 fw-semi-bold">12:50:00</div>
                        </div>
                        <div className="col-5 pe-x1 ps-2">
                          <div
                            className="progress bg-200 me-2"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-valuenow={38}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar rounded-pill"
                              style={{ width: "38%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                    <div className="col ps-x1 py-1 position-static">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-xl me-3">
                          <div className="avatar-name rounded-circle bg-success-subtle text-dark">
                            <span className="fs-9 text-success">R</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 d-flex align-items-center">
                            <a className="text-800 stretched-link" href="#!">
                              Reign
                            </a>
                            <span className="badge rounded-pill ms-2 bg-200 text-primary">
                              79%
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col py-1">
                      <div className="row flex-end-center g-0">
                        <div className="col-auto pe-2">
                          <div className="fs-10 fw-semi-bold">25:20:00</div>
                        </div>
                        <div className="col-5 pe-x1 ps-2">
                          <div
                            className="progress bg-200 me-2"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-valuenow={79}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar rounded-pill"
                              style={{ width: "79%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                    <div className="col ps-x1 py-1 position-static">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-xl me-3">
                          <div className="avatar-name rounded-circle bg-info-subtle text-dark">
                            <span className="fs-9 text-info">B</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 d-flex align-items-center">
                            <a className="text-800 stretched-link" href="#!">
                              Boots4
                            </a>
                            <span className="badge rounded-pill ms-2 bg-200 text-primary">
                              90%
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col py-1">
                      <div className="row flex-end-center g-0">
                        <div className="col-auto pe-2">
                          <div className="fs-10 fw-semi-bold">58:20:00</div>
                        </div>
                        <div className="col-5 pe-x1 ps-2">
                          <div
                            className="progress bg-200 me-2"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar rounded-pill"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                    <div className="col ps-x1 py-1 position-static">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-xl me-3">
                          <div className="avatar-name rounded-circle bg-warning-subtle text-dark">
                            <span className="fs-9 text-warning">R</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 d-flex align-items-center">
                            <a className="text-800 stretched-link" href="#!">
                              Raven
                            </a>
                            <span className="badge rounded-pill ms-2 bg-200 text-primary">
                              40%
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col py-1">
                      <div className="row flex-end-center g-0">
                        <div className="col-auto pe-2">
                          <div className="fs-10 fw-semi-bold">21:20:00</div>
                        </div>
                        <div className="col-5 pe-x1 ps-2">
                          <div
                            className="progress bg-200 me-2"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar rounded-pill"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center py-2 position-relative">
                    <div className="col ps-x1 py-1 position-static">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-xl me-3">
                          <div className="avatar-name rounded-circle bg-danger-subtle text-dark">
                            <span className="fs-9 text-danger">S</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 d-flex align-items-center">
                            <a className="text-800 stretched-link" href="#!">
                              Slick
                            </a>
                            <span className="badge rounded-pill ms-2 bg-200 text-primary">
                              70%
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col py-1">
                      <div className="row flex-end-center g-0">
                        <div className="col-auto pe-2">
                          <div className="fs-10 fw-semi-bold">31:20:00</div>
                        </div>
                        <div className="col-5 pe-x1 ps-2">
                          <div
                            className="progress bg-200 me-2"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar rounded-pill"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-body-tertiary p-0">
                  <a className="btn btn-sm btn-link d-block w-100 py-2" href="#!">
                    Show all projects
                    <svg
                      className="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs-11"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                      />
                    </svg>
                    {/* <span class="fas fa-chevron-right ms-1 fs-11"></span> Font Awesome fontawesome.com */}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-2 mb-3">
              <div className="card h-lg-100">
                <div className="card-header">
                  <div className="row flex-between-center">
                    <div className="col-auto">
                      <h6 className="mb-0">Total Sales</h6>
                    </div>
                    <div className="col-auto d-flex">
                      <select
                        className="form-select form-select-sm select-month me-2"
                        fdprocessedid="tajauyp"
                      >
                        <option value={0}>January</option>
                        <option value={1}>February</option>
                        <option value={2}>March</option>
                        <option value={3}>April</option>
                        <option value={4}>May</option>
                        <option value={5}>Jun</option>
                        <option value={6}>July</option>
                        <option value={7}>August</option>
                        <option value={8}>September</option>
                        <option value={9}>October</option>
                        <option value={10}>November</option>
                        <option value={11}>December</option>
                      </select>
                      <div className="dropdown font-sans-serif btn-reveal-trigger">
                        <button
                          className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                          type="button"
                          id="dropdown-total-sales"
                          data-bs-toggle="dropdown"
                          data-boundary="viewport"
                          aria-haspopup="true"
                          aria-expanded="false"
                          fdprocessedid="7hko5y"
                        >
                          <svg
                            className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ellipsis-h"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                            />
                          </svg>
                          {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end border py-2"
                          aria-labelledby="dropdown-total-sales"
                        >
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body h-100 pe-0">
                  {/* Find the JS file for the following chart at: src\js\charts\echarts\total-sales.js*/}
                  {/* If you are not using gulp based workflow, you can find the transpiled code at: public\assets\js\theme.js*/}
                  <div
                    className="echart-line-total-sales h-100"
                    data-echart-responsive="true"
                    _echarts_instance_="ec_1723181238198"
                    style={{
                      userSelect: "none",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      position: "relative"
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: 783,
                        height: 283,
                        padding: 0,
                        margin: 0,
                        borderWidth: 0,
                        cursor: "default"
                      }}
                    >
                      <canvas
                        data-zr-dom-id="zr_0"
                        width={783}
                        height={283}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 783,
                          height: 283,
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          padding: 0,
                          margin: 0,
                          borderWidth: 0
                        }}
                      />
                    </div>
                    <div
                      className=""
                      style={{
                        position: "absolute",
                        display: "block",
                        borderStyle: "solid",
                        whiteSpace: "nowrap",
                        zIndex: 9999999,
                        boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                        backgroundColor: "rgb(249, 250, 253)",
                        borderWidth: 1,
                        borderRadius: 4,
                        color: "rgb(11, 23, 39)",
                        font: '14px / 21px "Microsoft YaHei"',
                        padding: "7px 10px",
                        top: 0,
                        left: 0,
                        transform: "translate3d(604px, -26px, 0px)",
                        borderColor: "rgb(216, 226, 239)",
                        pointerEvents: "none",
                        visibility: "hidden",
                        opacity: 0
                      }}
                    >
                      Jan 14, 40
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 col-xl-7 col-xxl-8 mb-3 pe-lg-2 mb-3">
              <div className="card h-lg-100">
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="mb-3 text-800">
                      Using Storage{" "}
                      <strong className="text-1100">1775.06 MB </strong>of 2 GB
                    </h6>
                    <div
                      className="progress-stacked mb-3 rounded-3"
                      style={{ height: 10 }}
                    >
                      <div
                        className="progress"
                        style={{ width: "43.72%" }}
                        role="progressbar"
                        aria-valuenow="43.72"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar bg-progress-gradient border-end border-100 border-2" />
                      </div>
                      <div
                        className="progress"
                        style={{ width: "18.76%" }}
                        role="progressbar"
                        aria-valuenow="18.76"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar bg-info border-end border-100 border-2" />
                      </div>
                      <div
                        className="progress"
                        style={{ width: "9.38%" }}
                        role="progressbar"
                        aria-valuenow="9.38"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar bg-success border-end border-100 border-2" />
                      </div>
                      <div
                        className="progress"
                        style={{ width: "28.14%" }}
                        role="progressbar"
                        aria-valuenow="28.14"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar bg-200" />
                      </div>
                    </div>
                    <div className="row fs-10 fw-semi-bold text-500 g-0">
                      <div className="col-auto d-flex align-items-center pe-3">
                        <span className="dot bg-primary" />
                        <span>Regular</span>
                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                          (895MB)
                        </span>
                      </div>
                      <div className="col-auto d-flex align-items-center pe-3">
                        <span className="dot bg-info" />
                        <span>System</span>
                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                          (379MB)
                        </span>
                      </div>
                      <div className="col-auto d-flex align-items-center pe-3">
                        <span className="dot bg-success" />
                        <span>Shared</span>
                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                          (192MB)
                        </span>
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <span className="dot bg-200" />
                        <span>Free</span>
                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                          (576MB)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 col-xxl-4 mb-3 ps-lg-2">
              <div className="card h-lg-100">
                <div
                  className="bg-holder bg-card"
                  style={{
                    backgroundImage:
                      "url(/img/icons/spot-illustrations/corner-1.png)"
                  }}
                />
                {/*/.bg-holder*/}
                <div className="card-body position-relative">
                  <h5 className="text-warning">Running out of your space?</h5>
                  <p className="fs-10 mb-0">
                    Your storage will be running out soon. Get more space and
                    powerful productivity features.
                  </p>
                  <a
                    className="btn btn-link fs-10 text-warning mt-lg-3 ps-0"
                    href="#!"
                  >
                    Upgrade storage
                    <svg
                      className="svg-inline--fa fa-chevron-right fa-w-10 ms-1"
                      data-fa-transform="shrink-4 down-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                      style={{ transformOrigin: "0.3125em 0.5625em" }}
                    >
                      <g transform="translate(160 256)">
                        <g transform="translate(0, 32)  scale(0.75, 0.75)  rotate(0 0 0)">
                          <path
                            fill="currentColor"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            transform="translate(-160 -256)"
                          />
                        </g>
                      </g>
                    </svg>
                    {/* <span class="fas fa-chevron-right ms-1" data-fa-transform="shrink-4 down-1"></span> Font Awesome fontawesome.com */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-7 col-xl-8 pe-lg-2 mb-3">
              <div className="card h-lg-100 overflow-hidden">
                <div className="card-body p-0">
                  <div className="table-responsive scrollbar">
                    <table className="table table-dashboard mb-0 table-borderless fs-10 border-200">
                      <thead className="bg-body-tertiary">
                        <tr>
                          <th className="text-900">Best Selling Products</th>
                          <th className="text-900 text-end">Revenue ($3333)</th>
                          <th
                            className="text-900 pe-x1 text-end"
                            style={{ width: "8rem" }}
                          >
                            Revenue (%)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-bottom border-200">
                          <td>
                            <div className="d-flex align-items-center position-relative">
                              <img
                                className="rounded-1 border border-200"
                                src="/img/products/12.png"
                                width={60}
                                alt=""
                              />
                              <div className="flex-1 ms-3">
                                <h6 className="mb-1 fw-semi-bold">
                                  <a className="text-1100 stretched-link" href="#!">
                                    Raven Pro
                                  </a>
                                </h6>
                                <p className="fw-semi-bold mb-0 text-500">
                                  Landing
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-end fw-semi-bold">
                            $1311
                          </td>
                          <td className="align-middle pe-x1">
                            <div className="d-flex align-items-center">
                              <div
                                className="progress me-3 rounded-3 bg-200"
                                style={{ height: 5, width: 80 }}
                                role="progressbar"
                                aria-valuenow={39}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar rounded-pill"
                                  style={{ width: "39%" }}
                                />
                              </div>
                              <div className="fw-semi-bold ms-2">39%</div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom border-200">
                          <td>
                            <div className="d-flex align-items-center position-relative">
                              <img
                                className="rounded-1 border border-200"
                                src="/img/products/10.png"
                                width={60}
                                alt=""
                              />
                              <div className="flex-1 ms-3">
                                <h6 className="mb-1 fw-semi-bold">
                                  <a className="text-1100 stretched-link" href="#!">
                                    Boots4
                                  </a>
                                </h6>
                                <p className="fw-semi-bold mb-0 text-500">
                                  Portfolio
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-end fw-semi-bold">
                            $860
                          </td>
                          <td className="align-middle pe-x1">
                            <div className="d-flex align-items-center">
                              <div
                                className="progress me-3 rounded-3 bg-200"
                                style={{ height: 5, width: 80 }}
                                role="progressbar"
                                aria-valuenow={26}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar rounded-pill"
                                  style={{ width: "26%" }}
                                />
                              </div>
                              <div className="fw-semi-bold ms-2">26%</div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom border-200">
                          <td>
                            <div className="d-flex align-items-center position-relative">
                              <img
                                className="rounded-1 border border-200"
                                src="/img/products/11.png"
                                width={60}
                                alt=""
                              />
                              <div className="flex-1 ms-3">
                                <h6 className="mb-1 fw-semi-bold">
                                  <a className="text-1100 stretched-link" href="#!">
                                    Falcon
                                  </a>
                                </h6>
                                <p className="fw-semi-bold mb-0 text-500">Admin</p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-end fw-semi-bold">
                            $539
                          </td>
                          <td className="align-middle pe-x1">
                            <div className="d-flex align-items-center">
                              <div
                                className="progress me-3 rounded-3 bg-200"
                                style={{ height: 5, width: 80 }}
                                role="progressbar"
                                aria-valuenow={16}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar rounded-pill"
                                  style={{ width: "16%" }}
                                />
                              </div>
                              <div className="fw-semi-bold ms-2">16%</div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom border-200">
                          <td>
                            <div className="d-flex align-items-center position-relative">
                              <img
                                className="rounded-1 border border-200"
                                src="/img/products/14.png"
                                width={60}
                                alt=""
                              />
                              <div className="flex-1 ms-3">
                                <h6 className="mb-1 fw-semi-bold">
                                  <a className="text-1100 stretched-link" href="#!">
                                    Slick
                                  </a>
                                </h6>
                                <p className="fw-semi-bold mb-0 text-500">
                                  Builder
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-end fw-semi-bold">
                            $343
                          </td>
                          <td className="align-middle pe-x1">
                            <div className="d-flex align-items-center">
                              <div
                                className="progress me-3 rounded-3 bg-200"
                                style={{ height: 5, width: 80 }}
                                role="progressbar"
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar rounded-pill"
                                  style={{ width: "10%" }}
                                />
                              </div>
                              <div className="fw-semi-bold ms-2">10%</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center position-relative">
                              <img
                                className="rounded-1 border border-200"
                                src="/img/products/13.png"
                                width={60}
                                alt=""
                              />
                              <div className="flex-1 ms-3">
                                <h6 className="mb-1 fw-semi-bold">
                                  <a className="text-1100 stretched-link" href="#!">
                                    Reign Pro
                                  </a>
                                </h6>
                                <p className="fw-semi-bold mb-0 text-500">Agency</p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-end fw-semi-bold">
                            $280
                          </td>
                          <td className="align-middle pe-x1">
                            <div className="d-flex align-items-center">
                              <div
                                className="progress me-3 rounded-3 bg-200"
                                style={{ height: 5, width: 80 }}
                                role="progressbar"
                                aria-valuenow={8}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar rounded-pill"
                                  style={{ width: "8%" }}
                                />
                              </div>
                              <div className="fw-semi-bold ms-2">8%</div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer bg-body-tertiary py-2">
                  <div className="row flex-between-center">
                    <div className="col-auto">
                      <select
                        className="form-select form-select-sm"
                        fdprocessedid="9h31bv"
                      >
                        <option>Last 7 days</option>
                        <option>Last Month</option>
                        <option>Last Year</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <a className="btn btn-sm btn-falcon-default" href="#!">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4 ps-lg-2 mb-3">
              <div className="card h-100">
                <div className="card-header d-flex flex-between-center bg-body-tertiary py-2">
                  <h6 className="mb-0">Shared Files</h6>
                  <a className="py-1 fs-10 font-sans-serif" href="#!">
                    View All
                  </a>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                    <div className="file-thumbnail">
                      <img
                        className="border h-100 w-100 object-fit-cover rounded-2"
                        src="/img/products/5-thumb.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-3 flex-shrink-1 flex-grow-1">
                      <h6 className="mb-1">
                        <a
                          className="stretched-link text-900 fw-semi-bold"
                          href="#!"
                        >
                          apple-smart-watch.png
                        </a>
                      </h6>
                      <div className="fs-10">
                        <span className="fw-semi-bold">Antony</span>
                        <span className="fw-medium text-600 ms-2">Just Now</span>
                      </div>
                      <div className="hover-actions end-0 top-50 translate-middle-y">
                        <a
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          href="/img/icons/cloud-download.svg"
                          download="download"
                          aria-label="Download"
                          data-bs-original-title="Download"
                        >
                          <img
                            src="/img/icons/cloud-download.svg"
                            alt=""
                            width={15}
                          />
                        </a>
                        <button
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Edit"
                          data-bs-original-title="Edit"
                        >
                          <img
                            src="/img/icons/edit-alt.svg"
                            alt=""
                            width={15}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="text-200" />
                  <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                    <div className="file-thumbnail">
                      <img
                        className="border h-100 w-100 object-fit-cover rounded-2"
                        src="/img/products/3-thumb.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-3 flex-shrink-1 flex-grow-1">
                      <h6 className="mb-1">
                        <a
                          className="stretched-link text-900 fw-semi-bold"
                          href="#!"
                        >
                          iphone.jpg
                        </a>
                      </h6>
                      <div className="fs-10">
                        <span className="fw-semi-bold">Antony</span>
                        <span className="fw-medium text-600 ms-2">
                          Yesterday at 1:30 PM
                        </span>
                      </div>
                      <div className="hover-actions end-0 top-50 translate-middle-y">
                        <a
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          href="/img/icons/cloud-download.svg"
                          download="download"
                          aria-label="Download"
                          data-bs-original-title="Download"
                        >
                          <img
                            src="/img/icons/cloud-download.svg"
                            alt=""
                            width={15}
                          />
                        </a>
                        <button
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Edit"
                          data-bs-original-title="Edit"
                        >
                          <img
                            src="/img/icons/edit-alt.svg"
                            alt=""
                            width={15}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="text-200" />
                  <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                    <div className="file-thumbnail">
                      <img
                        className="img-fluid"
                        src="/img/icons/zip.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-3 flex-shrink-1 flex-grow-1">
                      <h6 className="mb-1">
                        <a
                          className="stretched-link text-900 fw-semi-bold"
                          href="#!"
                        >
                          Falcon v1.8.2
                        </a>
                      </h6>
                      <div className="fs-10">
                        <span className="fw-semi-bold">Jane</span>
                        <span className="fw-medium text-600 ms-2">
                          27 Sep at 10:30 AM
                        </span>
                      </div>
                      <div className="hover-actions end-0 top-50 translate-middle-y">
                        <a
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          href="/img/icons/cloud-download.svg"
                          download="download"
                          aria-label="Download"
                          data-bs-original-title="Download"
                        >
                          <img
                            src="/img/icons/cloud-download.svg"
                            alt=""
                            width={15}
                          />
                        </a>
                        <button
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Edit"
                          data-bs-original-title="Edit"
                        >
                          <img
                            src="/img/icons/edit-alt.svg"
                            alt=""
                            width={15}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="text-200" />
                  <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                    <div className="file-thumbnail">
                      <img
                        className="border h-100 w-100 object-fit-cover rounded-2"
                        src="/img/products/2-thumb.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-3 flex-shrink-1 flex-grow-1">
                      <h6 className="mb-1">
                        <a
                          className="stretched-link text-900 fw-semi-bold"
                          href="#!"
                        >
                          iMac.jpg
                        </a>
                      </h6>
                      <div className="fs-10">
                        <span className="fw-semi-bold">Rowen</span>
                        <span className="fw-medium text-600 ms-2">
                          23 Sep at 6:10 PM
                        </span>
                      </div>
                      <div className="hover-actions end-0 top-50 translate-middle-y">
                        <a
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          href="/img/icons/cloud-download.svg"
                          download="download"
                          aria-label="Download"
                          data-bs-original-title="Download"
                        >
                          <img
                            src="/img/icons/cloud-download.svg"
                            alt=""
                            width={15}
                          />
                        </a>
                        <button
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Edit"
                          data-bs-original-title="Edit"
                        >
                          <img
                            src="/img/icons/edit-alt.svg"
                            alt=""
                            width={15}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="text-200" />
                  <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                    <div className="file-thumbnail">
                      <img
                        className="img-fluid"
                        src="/img/icons/docs.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-3 flex-shrink-1 flex-grow-1">
                      <h6 className="mb-1">
                        <a
                          className="stretched-link text-900 fw-semi-bold"
                          href="#!"
                        >
                          functions.php
                        </a>
                      </h6>
                      <div className="fs-10">
                        <span className="fw-semi-bold">John</span>
                        <span className="fw-medium text-600 ms-2">
                          1 Oct at 4:30 PM
                        </span>
                      </div>
                      <div className="hover-actions end-0 top-50 translate-middle-y">
                        <a
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          href="/img/icons/cloud-download.svg"
                          download="download"
                          aria-label="Download"
                          data-bs-original-title="Download"
                        >
                          <img
                            src="/img/icons/cloud-download.svg"
                            alt=""
                            width={15}
                          />
                        </a>
                        <button
                          className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Edit"
                          data-bs-original-title="Edit"
                        >
                          <img
                            src="/img/icons/edit-alt.svg"
                            alt=""
                            width={15}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-6 col-xxl-3 pe-md-2 mb-3 mb-xxl-0">
              <div className="card">
                <div className="card-header d-flex flex-between-center bg-body-tertiary py-2">
                  <h6 className="mb-0">Active Users</h6>
                  <div className="dropdown font-sans-serif btn-reveal-trigger">
                    <button
                      className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                      type="button"
                      id="dropdown-active-user"
                      data-bs-toggle="dropdown"
                      data-boundary="viewport"
                      aria-haspopup="true"
                      aria-expanded="false"
                      fdprocessedid="rwpyii"
                    >
                      <svg
                        className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ellipsis-h"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                        />
                      </svg>
                      {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end border py-2"
                      aria-labelledby="dropdown-active-user"
                    >
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body py-2">
                  <div className="d-flex align-items-center position-relative mb-3">
                    <div className="avatar avatar-2xl status-online">
                      <img
                        className="rounded-circle"
                        src="/img/team/1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ms-3">
                      <h6 className="mb-0 fw-semi-bold">
                        <a
                          className="stretched-link text-900"
                          href="pages/user/profile.html"
                        >
                          Emma Watson
                        </a>
                      </h6>
                      <p className="text-500 fs-11 mb-0">Admin</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center position-relative mb-3">
                    <div className="avatar avatar-2xl status-online">
                      <img
                        className="rounded-circle"
                        src="/img/team/2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ms-3">
                      <h6 className="mb-0 fw-semi-bold">
                        <a
                          className="stretched-link text-900"
                          href="pages/user/profile.html"
                        >
                          Antony Hopkins
                        </a>
                      </h6>
                      <p className="text-500 fs-11 mb-0">Moderator</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center position-relative mb-3">
                    <div className="avatar avatar-2xl status-away">
                      <img
                        className="rounded-circle"
                        src="/img/team/3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ms-3">
                      <h6 className="mb-0 fw-semi-bold">
                        <a
                          className="stretched-link text-900"
                          href="pages/user/profile.html"
                        >
                          Anna Karinina
                        </a>
                      </h6>
                      <p className="text-500 fs-11 mb-0">Editor</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center position-relative mb-3">
                    <div className="avatar avatar-2xl status-offline">
                      <img
                        className="rounded-circle"
                        src="/img/team/4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ms-3">
                      <h6 className="mb-0 fw-semi-bold">
                        <a
                          className="stretched-link text-900"
                          href="pages/user/profile.html"
                        >
                          John Lee
                        </a>
                      </h6>
                      <p className="text-500 fs-11 mb-0">Admin</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center position-relative false">
                    <div className="avatar avatar-2xl status-offline">
                      <img
                        className="rounded-circle"
                        src="/img/team/5.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ms-3">
                      <h6 className="mb-0 fw-semi-bold">
                        <a
                          className="stretched-link text-900"
                          href="pages/user/profile.html"
                        >
                          Rowen Atkinson
                        </a>
                      </h6>
                      <p className="text-500 fs-11 mb-0">Editor</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-body-tertiary p-0">
                  <a
                    className="btn btn-sm btn-link d-block w-100 py-2"
                    href="app/social/followers.html"
                  >
                    All active users
                    <svg
                      className="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs-11"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                      />
                    </svg>
                    {/* <span class="fas fa-chevron-right ms-1 fs-11"></span> Font Awesome fontawesome.com */}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3 ps-md-2 order-xxl-1 mb-3 mb-xxl-0">
              <div className="card h-100">
                <div className="card-header bg-body-tertiary d-flex flex-between-center py-2">
                  <h6 className="mb-0">Bandwidth Saved</h6>
                  <div className="dropdown font-sans-serif btn-reveal-trigger">
                    <button
                      className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                      type="button"
                      id="dropdown-bandwidth-saved"
                      data-bs-toggle="dropdown"
                      data-boundary="viewport"
                      aria-haspopup="true"
                      aria-expanded="false"
                      fdprocessedid="egzza"
                    >
                      <svg
                        className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ellipsis-h"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                        />
                      </svg>
                      {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end border py-2"
                      aria-labelledby="dropdown-bandwidth-saved"
                    >
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body d-flex flex-center flex-column">
                  {/* Find the JS file for the following chart at: src/js/charts/echarts/bandwidth-saved.js*/}
                  {/* If you are not using gulp based workflow, you can find the transpiled code at: public//js/theme.js*/}
                  <div
                    className="echart-bandwidth-saved"
                    data-echart-responsive="true"
                    _echarts_instance_="ec_1723181238200"
                    style={{
                      userSelect: "none",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: 165,
                        height: 165,
                        padding: 0,
                        margin: 0,
                        borderWidth: 0
                      }}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h6 className="fs-9 mb-1">
                      <svg
                        className="svg-inline--fa fa-check fa-w-16 text-success me-1"
                        data-fa-transform="shrink-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                        style={{ transformOrigin: "0.5em 0.5em" }}
                      >
                        <g transform="translate(256 256)">
                          <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                            <path
                              fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                              transform="translate(-256 -256)"
                            />
                          </g>
                        </g>
                      </svg>
                      {/* <span class="fas fa-check text-success me-1" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}
                      35.75 GB saved
                    </h6>
                    <p className="fs-10 mb-0">38.44 GB total bandwidth</p>
                  </div>
                </div>
                <div className="card-footer bg-body-tertiary py-2">
                  <div className="row flex-between-center">
                    <div className="col-auto">
                      <select
                        className="form-select form-select-sm"
                        fdprocessedid="1e52gr"
                      >
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                        <option>Last 2 Year</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <a className="fs-10 font-sans-serif" href="#!">
                        Help
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 px-xxl-2">
              <div className="card h-100">
                <div className="card-header bg-body-tertiary py-2">
                  <div className="row flex-between-center">
                    <div className="col-auto">
                      <h6 className="mb-0">Top Products</h6>
                    </div>
                    <div className="col-auto d-flex">
                      <a className="btn btn-link btn-sm me-2" href="#!">
                        View Details
                      </a>
                      <div className="dropdown font-sans-serif btn-reveal-trigger">
                        <button
                          className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                          type="button"
                          id="dropdown-top-products"
                          data-bs-toggle="dropdown"
                          data-boundary="viewport"
                          aria-haspopup="true"
                          aria-expanded="false"
                          fdprocessedid="i4ptn"
                        >
                          <svg
                            className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ellipsis-h"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                            />
                          </svg>
                          {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end border py-2"
                          aria-labelledby="dropdown-top-products"
                        >
                          <a className="dropdown-item" href="#!">
                            View
                          </a>
                          <a className="dropdown-item" href="#!">
                            Export
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#!">
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body h-100">
                  {/* Find the JS file for the following chart at: src/js/charts/echarts/top-products.js*/}
                  {/* If you are not using gulp based workflow, you can find the transpiled code at: public//js/theme.js*/}
                  <div
                    className="echart-bar-top-products h-100"
                    data-echart-responsive="true"
                    _echarts_instance_="ec_1723181238199"
                    style={{
                      userSelect: "none",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      position: "relative"
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: 755,
                        height: 274,
                        padding: 0,
                        margin: 0,
                        borderWidth: 0
                      }}
                    >
                      <canvas
                        data-zr-dom-id="zr_0"
                        width={755}
                        height={274}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 755,
                          height: 274,
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          padding: 0,
                          margin: 0,
                          borderWidth: 0
                        }}
                      />
                    </div>
                    <div className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="row g-0 justify-content-between fs-10 mt-4 mb-3">
              <div className="col-12 col-sm-auto text-center">
                <p className="mb-0 text-600">
                  Thank you for creating with Falcon{" "}
                  <span className="d-none d-sm-inline-block">| </span>
                  <br className="d-sm-none" /> 2024 ©{" "}
                  <a href="https://themewagon.com/">Themewagon</a>
                </p>
              </div>
              <div className="col-12 col-sm-auto text-center">
                <p className="mb-0 text-600">v3.21.0</p>
              </div>
            </div>
          </footer>
        </div>
        <div
          className="modal fade"
          id="authentication-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="authentication-modal-label"
          aria-hidden="true"
        >
          <div className="modal-dialog mt-6" role="document">
            <div className="modal-content border-0">
              <div className="modal-header px-5 position-relative modal-shape-header bg-shape">
                <div className="position-relative z-1">
                  <h4 className="mb-0 text-white" id="authentication-modal-label">
                    Register
                  </h4>
                  <p className="fs-10 mb-0 text-white">
                    Please create your free Falcon account
                  </p>
                </div>
                <button
                  className="btn-close position-absolute top-0 end-0 mt-2 me-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body py-4 px-5">
                <form>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="modal-auth-name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      autoComplete="on"
                      id="modal-auth-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="modal-auth-email">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      autoComplete="on"
                      id="modal-auth-email"
                      style={{
                        backgroundImage: 'url("data:image/png',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: 20,
                        backgroundPosition: "97% center",
                        cursor: "auto"
                      }}
                      data-temp-mail-org={0}
                    />
                  </div>
                  <div className="row gx-2">
                    <div className="mb-3 col-sm-6">
                      <label className="form-label" htmlFor="modal-auth-password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        autoComplete="on"
                        id="modal-auth-password"
                      />
                    </div>
                    <div className="mb-3 col-sm-6">
                      <label
                        className="form-label"
                        htmlFor="modal-auth-confirm-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        autoComplete="on"
                        id="modal-auth-confirm-password"
                      />
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="modal-auth-register-checkbox"
                    />
                    <label
                      className="form-label"
                      htmlFor="modal-auth-register-checkbox"
                    >
                      I accept the <a href="#!">terms </a>and{" "}
                      <a className="white-space-nowrap" href="#!">
                        privacy policy
                      </a>
                    </label>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-block w-100 mt-3"
                      type="submit"
                      name="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="position-relative mt-5">
                  <hr />
                  <div className="divider-content-center">or register with</div>
                </div>
                <div className="row g-2 mt-2">
                  <div className="col-sm-6">
                    <a
                      className="btn btn-outline-google-plus btn-sm d-block w-100"
                      href="#"
                    >
                      <svg
                        className="svg-inline--fa fa-google-plus-g fa-w-20 me-2"
                        data-fa-transform="grow-8"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google-plus-g"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        data-fa-i2svg=""
                        style={{ transformOrigin: "0.625em 0.5em" }}
                      >
                        <g transform="translate(320 256)">
                          <g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)">
                            <path
                              fill="currentColor"
                              d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
                              transform="translate(-320 -256)"
                            />
                          </g>
                        </g>
                      </svg>
                      {/* <span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com */}{" "}
                      google
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      className="btn btn-outline-facebook btn-sm d-block w-100"
                      href="#"
                    >
                      <svg
                        className="svg-inline--fa fa-facebook-square fa-w-14 me-2"
                        data-fa-transform="grow-8"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-square"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                        style={{ transformOrigin: "0.4375em 0.5em" }}
                      >
                        <g transform="translate(224 256)">
                          <g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)">
                            <path
                              fill="currentColor"
                              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                              transform="translate(-224 -256)"
                            />
                          </g>
                        </g>
                      </svg>
                      {/* <span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com */}{" "}
                      facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default DashboardLayout