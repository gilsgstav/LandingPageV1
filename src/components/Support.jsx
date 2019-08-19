import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "office-ui-fabric-react/lib/Icons";
import * as styles from "../style/style.css";
import * as styles1 from "../style/bootstrap.min.css";
import * as styles2 from "../style/materialdesignicons.min.css";
import * as styles3 from "../style/pe-icon-7.css";
import { BackgroundWrapper ,Wrapper, Title } from "./shared-styled-components";

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: [
        {
          icon: "mdi mdi-database",
          title: "Request by Email ",
          content:
            "Send an email to info@notelettes.com with your service request or feature request."
        },
        {
          icon: "mdi mdi-palette",
          title: "Remote Session",
          content:
            "Support by a remote session with screen sharing is available per hourly rate and prepaid. "
        },
        {
          icon: "mdi mdi-palette",
          title: "Documentation ",
          content:
            "product documentation is available within the application itself"
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
                    Notelettes Support Services
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
          </Container>
        </div>
      </>
    );
  }
}
export default Support;
