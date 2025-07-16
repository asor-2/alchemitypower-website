import React from "react";
import VideoSection from "../components/VideoSection";
import ProblemOpportunity from "../components/ProblemOpportunitySection";
import MarketApplications from "../components/MarketApplications";
import Sponsors from "../components/Sponsors";
import PlantInfoSection from "../components/PlantInfoSection";
import styled from "styled-components";
import OurSection from "../components/OurSolutionSection";

import SEO from "../components/SEO/SEO";
import { seoData } from "../config/seoConfig";

const SectionSpacing = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0.5rem;
`;

const FullWidthSection = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: ${(props) => props.bgColor || "transparent"};
  padding: 3rem 0;
`;

function Home() {
  return (
    <>
      <SEO
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        image={seoData.home.image}
        url="/"
      />

      {/* Apply dark gradient background to entire page */}
      <div
        style={{
          background:
            "linear-gradient(155deg, #000000 25%, #1A3A4A, #3b6666 60%, #000000 92%)",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <VideoSection />

        {/* Divider between sections */}
        {/* <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '1rem auto 3rem',
          height: '1.5px',
          background: 'linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)',
        }}></div> */}

        <div
          id="problem-opportunity"
          style={{ backgroundColor: "transparent" }}
        >
          <SectionSpacing>
            <ProblemOpportunity />
          </SectionSpacing>
        </div>

        {/* Divider between sections */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "1rem auto 3rem",
            height: "1.5px",
            background:
              "linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)",
          }}
        ></div>

        <div style={{ backgroundColor: "transparent" }}>
          <SectionSpacing>
            <OurSection />
          </SectionSpacing>
        </div>

        {/* Divider between sections */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "1rem auto 3rem",
            height: "1.5px",
            background:
              "linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)",
          }}
        ></div>

        <div style={{ backgroundColor: "transparent" }}>
          <SectionSpacing>
            <PlantInfoSection />
          </SectionSpacing>
        </div>

        {/* Divider between sections */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "1rem auto 3rem",
            height: "1.5px",
            background:
              "linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)",
          }}
        ></div>

        <div style={{ backgroundColor: "transparent" }}>
          <SectionSpacing>
            <MarketApplications />
          </SectionSpacing>
        </div>

        {/* Divider between sections */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "1rem auto 3rem",
            height: "1.5px",
            background:
              "linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)",
          }}
        ></div>

        <div style={{ backgroundColor: "transparent" }}>
          <SectionSpacing>
            <Sponsors />
          </SectionSpacing>
        </div>
      </div>
    </>
  );
}

export default Home;
