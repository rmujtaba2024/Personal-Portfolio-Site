import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Rana Mujtaba's <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
        CS Major @ DePauw University <br/>
        Expected to graduate in 2024 <br />
        I like building stuff on the internet <br />
        An aspiring software developer
        </SectionText>
        <Button onClick={() => window.location = "#about"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;