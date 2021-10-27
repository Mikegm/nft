import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
        <div className="container">
          <div className="row section-head">
            <div className="two columns header-col">
              <h2>
                <span>FAQ</span>
              </h2>
            </div>

            <div className="ten columns">
              
            </div>
          </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
          <div className="container">
            
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
