import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Resume} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: "20;"}}>
          <DiCssdeck size="3rem" /> <Span>RM</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>    
      <li>
          <Resume target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/15_CtiRaechfpUnTr5ha3ea9Jo-TC3UIy/view?usp=sharing" >Resume</Resume>
      </li>      
    </Div2>
    <Div3>
        <SocialIcons href="https://github.com/rmujtaba2024">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/rana-mujtaba-a25404178/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/ranamujtaba1/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
