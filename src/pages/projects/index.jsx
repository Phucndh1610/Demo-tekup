import React from "react";
import "../../style/projects.module.css";
export default function project() {
  return (
    <section className="projects py-5">
      <div className="container">
        <div className="projects__content">
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#all"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#illu"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Manpower Supply
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#photo"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Mobile App / Websites
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#web"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                UI/UX Design
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-4">
                  <div className="card">
                    <img
                      src="./img/g1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Apologetic robot holding flowers
                      </h5>
                      <p className="card-text">Branding</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card">
                    <img
                      src="./img/g2.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Apologetic robot holding flowers
                      </h5>
                      <p className="card-text">Branding</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card">
                    <img
                      src="./img/g3.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Apologetic robot holding flowers
                      </h5>
                      <p className="card-text">Branding</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-4">
                  <div className="card">
                    <img
                      src="./img/g4.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Apologetic robot holding flowers
                      </h5>
                      <p className="card-text">Branding</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-4">
                  <div className="card">
                    <img
                      src="./img/g5.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Apologetic robot holding flowers
                      </h5>
                      <p className="card-text">Branding</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-4">
                  <div className="card">
                    <img
                      src="./img/g6.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Apologetic robot holding flowers
                      </h5>
                      <p className="card-text">Branding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="illu"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              Illstration
            </div>
            <div
              className="tab-pane fade"
              id="photo"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              photo
            </div>
            <div
              className="tab-pane fade"
              id="web"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              Web
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
