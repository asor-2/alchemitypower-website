import React from 'react';
import VideoSection from '../components/VideoSection';
import ProblemOpportunity from '../components/ProblemOpportunitySection';
import MarketApplications from '../components/MarketApplications';
import Sponsors from '../components/Sponsors';
import PlantInfoSection from '../components/PlantInfoSection';
import styled from 'styled-components';
import OurSection from '../components/OurSolutionSection';

import SEO from '../components/SEO/SEO';
import { seoData } from '../config/seoConfig';

const SectionSpacing = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0.5rem;
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
      <VideoSection />
      <SectionSpacing>
        <ProblemOpportunity />
      </SectionSpacing>
      <SectionSpacing>
        <OurSection />
      </SectionSpacing>
      <SectionSpacing>
        <PlantInfoSection />
      </SectionSpacing>
      <SectionSpacing>
        <MarketApplications />
      </SectionSpacing>
      <SectionSpacing>
        <Sponsors />
      </SectionSpacing>
    </>
  );
}

export default Home;