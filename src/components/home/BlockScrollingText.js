import React from 'react';
import { colors, screen } from "../../constants";

export default function BlockScrollingText() {
  // useEffect(()=>{
  //   const jsFile = document.createElement('script')
  //     jsFile.src = '../../utils/scroll-text.js'
  //     document.body.appendChild(jsFile)
  // })
  return (
    <section className="block-scrolling-text" speed={100}>
      <p className="scrolling-text-content">
        It's time to re-think <span style={{ color: colors.orange2 }}>net terms</span>
      </p>
      <style jsx global>{`
        .block-scrolling-text {
          margin: 80px 0;
        }

        .scrolling-text-content {
          font-size: 110.571px;
          font-weight: 400;
          line-height: 129px;
          text-align: center;
          color: #E9E9E9;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .scrolling-text-content {
            font-size: 41.6985px;
            line-height: 49px;
          }
        }
      `}</style>
    </section>
  );
}
