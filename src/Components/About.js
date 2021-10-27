import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
        <div className="container">
          <div className="row">
          
            
            <div className=" columns">
              <h2>About </h2>

              <p>
              The Crypto.Chicks is the 2nd generation of the Crypto.Chick 1/1 which was the first female avatar collection published on Opensea in May 2021. The Crypto.Chicks Collection was created to highlight the importance of women in the crypto space and reflects the individuality and uniqueness of every woman.
              </p>
              <div className="row">
              
                <div className="columns btnsabout">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-Discord"></i>Join Discord
                    </a>
                    <a href="#" className="button">
                      <i className="fa fa-Discord"></i>Opensea
                    </a>
                    <a href="#"  className="button">
                      <i className="fa fa-Discord"></i>Rariti
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
