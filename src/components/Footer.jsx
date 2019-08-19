import React from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import { Icon } from "office-ui-fabric-react/lib/Icons";
import { SECTIONS } from "./consts";

import * as styles from "../style/style.css";
import * as styles1 from "../style/bootstrap.min.css";
import * as styles2 from "../style/materialdesignicons.min.css";
import * as styles3 from "../style/pe-icon-7.css";

import { WrapperFooter, Title } from "./shared-styled-components";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="section">
          <Container className="container">
            <WrapperFooter>
              <Row>
                <Col>
                  <div
                    onClick={event => {
                      this.props.handleSetSection(SECTIONS.About);
                    }}
                  >
                    <p className="text-muted mb-3 f-14">
                      ©Notelettes.All Rights Reserved.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div
                    onClick={event => {
                      this.props.handleSetSection(SECTIONS.About);
                    }}
                  >
                    <p className="text-muted mb-3 f-14">Privacy</p>
                  </div>
                </Col>
                <Col>
                  <div
                    onClick={event => {
                      this.props.handleSetSection(SECTIONS.About);
                    }}
                  >
                    <p className="text-muted mb-3 f-14">Terms of Use</p>
                  </div>
                </Col>

                <Col>
                  <div
                    onClick={event => {
                      this.props.handleSetSection(SECTIONS.About);
                    }}
                  >
                    <p className="text-muted mb-3 f-14">Legal</p>
                  </div>
                </Col>
              </Row>
            </WrapperFooter>
          </Container>
        </div>
      </>
    );
  }
}
export default Footer;
