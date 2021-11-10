import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;
    const chicks = "images/" + this.props.data.image;
    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
  

    return (
      <header id="home">
{/* Sidebar */}
<a className="button btn btn-count btn-side" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
<i class="fa fa-bars"></i>
</a>
<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">SideBar</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
     <form>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="name" className="form-label">Email address</label>
  <input type="text" className="form-control" id="name" placeholder="Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"> textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="mb-3">
<a href="#" className="button">
                    Send
                    </a>
</div>
     </form>
    </div>
    
  </div>
</div>


        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                NFT
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                ROADMAP
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        

        <div className=" banner">
        <div className="row">
          <div className="col-12 col-md-6">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Opensea
                </a>
                <a href={github} className="button btn btn-count">
                  <i className="fa fa-flag"></i>Mint Count 10000
                </a>
              </ul>
            </Fade>
          </div>
          </div>
          <div className="col-12 col-md-6">
          <img
                className="chicks                                                                                                                         "
                src="images/chicks.gif"
                alt="Chicks"
              />
          </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
