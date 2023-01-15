import React from 'react';
import techStack from '../../images/home/financial-tech-stack.svg'
import techMobStack from '../../images/home/financial-tech-stack-mob.svg'
import { screen } from "../../constants";

function BlockImage({ image }) {
  return (
    <section className="block-financial-tech">
      <img className="tech__image" src={techStack} alt='financial-tech-stack' />
      <img className="tech-mob__image" src={techMobStack} alt='financial-tech-stack' />
      <style jsx>{`
        .block-financial-tech {
          position: relative;
          /* background: linear-gradient( -8.7deg,#152549 28.3%,#F7F8FA 28.4% ); */
        }
        .tech__image {
          position: absolute;
          top: -480px;
          width: 100%;
        }
        .tech-mob__image {
          display: none;
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .tech__image {
            display: none;
          }
          .tech-mob__image {
            display: block;
            position: absolute;
            top: -480px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default BlockImage;
