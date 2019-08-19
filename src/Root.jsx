import React from "react";
import { SlideShow } from "./components/SlideShow";
import { initializeIcons } from "@uifabric/icons";

import Preloader from "./components/Preloader";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Footer from "./components/Footer";

import Support from "./components/Support";
import Donation from "./components/Donation";

import Navbar from "./components/Navbar";
import { Layer } from "office-ui-fabric-react/lib/Layer";
import { SECTIONS } from "./components/consts";
import {
  Fabric,
  DefaultButton,
  Button,
  TextField
} from "office-ui-fabric-react";

import { render } from "react-dom";
// import AboutSection from './components/AboutSection';
// import ServiceSection from './components/ServiceSection';
// import FeatureSection from './components/FeatureSection';
// import ClientSection from './components/ClientSection';
// import PricingSection from './components/PricingSection';
// import BlogSection from './components/BlogSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
// import FooterAlt from './components/FooterAlt';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: SECTIONS.Products
    };
    initializeIcons();
  }
  componentDidMount() {
    // document.getElementById("main_navbar").classList.add("navbar-light");
  }

  // handleSetSection = (sectionName) => {
  //   alert("handleSetSection =" + sectionName);
  //   this.setState({ section: sectionName });
  // };

  renderSection = () => {
    switch (this.state.section) {
      case SECTIONS.Home:
        return (
          <>
            <SlideShow />
          </>
        );
      case SECTIONS.Products:
        return (
          <>
            <Products />
          </>
        );
      case SECTIONS.Services:
        return (
          <>
            <Services />
          </>
        );
      case SECTIONS.Support:
        return (
          <>
            <Support />
          </>
        );
      case SECTIONS.Donation:
        return (
          <>
            <Donation />
          </>
        );
      case SECTIONS.About:
        return (
          <>
            <About />
          </>
        );
      default:
        return (
          <>
            <SlideShow />
          </>
        );
    }
  };

  render() {
    return (
      <>
        <Navbar
          handleSetSection={sectionName => {
            this.setState({ section: sectionName });
          }}
        />
        {this.renderSection()}
        <Footer
          handleSetSection={sectionName => {
            this.setState({ section: sectionName });
          }}
        />
      </>
    );
  }
}

export default Root;

//           {/* preloader */}
//<Preloader />

//{/* Navigation Menu */ }
//<Navbar />

//{/* HomeSection Menu */ }
//<Home7 />

// {/* AboutSection Menu */ }
// //<AboutSection />

// {/* ServiceSection Menu */ }
// <ServiceSection />

// {/* FeatureSection Menu */ }
// <FeatureSection />

// {/* PricingSection Menu */ }
// <PricingSection />

// {/* ClientSection Menu */ }
// <ClientSection />

// {/* BlogSection Menu */ }
// <BlogSection />

// {/* ContactSection Menu */ }
// <ContactSection />

// {/* Footer Menu */ }
// <Footer />

// {/* FooterAlt Menu */ }
// <FooterAlt />
// */
