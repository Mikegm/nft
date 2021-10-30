import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";

  }

  render() {
    if (!this.props.data) return null;



    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="container">
            <div className="education">
              <div className="row">
              <div className="columns header-col">
                <h2>
                  New generation of Crypto.Chicks
                </h2>
                <p>
                  Crypto.Chicks = 10K gorgeous, proud, independent, and empowered girls
                </p>
              </div>

              <div className="columns main-col">
                <div className="row item">
                  <div className=" olumns">
                    {/* {sliders} */}

                    <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="row">
                          <div className="col-12 col-md-4">
                            <div className="carousel-item active">
                              <img src="/images/chick7.jpeg" className="d-block w-100" alt="..." />
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="carousel-item active">
                              <img src="/images/chick8.jpeg" className="d-block w-100" alt="..." />
                            </div>
                            </div>
                            <div className="col-12 col-md-4">
                            <div className="carousel-item active">
                              <img src="/images/chick9.jpeg" className="d-block w-100" alt="..." />
                            </div>
                            </div>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
</div>
            </div>
          </div>
        </Slide>


      </section>
    );
  }
}

export default Resume;
