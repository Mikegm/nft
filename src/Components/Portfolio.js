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
           
          <div className="row m-auto">
            <div className="col-12 col-sm-6 col-md-6 ">
            <p>
              Project launch

The launch takes place in 2 rounds.
Round 1 (presale) - Whitelist early access for first 100 OG Chicks holders.
Round 2 - the main sales launch for everyone.
              </p>
            </div>
            <div className="col-12 col-sm-6  col-md-6">
            <img src="/images/chick7.jpeg" className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="col-12 col-sm-6 col-md-6 mt-5">
            <img src="/images/chick7.jpeg" className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="col-12 col-sm-6 col-md-6  mt-5">
            <p>
              Project launch

The launch takes place in 2 rounds.
Round 1 (presale) - Whitelist early access for first 100 OG Chicks holders.
Round 2 - the main sales launch for everyone.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mt-5">
            <p>
              Project launch

The launch takes place in 2 rounds.
Round 1 (presale) - Whitelist early access for first 100 OG Chicks holders.
Round 2 - the main sales launch for everyone.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mt-5">
            <img src="/images/chick7.jpeg" className="d-block w-100 img-fluid" alt="..." />
            </div>
          </div>
          <a href="#" className="button mt-5 btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i className="fa fa-Discord"></i>Modal
                    </a>
          </div>
          </div>
        </Fade>


  {/* Modal */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Congratulation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p className="token">  This is your Token <span>#C01</span></p>
       
        <div className="avatar">
        <img src="/images/chick7.jpeg" className="d-block w-100 img-fluid" alt="..." />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="button btn-cancel" data-bs-dismiss="modal">Close</button>
        <button type="button" className="button">View</button>
      </div>
    </div>
  </div>
</div>

      </section>
    );
  }
}

export default Portfolio;
