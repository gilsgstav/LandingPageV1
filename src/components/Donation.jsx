import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "office-ui-fabric-react/lib/Icons";
import { Fabric, DefaultButton } from "office-ui-fabric-react";
import * as styles from "../style/style.css";
import * as styles1 from "../style/bootstrap.min.css";
import * as styles2 from "../style/materialdesignicons.min.css";
import * as styles3 from "../style/pe-icon-7.css";
import {
  BackgroundWrapper,
  Wrapper,
  Title,
  WrapperLogin
} from "./shared-styled-components";

class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: [
        {
          icon: "mdi mdi-database",
          title: "Buy Me a Coffee",
          content:
            "If you appreciate the application and want to express your appreciation to the work done, you are invited to donate via Buy Me a Coffee. Thank you. This will help in enabling Notelettes to keep on investing the products and services of this web site"
        },
        {
          icon: "mdi mdi-palette",
          title: "Sponshorship",
          content:
            "if you want to sponsor the applications please contact notelettes by email at info@noteless.com."
        },
        {
          icon: "mdi mdi-palette",
          title: "Buy",
          content:
            "If you want to buy the application as separate from the on-demand product, or custom branded ,please contact notelettes by email at info@noteless.com. "
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="section">
          <Container className="container">
            <BackgroundWrapper>
              <Row>
                <Col lg="12">
                  <div className="title-heading mb-5">
                    <br />
                    <h3 className="text-dark mb-2 font-weight-bold">
                      By Donation
                    </h3>
                  </div>
                </Col>
              </Row>
            </BackgroundWrapper>
            <Row>
              {this.state.ServiceList.map((service, index) => {
                return (
                  <Col lg="4" md="6" key={index}>
                    <div className="service-box rounded mt-4 p-4">
                      <div className="services-desc">
                        <Wrapper>
                          <Title>{service.title}</Title>
                        </Wrapper>

                        <div className="service-title mb-2 position-relative" />
                        <p className="text-muted mb-3 f-14">
                          {service.content}
                        </p>
                        <p className="mb-0 text-uppercase f-13" />
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col lg="12">
                <div className="title-heading mb-5">
                  <WrapperLogin>
                    <i class="fas fa-mug-hot fa-5x" />
                    <br />
                    <br />

                    <Title>Click to Buy Me a Coffee!! Thank you!</Title>
                  </WrapperLogin>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default Donation;
