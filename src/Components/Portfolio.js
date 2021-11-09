import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      

     
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
        <div className="container">
        <div className="  roadmap__item roadmap__item--completed">
              <h2>Roadmap</h2>   
            </div>
          <div className="row">
            <div className="col-12 col-md-6 ">
            <p>
              Project launch

The launch takes place in 2 rounds.
Round 1 (presale) - Whitelist early access for first 100 OG Chicks holders.
Round 2 - the main sales launch for everyone.
              </p>
            </div>
            <div className="col-12 col-md-6">
            <img src="/images/chick7.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="col-12 col-md-6 mt-5">
            <img src="/images/chick7.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="col-12 col-md-6  mt-5">
            <p>
              Project launch

The launch takes place in 2 rounds.
Round 1 (presale) - Whitelist early access for first 100 OG Chicks holders.
Round 2 - the main sales launch for everyone.
              </p>
            </div>
            <div className="col-12 col-md-6 mt-5">
            <p>
              Project launch

The launch takes place in 2 rounds.
Round 1 (presale) - Whitelist early access for first 100 OG Chicks holders.
Round 2 - the main sales launch for everyone.
              </p>
            </div>
            <div className="col-12 col-md-6 mt-5">
            <img src="/images/chick7.jpeg" className="d-block w-100" alt="..." />
            </div>
          </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
