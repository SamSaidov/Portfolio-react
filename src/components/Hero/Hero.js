import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi and welcome <br />
          My name is Sarvar Saidov
        </SectionTitle>
        <SectionText>
          MS in computer science graduate with background in banking and
          finance. Self-learner, enthusiastic and passionate to explore and
          learn new things everyday. Gained a lot of knowledge and experience in
          different industries and projects and ready to implement them towards
          my career path. Great Project management skills and with deep
          commitment to teamwork
        </SectionText>
        <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
