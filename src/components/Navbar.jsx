import React from "react";
import { Row, Col } from "reactstrap";
import * as styles from "../style/style.css";
import { Icon } from "office-ui-fabric-react/lib/Icons";
import { Fabric, DefaultButton, CommandBar } from "office-ui-fabric-react";
import { SECTIONS } from "./consts";
import { NotelettesLogo } from "./images/NotelettesLogo.png";
class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  redirectToTarget = sectionId => {
    this.props.handleSetSection(sectionId);
  };

  getItems = () => {
    return [
      {
        key: "key_home",
        name: "Notelettes",
        iconProps: { iconName: "QuickNote" },
        onClick: event => {
          this.redirectToTarget("Notelettes");
        }
      }
    ];
  };
  getFarItems = () => {
    return [
      {
        key: "key_home",
        name: SECTIONS.Home,
        iconProps: { iconName: "HomeSolid" },
        onClick: event => {
          this.redirectToTarget(SECTIONS.Home);
        }
      },
      {
        key: "key_products",
        name: SECTIONS.Products,
        iconProps: { iconName: "AllApps" },
        onClick: event => {
          this.redirectToTarget(SECTIONS.Products);
        }
      },
      {
        key: "services_label",
        name: SECTIONS.Services,
        iconProps: { iconName: "FileCode" },
        onClick: event => {
          this.redirectToTarget(SECTIONS.Services);
        }
      },
      {
        key: "key_support",
        name: SECTIONS.Support,
        iconProps: { iconName: "Telemarketer" },
        onClick: event => {
          this.redirectToTarget(SECTIONS.Support);
        }
      },
      {
        key: "key_pricing",
        name: SECTIONS.Donation,
        iconProps: { iconName: "CoffeeScript" },
        onClick: event => {
          this.redirectToTarget(SECTIONS.Donation);
        }
      },
      {
        key: "key_about",
        name: SECTIONS.About,
        iconProps: { iconName: "Info" },
        onClick: event => {
          this.redirectToTarget(SECTIONS.About);
        }
      }
    ];
  };
  render() {
    return (
      <div>
        <CommandBar items={this.getItems()} farItems={this.getFarItems()} />
      </div>
    );
  }
}

export default Navbar;
