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

const FullWidthSection = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: ${props => props.bgColor || 'transparent'};
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
      <VideoSection />

      <FullWidthSection bgColor="#0F171A">
        <SectionSpacing>
          <ProblemOpportunity />
        </SectionSpacing>
      </FullWidthSection>

      <FullWidthSection bgColor="#0F171A">
        <SectionSpacing>
          <OurSection />
        </SectionSpacing>
      </FullWidthSection>

      <FullWidthSection bgColor="#D0DDD0">
        <SectionSpacing>
          <PlantInfoSection />
        </SectionSpacing>
      </FullWidthSection>

      <FullWidthSection bgColor="#254141">
      <SectionSpacing>
        <MarketApplications />
      </SectionSpacing>
      </FullWidthSection>
      
      <FullWidthSection bgColor="#10171A">
        <SectionSpacing>
          <Sponsors />
        </SectionSpacing>
      </FullWidthSection>
    </>
  );
}

export default Home;