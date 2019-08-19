import React from "react";
import { Row, Col } from "reactstrap";
import * as styles from "../style/style.css";
import { SlideShow } from "./SlideShow";

class Home extends React.Component {
  render() {
    return (
      <>
   
          <div className="bg-overlay" style={{ zIndex: "0" }} />
          <SlideShow />

          <div className="home-center" id="contentSlider">
            <div className="home-desc-center">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg="8">
                    <div className="mt-40 text-center home-5-content">
                      <h1 className="text-white font-weight-light home-7-title mb-0 ">
                        {" ddd "}
                        <span className="element">Notelettes</span>
                      </h1>

                      <h1 className="text-white font-weight-light home-7-title mb-0 ">
                        {" "}
                        <span className="element">We are Creative</span>
                      </h1>

                      <h1 className="text-white font-weight-light home-7-title mb-0">
                        {" sdfsdfsdf"}
                        <span className="element"> We are Modern</span>
                      </h1>

                      <p className="text-white-70 font-weight-light mt-4 f-15 mb-0">
                        Aliquam lorem ante dapibus in viverra quis feugiat a
                        tellus hasellus viverra nulla ut metus varius laoreet
                        uisque rutrum enean imperdiet tiam ultricies nisi vel
                        augue urabitur as ullamcorper.
                      </p>
                      <div className="text-center search-form mt-5">
                        <form action="#">
                          <input type="text" placeholder="Email" />
                          &nbsp;
                          <button
                            type="submit"
                            class="btn rounded-pill btn-custom mt-10"
                          >
                            SubCribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
         </>
    );
  }
}
export default Home;
