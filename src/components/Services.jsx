import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "office-ui-fabric-react/lib/Icons";
import * as styles from "../style/style.css";
import * as styles1 from "../style/bootstrap.min.css";
import * as styles2 from "../style/materialdesignicons.min.css";
import * as styles3 from "../style/pe-icon-7.css";
import { BackgroundWrapper, Wrapper, Title } from "./shared-styled-components";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: [
        {
          icon: "mdi mdi-database",
          title: "Product Customization",
          content:
            "Customization of the available products: for example, add additional fields for tasks in Modern To-do application, or integrate the task items with custom lists in SharePoint online "
        },
        {
          icon: "mdi mdi-palette",
          title: "Integration Services",
          content:
            "Integration of applications for example with Sharepoint online client webparts"
        },
        {
          icon: "mdi mdi-finance",
          title: "Office 365 Development",
          content:
            "A custom application in the context of Office 365, OnedRive for Business, or Onedrive / Outlook"
        },
        {
          icon: "mdi mdi-yin-yang",
          title: "Azure functions Development",
          content:
            "Developmentof services with AZure funcions that could be integrated as a web API or with office 365 Flow"
        },
        {
          icon: "mdi mdi-apple-keyboard-command",
          title: "Sharepoint online web parts and Flow applications",
          content:
            "Custom development of client side web parts and Flow workflows "
        },
        {
          icon: "mdi mdi-hexagon-multiple",
          title: "Web Applications",
          content:
            "Web applications that integrated with Office 365 and Azure services using Oath2 authentication"
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
                    <h3 className="text-dark mb-1 font-weight-bold">
                      Notelettes Professional Services
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
export default Services;
