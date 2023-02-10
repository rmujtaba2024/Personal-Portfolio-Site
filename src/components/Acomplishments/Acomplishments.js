import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { LinkColumn, LinkItem, LinkList, LinkTitle} from '../../styles/FooterStyles.js';
const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 100, text: 'Leetcode Questions', },
  { number: 3, text: 'Deans Honor List', },
  { number: 4, text: 'Computer Science Organisations', }
];

const Acomplishments = () => (
  <Section id="contact">
    <SectionTitle>Contact</SectionTitle>
    <SectionText>
      I have a passion for programming and would like to make it into a career.<br/>
      On the lookout for software engineering internships. <br/>
      Willing to relocate.<br/>
      Please reach out if interested!
    </SectionText>
      <Boxes>
        <Box >
          <BoxNum >Email</BoxNum>
          <br/>
          <BoxText target="_blank" rel="noopener noreferrer" href="mailto:rmujtaba_2024@depauw.edu">rmujtaba_2024@depauw.edu</BoxText>
        </Box>
        <Box>
          <BoxNum>Call</BoxNum>
          <br/>
          <BoxText target="_blank" rel="noopener noreferrer" href="tel:765-712-2384">765-712-2384</BoxText>
        </Box>
        <Box>
          <BoxNum>Resume</BoxNum>
          <br/>
          <BoxText target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/15_CtiRaechfpUnTr5ha3ea9Jo-TC3UIy/view?usp=sharing">Go to</BoxText>
        </Box>
    
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;



     