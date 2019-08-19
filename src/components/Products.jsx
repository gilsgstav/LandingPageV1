import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import * as styles from "../style/style.css";
import * as styles1 from "../style/bootstrap.min.css";
import * as styles2 from "../style/materialdesignicons.min.css";
import * as styles3 from "../style/pe-icon-7.css";
import * as styles4 from "../style/notelettes.css";

import {
  WrapperLogin,
  BackgroundWrapper,
  Wrapper,
  Title
} from "./shared-styled-components";

const MyIcon = () => <Icon iconName="Telemarketer" className="ntl-icon-a" />;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: [
        {
          icon: "mdi mdi-database",
          title: "Modern To-do for OneDrive",
          content:
            "A fully features task management application with the modern user interaction design and features. Data is stored in a file at user's oneDrive and cachedon user's device. application data, and user's information is not saved at Notelettes servers "
        },
        {
          icon: "mdi mdi-palette",
          title: "Modern To-do for Excel Online - Under Development",
          content:
            "A fully features task management application with the modern user interaction design and features. Data is stored in an Excel file at user's oneDrive and cached on user's device. User can work on the Excel file directly, download it, and use it to his/ her needs. Application data, and user's information is not saved at Notelettes servers "
        },
        {
          icon: "mdi mdi-palette",
          title:
            "Modern To-do for Sharepoint Online Task LIst  - Under Development",
          content:
            "A fully features task management application with the modern user interaction design and features. Data is stored in a SharePoint Online task list at the user Site Collection of choice, as long as the user's account has contribiter permissions to that task list. User could work on that task list independently without this applications from SharePoint Online user and use it to his/ her needs. Application data, and user's information is not saved at Notelettes servers "
        }
        // {
        //   icon: "mdi mdi-palette",
        //   title: "",
        //   content: ""
        // },
        // {
        //   icon: "mdi mdi-palette",
        //   title: "Login to Modern To-do for OneDrive",
        //   content: `Login with your personal Oulook , or Office 365 credentials.
        //     By loggin to the application you state that you fully Agree to the Termsf Use`
        // },
        // {
        //   icon: "",
        //   title: "",
        //   content: ""
        // }
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
                      Notelettes On-demand Products
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
                    <i class="fas fa-sign-in-alt  fa-5x" />
                    <Title>Login to Modern To-do for OneDrive</Title>
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
export default Products;
