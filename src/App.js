import React from "react";
import Layout from "./components/Layout/layout";
//Components
import { LandingInfo } from "./components/Landing/LandingInfo/LandingInfo";
import { MainBlock } from "./components/Landing/LandingMainBlock/MainBlock";
import { LandingImages } from "./components/Landing/LandingImages/LandingImages";
import { LandingSteps } from "./components/Landing/LandingSteps/LandingSteps";

function App() {
  return (
    <Layout>
      <MainBlock />
      <LandingImages />
      <LandingInfo />
      <LandingSteps />
    </Layout>
  );
}

export default App;
