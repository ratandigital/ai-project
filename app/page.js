import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="page-wrapper">
      {/* Start Header Top Area  */}
      <div className="header-top-news bg-image1">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="content">
                    <span className="rainbow-badge">Limited Time Offer</span>
                    <span className="news-text">
                      Intro price. Get ChatenAI for Big Sale -95% off.
                    </span>
                  </div>
                  <div className="right-button">
                    <a className="btn-read-more" href="#">
                      <span>
                        Purchase Now <i className="feather-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-close">
          <button className="close-button bgsection-activation">
            <i className="feather-x" />
          </button>
        </div>
      </div>
      {/* End Header Top Area  */}
      {/* Start Header Area  */}
      <header className="rainbow-header header-default header-not-transparent header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="logo">
                <a href="index-2.html">
                  <img
                    className="logo-light"
                    src="assets/images/logo/logo.png"
                    alt="ChatBot Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-6 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <ul className="mainmenu">
                    <li>
                      <a href="dashboard.html">Welcome</a>
                    </li>
                    <li className="with-megamenu has-menu-child-item position-relative">
                      <a href="#">Dashboard</a>
                      <div className="rainbow-megamenu right-align with-mega-item-2">
                        <div className="wrapper p-0">
                          <div className="row row--0">
                            <div className="col-lg-6 single-mega-item">
                              <h3 className="rbt-short-title">DASHBOARD PAGES</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="profile-details.html">
                                    <span>Profile</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="notification.html">
                                    <span>Notification</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="chat-export.html">
                                    <span>Chat Export</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="appearance.html">
                                    <span>Apperance</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="plans-billing.html">
                                    <span>Plans and Billing</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="sessions.html">
                                    <span>Sessions</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="application.html">
                                    <span>Application</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="release-notes.html">
                                    <span>Release notes</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="help.html">
                                    <span>Help &amp; FAQs</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 single-mega-item">
                              <div className="header-menu-img">
                                <img
                                  src="assets/images/menu-img/menu-img-2.png"
                                  alt="Menu Split Image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="signin.html">Sign In</a>
                    </li>
                  </ul>
                </nav>
                {/* Start Header Btn  */}
                <div className="header-btn">
                  <a
                    className="btn-default btn-small round"
                    target="_blank"
                    href="text-generator.html"
                  >
                    Get Started Free
                  </a>
                </div>
                {/* End Header Btn  */}
                {/* Start Tools Area */}
                <div className="mainmenu-nav d-none d-lg-block one-menu">
                  <ul className="mainmenu one-menu-item">
                    <li className="with-megamenu has-menu-child-item position-relative menu-item-open">
                      <a className="header-round-btn" href="#">
                        <span>
                          <i className="feather-grid" />
                        </span>
                      </a>
                      <div className="rainbow-megamenu with-mega-item-2 right-align">
                        <div className="wrapper">
                          <div className="row row--0">
                            <div className="col-lg-4 single-mega-item">
                              <div className="genarator-section">
                                <ul className="genarator-card-group full-width-list">
                                  <li>
                                    <a
                                      href="text-generator.html"
                                      className="genarator-card bg-flashlight-static center-align"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/text_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Text Generator
                                          </h5>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="vedio-generator.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/video-camera_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Vedio Generator
                                          </h5>
                                        </div>
                                      </div>
                                      <span className="rainbow-badge-card">
                                        Hot
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="code-generator.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/code-editor_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            HTML Generator
                                          </h5>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="genarator-card center-align bg-flashlight-static disabled"
                                      tabIndex={-1}
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/lyrics_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Lyrics Generator
                                          </h5>
                                        </div>
                                      </div>
                                      <span className="rainbow-badge-card">
                                        Comming
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 single-mega-item">
                              <div className="genarator-section">
                                <ul className="genarator-card-group full-width-list">
                                  <li>
                                    <a
                                      href="image-editor.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/photo-editor_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">Photo Editor</h5>
                                        </div>
                                      </div>
                                      <span className="rainbow-badge-card">
                                        Hot
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="image-generator.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/photo_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Image Generator
                                          </h5>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="text-generator.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/voice_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Speech to text
                                          </h5>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="genarator-card center-align bg-flashlight-static disabled"
                                      tabIndex={-1}
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/website-design_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Website Generator
                                          </h5>
                                        </div>
                                      </div>
                                      <span className="rainbow-badge-card">
                                        Comming
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 single-mega-item">
                              <div className="genarator-section">
                                <ul className="genarator-card-group full-width-list">
                                  <li>
                                    <a
                                      href="code-generator.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/code-editor_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Code Generator
                                          </h5>
                                        </div>
                                      </div>
                                      <span className="rainbow-badge-card">
                                        Hot
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="email-generator.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/email_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">Email Writer</h5>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="text-generator.html"
                                      className="genarator-card center-align bg-flashlight-static"
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/text-voice_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Text to speech
                                          </h5>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="text-generator.html"
                                      className="genarator-card center-align bg-flashlight-static disabled center-align"
                                      tabIndex={-1}
                                    >
                                      <div className="inner bottom-flashlight">
                                        <div className="left-align">
                                          <div className="img-bar">
                                            <img
                                              src="assets/images/generator-icon/document_line.png"
                                              alt="AI Generator"
                                            />
                                          </div>
                                          <h5 className="title">
                                            Chat with Documents
                                          </h5>
                                        </div>
                                      </div>
                                      <span className="rainbow-badge-card">
                                        Comming
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* End Tools Area */}
                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button className="hamberger-button">
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
                {/* Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area  */}
      <div className="popup-mobile-menu">
        <div className="inner-popup">
          <div className="header-top">
            <div className="logo">
              <a href="index-2.html">
                <img
                  className="logo-light"
                  src="assets/images/logo/logo.png"
                  alt="Corporate Logo"
                />
                <img
                  className="logo-dark"
                  src="assets/images/logo/logo-dark.png"
                  alt="Corporate Logo"
                />
              </a>
            </div>
            <div className="close-menu">
              <button className="close-button">
                <i className="feather-x" />
              </button>
            </div>
          </div>
          <div className="content">
            <ul className="mainmenu">
              <li>
                <a href="dashboard.html">Welcome</a>
              </li>
              <li className="with-megamenu has-menu-child-item position-relative">
                <a href="#">Dashboard</a>
                <div className="rainbow-megamenu right-align with-mega-item-2">
                  <div className="wrapper p-0">
                    <div className="row row--0">
                      <div className="col-lg-6 single-mega-item">
                        <h3 className="rbt-short-title">DASHBOARD PAGES</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="profile-details.html">
                              <span>Profile</span>
                            </a>
                          </li>
                          <li>
                            <a href="notification.html">
                              <span>Notification</span>
                            </a>
                          </li>
                          <li>
                            <a href="chat-export.html">
                              <span>Chat Export</span>
                            </a>
                          </li>
                          <li>
                            <a href="appearance.html">
                              <span>Apperance</span>
                            </a>
                          </li>
                          <li>
                            <a href="plans-billing.html">
                              <span>Plans and Billing</span>
                            </a>
                          </li>
                          <li>
                            <a href="sessions.html">
                              <span>Sessions</span>
                            </a>
                          </li>
                          <li>
                            <a href="application.html">
                              <span>Application</span>
                            </a>
                          </li>
                          <li>
                            <a href="release-notes.html">
                              <span>Release notes</span>
                            </a>
                          </li>
                          <li>
                            <a href="help.html">
                              <span>Help &amp; FAQs</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 single-mega-item">
                        <div className="header-menu-img">
                          <img
                            src="assets/images/menu-img/menu-img-2.png"
                            alt="Menu Split Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="signin.html">Sign In</a>
              </li>
            </ul>
            <div className="rbt-sm-separator" />
            <div className="rbt-default-sidebar-wrapper">
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="dashboard.html">
                      <i className="feather-monitor" />
                      <span>Welcome</span>
                    </a>
                  </li>
                  <li>
                    <a href="plans-billing.html">
                      <i className="feather-briefcase" />
                      <span>Manage Subsription</span>
                    </a>
                  </li>
                </ul>
                <div className="rbt-sm-separator" />
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="text-generator.html">
                      <img
                        src="assets/images/generator-icon/text.png"
                        alt="AI Generator"
                      />
                      <span>Text Generator</span>
                    </a>
                  </li>
                  <li>
                    <a href="image-generator.html">
                      <img
                        src="assets/images/generator-icon/photo.png"
                        alt="AI Generator"
                      />
                      <span>Image Generator</span>
                      <div className="rainbow-badge-card badge-sm ml--10">
                        Hot
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="code-generator.html">
                      <img
                        src="assets/images/generator-icon/code-editor.png"
                        alt="AI Generator"
                      />
                      <span>Code Generator</span>
                    </a>
                  </li>
                  <li>
                    <a href="image-editor.html">
                      <img
                        src="assets/images/generator-icon/photo-editor.png"
                        alt="AI Generator"
                      />
                      <span>Image Editor</span>
                    </a>
                  </li>
                  <li>
                    <a href="vedio-generator.html">
                      <img
                        src="assets/images/generator-icon/video-camera.png"
                        alt="AI Generator"
                      />
                      <span>Vedio Generator</span>
                    </a>
                  </li>
                  <li>
                    <a href="email-generator.html">
                      <img
                        src="assets/images/generator-icon/email.png"
                        alt="AI Generator"
                      />
                      <span>Email Generator</span>
                    </a>
                  </li>
                  <li>
                    <a
                      tabIndex={-1}
                      className="disabled"
                      aria-disabled="true"
                      role="button"
                    >
                      <img
                        src="assets/images/generator-icon/website-design.png"
                        alt="AI Generator"
                      />
                      <span>Website Generator</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="rbt-sm-separator" />
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li className="has-submenu">
                    <a
                      className="collapse-btn collapsed"
                      data-bs-toggle="collapse"
                      href="#collapseExampleMenu"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExampleMenu"
                    >
                      <i className="feather-plus-circle" />
                      <span>Setting</span>
                    </a>
                    <div className="collapse" id="collapseExampleMenu">
                      <ul className="submenu rbt-default-sidebar-list">
                        <li>
                          <a href="profile-details.html">
                            <i className="feather-user" />
                            <span>Profile Details</span>
                          </a>
                        </li>
                        <li>
                          <a href="notification.html">
                            <i className="feather-shopping-bag" />
                            <span>Notification</span>
                          </a>
                        </li>
                        <li>
                          <a href="chat-export.html">
                            <i className="feather-users" />
                            <span>Chat Export</span>
                          </a>
                        </li>
                        <li>
                          <a href="appearance.html">
                            <i className="feather-home" />
                            <span>Apperance</span>
                          </a>
                        </li>
                        <li>
                          <a href="plans-billing.html">
                            <i className="feather-briefcase" />
                            <span>Plans and Billing</span>
                          </a>
                        </li>
                        <li>
                          <a href="sessions.html">
                            <i className="feather-users" />
                            <span>Sessions</span>
                          </a>
                        </li>
                        <li>
                          <a href="application.html">
                            <i className="feather-list" />
                            <span>Application</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <i className="feather-award" />
                      <span>Help &amp; FAQ</span>
                    </a>
                  </li>
                </ul>
                <div className="rbt-sm-separator" />
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="release-notes.html">
                      <i className="feather-bell" />
                      <span>Release notes</span>
                    </a>
                  </li>
                  <li>
                    <a href="terms-policy.html">
                      <i className="feather-briefcase" />
                      <span>Terms &amp; Policy</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Start Header Btn  */}
          <div className="header-btn d-block d-md-none">
            <a
              className="btn-default @@btnClass"
              target="_blank"
              href="text-generator.html"
            >
              Get Started Free
            </a>
          </div>
          {/* End Header Btn  */}
        </div>
      </div>
      {/* Imroz Preloader */}
      {/* <div className="preloader">
        <div className="loader">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div> */}
      {/* Start Slider Area  */}
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay={1}
      >
        {/* <div class="bg-blend-top bg_dot-mask"></div> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--60">
                <h1 className="title display-one">
                  Unlock The Power Of <br />
                  <span className="theme-gradient">ChatenAI AI</span> With <br />
                  <span className="color-off">Smartest AI</span>
                </h1>
                <p className="b1 desc-text">
                  AI-Powered Copywriting A Game-Changer in Content Creation.
                </p>
                <div className="button-group">
                  <a
                    className="btn-default bg-light-gradient btn-large"
                    href="text-generator.html"
                  >
                    <div className="has-bg-light" />
                    <span>Start writing for free</span>
                  </a>
                </div>
                <p className="color-gray mt--5">💳 No credit card required!</p>
              </div>
            </div>
            <div className="col-lg-10 col-xl-10 order-1 order-lg-2">
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center">
                <img
                  src="assets/images/banner/banner-image-03.png"
                  alt="Banner Images"
                />
                <div className="video-icon">
                  <a
                    className="btn-default rounded-player popup-video border bg-white-dropshadow"
                    href="https://www.youtube.com/watch?v=tj9-MGHCs38"
                  >
                    <span>
                      <i className="feather-play" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatenai-separator has-position-bottom">
          <img
            className="w-100"
            src="assets/images/separator/separator-top.svg"
            alt=""
          />
        </div>
      </div>
      {/* End Slider Area  */}
      {/* Start Service__Style--1 Area  */}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">GET IN TOUCH FOR FREE</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Instant Content Generation with AI
                </h2>
                <p className="description b1">
                  Provide Descriptions, Get Instant AI-Generated Content
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
                <div className="icon">
                  <i className="feather-activity" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">Effortless Content AI</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    Let our AI-powered service take the hard work out of content
                    creation. Get started today with AI.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
                <div className="icon">
                  <i className="feather-cast" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">Your Words, Our Tech</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    Discover how AI can transform your ideas into engaging with
                    our qualitifull service for a better content.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={200}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
                <div className="icon">
                  <i className="feather-map" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">AI-Powered Writing </a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    Access AI-generated content for your blogs, websites, and more
                    with our qualitifull convenient service.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
                <div className="icon">
                  <i className="feather-loader" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">AI Generation Simple</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    Experience the ease of content creation with our AI service.
                    Write less, achieve more.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
                <div className="icon">
                  <i className="feather-speaker" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">Quality AI Content</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    Get professionally written content in no time with our AI
                    service. Quality meets speed.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={200}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
                <div className="icon">
                  <i className="feather-terminal" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">Your Writing Assistant</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    Collaborate with AI to generate content that resonates with
                    your audience. Try it now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service__Style--1 Area  */}
      {/* Start Seperator Area  */}
      <div className="chatenai-separator">
        <img
          className="w-100"
          src="assets/images/separator/separator-top.svg"
          alt=""
        />
      </div>
      {/* End Seperator Area  */}
      {/* Start Timeline-Style-Four  */}
      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">HOW IT WORKS</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Guide Our AI to Create Your Copy
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--30">
              <div className="timeline-style-two bg-flashlight bg-color-blackest">
                <div className="row row--0">
                  <div className="col-lg-4 col-md-4 rainbow-timeline-single dark-line">
                    <div className="rainbow-timeline">
                      <h6
                        className="title"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={200}
                      >
                        1.Select template
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner" />
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner" />
                        </div>
                      </div>
                      <p
                        className="description"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={300}
                      >
                        Easily Select Templates for Website Content.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 rainbow-timeline-single dark-line">
                    <div className="rainbow-timeline">
                      <h6
                        className="title"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={200}
                      >
                        2.Describe topic
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner" />
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner" />
                        </div>
                      </div>
                      <p
                        className="description"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={300}
                      >
                        All Feature available features in Essentials.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 rainbow-timeline-single dark-line">
                    <div className="rainbow-timeline">
                      <h6
                        className="title"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={200}
                      >
                        3.Generate content
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner" />
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner" />
                        </div>
                      </div>
                      <p
                        className="description"
                        data-sal="slide-up"
                        data-sal-duration={700}
                        data-sal-delay={300}
                      >
                        Popular Feature available features in Essentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-group mt--50 text-center">
                <a className="btn-default btn-large" href="text-generator.html">
                  Start writing for free
                </a>
                <a
                  className="btn-default btn-large btn-border popup-video"
                  href="https://www.youtube.com/watch?v=tj9-MGHCs38"
                >
                  <span>
                    <i className="feather-play" />
                  </span>{" "}
                  See action in video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Timeline-Style-Four  */}
      {/* Start Seperator Area  */}
      <div className="chatenai-separator">
        <img
          className="w-100"
          src="assets/images/separator/separator-bottom.svg"
          alt=""
        />
      </div>
      {/* End Seperator Area  */}
      {/* Start Split Style-1 Area  */}
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-6 col-xl-6 col-6">
                  <div className="thumbnail">
                    
                    <img
                      className="radius"
                      src="assets/images/split/split-8.png"
                      alt="split Images"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-6">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      Instant Content with AI
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      Unlock Conversion-Driven Content: Business Bios, Facebook
                      Ads, Product Descriptions, Emails, Landing Pages, Social
                      Ads, and Beyond.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={350}
                    >
                      <li>- Craft Articles in Under 20 Seconds.</li>
                      <li>- Reclaim Hundreds of Valuable Hours with AI</li>
                      <li>- Elevate Copywriting with Rewriter.</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={400}
                    >
                      <a className="btn-default" href="contact.html">
                        Contact With Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Split Style-1 Area  */}
      {/* Start Seperator Area  */}
      <div className="chatenai-separator">
        <img
          className="w-100"
          src="assets/images/separator/separator-top.svg"
          alt=""
        />
      </div>
      {/* End Seperator Area  */}
      {/* Start Pricing Area  */}
      <div className="rainbow-pricing-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Commence Content Journey with AI
                </h2>
                <p className="description b1">
                  Collaborate with AI to generate content that resonates.
                </p>
              </div>
            </div>
          </div>
          <div className="row row--15">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="rainbow-pricing style-2">
                <div className="pricing-table-inner bg-flashlight">
                  <div className="pricing-header">
                    <h4 className="title">Basic</h4>
                    <div className="pricing">
                      <div className="price-wrapper">
                        <span className="price">Free</span>
                      </div>
                      <span className="subtitle">Forever</span>
                    </div>
                  </div>
                  <div className="separator-animated mt--30 mb--30" />
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <i className="feather-check-circle" /> 7,700 Words
                      </li>
                      <li>
                        <i className="feather-check-circle" /> 6+ Templates
                      </li>
                      <li>
                        <i className="feather-check-circle" /> 5+ Languages
                      </li>
                      <li>
                        <i className="feather-minus-circle" /> AI Blog generate
                      </li>
                      <li>
                        <i className="feather-minus-circle" /> Advance Editor Tool
                      </li>
                      <li>
                        <i className="feather-minus-circle" /> Consistent support
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a className="btn-default btn-border" href="#">
                      Try it now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="rainbow-pricing style-2 active">
                <div className="pricing-table-inner bg-flashlight">
                  <div className="pricing-header">
                    <h4 className="title">Business</h4>
                    <div className="pricing">
                      <div className="price-wrapper">
                        <span className="currency">$</span>
                        <span className="price">50</span>
                      </div>
                      <span className="subtitle">USD Per Month</span>
                    </div>
                  </div>
                  <div className="separator-animated animated-true mt--30 mb--30" />
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <i className="feather-check-circle" /> 80,000 Words
                      </li>
                      <li>
                        <i className="feather-check-circle" /> 6+ Templates
                      </li>
                      <li>
                        <i className="feather-check-circle" /> 5+ Languages
                      </li>
                      <li>
                        <i className="feather-check-circle" /> AI Blog generate
                      </li>
                      <li>
                        <i className="feather-check-circle" /> Advance Editor Tool
                      </li>
                      <li>
                        <i className="feather-check-circle" /> Consistent support
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a className="btn-default" href="#">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="rainbow-pricing style-2">
                <div className="pricing-table-inner bg-flashlight">
                  <div className="pricing-header">
                    <h4 className="title">Advanced</h4>
                    <div className="pricing">
                      <div className="price-wrapper">
                        <span className="currency">$</span>
                        <span className="price">100</span>
                      </div>
                      <span className="subtitle">USD Per Month</span>
                    </div>
                  </div>
                  <div className="separator-animated mt--30 mb--30" />
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <i className="feather-check-circle" /> 80,000 Words
                      </li>
                      <li>
                        <i className="feather-check-circle" /> 6+ Templates
                      </li>
                      <li>
                        <i className="feather-check-circle" /> 5+ Languages
                      </li>
                      <li>
                        <i className="feather-check-circle" /> AI Blog generate
                      </li>
                      <li>
                        <i className="feather-check-circle" /> Advance Editor Tool
                      </li>
                      <li>
                        <i className="feather-check-circle" /> Consistent support
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a className="btn-default btn-border" href="#">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-group mt--50 text-center">
            <a className="btn-default btn-large btn-border" href="pricing.html">
              View Comparision
            </a>
          </div>
        </div>
      </div>
      {/* End Pricing Area  */}
      {/* Start Seperator Area  */}
      <div className="chatenai-separator">
        <img
          className="w-100"
          src="assets/images/separator/separator-top.svg"
          alt=""
        />
      </div>
      {/* End Seperator Area  */}
      {/* Start Accordion-2 Area  */}
      <div className="rainbow-accordion-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Accordion</span>
                </h4>
                <h2 className="title w-600 mb--20">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row mt--35 row--20">
            <div className="col-lg-10 offset-lg-1">
              <div className="rainbow-accordion-style  accordion">
                <div className="accordion" id="accordionExamplea">
                  <div className="accordion-item card bg-flashlight">
                    <h2 className="accordion-header card-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is ChatenAI ? How does it work?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        ChatenAI is an AI-powered messaging platform that
                        understands and responds to your natural language queries.
                        Ask anything you'd typically ask a human assistant—get
                        weather updates, news, restaurant recommendations, and
                        more!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card bg-flashlight">
                    <h2 className="accordion-header card-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What kind of questions can I ask ChatenAI?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        ChatenAI, an AI-driven messaging platform, adeptly
                        communicates with users using natural language
                        understanding. It delivers helpful responses to your
                        inquiries and requests.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card bg-flashlight">
                    <h2
                      className="accordion-header card-header"
                      id="headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Can I get update regularly and For how long do I get
                        updates?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        Yes, We will get update the ChatenAI. And you can get it
                        any time. Next time we will comes with more feature. You
                        can be get update for unlimited times. Our dedicated team
                        works for update.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card bg-flashlight">
                    <h2 className="accordion-header card-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How can I get the customer support?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        After purchasing the product need you any support you can
                        be share with us with sending mail to
                        rainbowit10@gmail.com.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card bg-flashlight">
                    <h2 className="accordion-header card-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        HIs my data safe with ChatenAI?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        Feel free to toss any questions at chatenAI, just like you
                        would with a human helper—whether it's about the weather,
                        the latest news, restaurant suggestions, or anything else
                        you fancy!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card bg-flashlight">
                    <h2 className="accordion-header card-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Is ChatenAI available in multiple languages?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body card-body">
                        Yes, ChatenAI is designed to support multiple languages,
                        offering a versatile and inclusive communication
                        experience for users worldwide.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Accordion-2 Area  */}
      {/* Start Seperator Area  */}
      <div className="chatenai-separator">
        <img
          className="w-100"
          src="assets/images/separator/separator-bottom.svg"
          alt=""
        />
      </div>
      {/* End Seperator Area  */}
      {/* Start Brands Area */}
      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Our Awesome Client</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <ul className="brand-list brand-style-2">
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-01.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-02.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-03.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-04.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-05.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-06.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-07.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-08.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-01.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Brands Area */}
      {/* Start Seperator Area  */}
      <div className="chatenai-separator">
        <img
          className="w-100"
          src="assets/images/separator/separator-top.svg"
          alt=""
        />
      </div>
      {/* End Seperator Area  */}
      {/* Start Call TO Action Area  */}
      <div className="rainbow-callto-action-area">
        <div className="wrapper">
          <div className="rainbow-callto-action clltoaction-style-default rainbow-section-gap">
            <div className="container">
              <div className="row row--0">
                <div className="col-lg-12">
                  <div className="align-items-center content-wrapper">
                    <div className="inner">
                      <div className="content text-center">
                        <span className="theme-gradient b2 mb--30 d-inline-block">
                          Boost your writing productivity
                        </span>
                        <h2
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration={400}
                          data-sal-delay={200}
                        >
                          Overcome Writer's Block Today
                        </h2>
                        <p
                          className="description"
                          data-sal="slide-up"
                          data-sal-duration={400}
                          data-sal-delay={300}
                        >
                          Gain Access to a Team of Copywriting Experts.
                        </p>
                        <div
                          className="call-to-btn"
                          data-sal="slide-up"
                          data-sal-duration={400}
                          data-sal-delay={350}
                        >
                          <a
                            className="btn-default bg-light-gradient btn-large"
                            href="text-generator.html"
                          >
                            <div className="has-bg-light" />
                            <span>Start writing for free</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fancy-genearate-section">
            <div className="container">
              <div className="genarator-section">
                <ul className="genarator-card-group full-width-list ">
                  <li>
                    <a
                      href="text-generator.html"
                      className="genarator-card bg-flashlight-static center-align"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="assets/images/generator-icon/text_line.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Text Generator</h5>
                          <span className="rainbow-demo-btn">
                            Try It Now Free
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="image-editor.html"
                      className="genarator-card bg-flashlight-static center-align"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="assets/images/generator-icon/photo-editor_line.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Photo Editor</h5>
                          <span className="rainbow-demo-btn">
                            Try It Now Free
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="vedio-generator.html"
                      className="genarator-card bg-flashlight-static center-align"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="assets/images/generator-icon/video-camera_line.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Vedio Generator</h5>
                          <span className="rainbow-demo-btn">
                            Try It Now Free
                          </span>
                          <span className="rainbow-badge-card ml--10">Hot</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="email-generator.html"
                      className="genarator-card bg-flashlight-static center-align"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="assets/images/generator-icon/email_line.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Email Writer</h5>
                          <span className="rainbow-demo-btn">
                            Try It Now Free
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="code-generator.html"
                      className="genarator-card bg-flashlight-static center-align"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="assets/images/generator-icon/code-editor_line.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Code Generator</h5>
                          <span className="rainbow-demo-btn">
                            Try It Now Free
                          </span>
                          <span className="rainbow-badge-card ml--10">Hot</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Call TO Action Area  */}
      {/* Start Footer Area  */}
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <div className="chatenai-separator has-position-top">
          <img
            className="w-100"
            src="assets/images/separator/separator-top.svg"
            alt=""
          />
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center mb--30">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget text-center">
                  <div className="logo">
                    <a href="index-2.html">
                      <img
                        className="logo-light"
                        src="assets/images/logo/logo.png"
                        alt="Corporate Logo"
                      />
                      <img
                        className="logo-dark"
                        src="assets/images/logo/logo-dark.png"
                        alt="Corporate Logo"
                      />
                    </a>
                  </div>
                  <p className="b1 text-center mt--20 mb--0">
                    Create Website By ChatenAI So Quick Download And Make Your
                    Site.
                  </p>
                </div>
              </div>
            </div>
            <div className="separator-animated animated-true mt--50 mb--50" />
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget">
                  <h4 className="title">Newsletter</h4>
                  <div className="inner">
                    <h6 className="subtitle">
                      2000+ Our clients are subscribe Around the World
                    </h6>
                    <form className="newsletter-form" action="#">
                      <div className="form-group">
                        <input type="email" placeholder="Enter Your Email Here" />
                        <button
                          className="btn-default bg-solid-primary"
                          type="submit"
                        >
                          <i className="feather-arrow-right" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">Services</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        <li>
                          <a href="#">Testiminial</a>
                        </li>
                        <li>
                          <a href="#">Company</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <a href="#">Startup</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-bottom">
                    <h4 className="title">Products</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Portfolio</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Service</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">Company</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        <li>
                          <a href="#">Corporate</a>
                        </li>
                        <li>
                          <a href="#">Portfolio</a>
                        </li>
                        <li>
                          <a href="#">SEO Agency</a>
                        </li>
                        <li>
                          <a href="#">Web Agency</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-bottom">
                    <h4 className="title">Solutions</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        <li>
                          <a href="#">Gallery</a>
                        </li>
                        <li>
                          <a href="#">Testimonial</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Service</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Area  */}
      {/* Start Copy Right Area  */}
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms-policy.html">Terms And Condition</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="copyright-right text-center text-lg-end">
                <p className="copyright-text">
                  Copyright © 2024{" "}
                  <a
                    href="https://themeforest.net/user/rainbow-themes"
                    className="btn-read-more"
                  >
                    <span>Rainbow-Themes.</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copy Right Area  */}
      <div className="rn-progress-parent">
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919"
            }}
          />
        </svg>
      </div>
    </main>
    {/* All Scripts  */}
  </>
  
  );
}
