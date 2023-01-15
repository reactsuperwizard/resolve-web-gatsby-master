import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

import { screen } from '../constants';

export default function BlockBackgroundAngled({
  minHeight,
  useMinHeight = false,
  className,
  offsetY = 'initial',
  children,
}) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "banners/info-banner.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <section className="block-background-angled">
      <div className={className}>{children}</div>
      <style jsx>{`
        .block-background-angled {
          position: relative;
          background-image: url('${getSrc(
            data.file.childImageSharp.gatsbyImageData
          )}');
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: ${offsetY};
          padding: 0 160px;
          margin-left: -160px;
          margin-right: -160px;
          ${useMinHeight ? 'min-height:' + (minHeight || 1000) + 'px' : ''}
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-background-angled {
            background-size: 1000px;
            ${useMinHeight ? 'min-height:' + (minHeight || 750) + 'px' : ''}
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-background-angled {
            background-size: 800px;
            ${useMinHeight ? 'min-height:' + (minHeight || 500) + 'px' : ''}
          }
        }
      `}</style>
    </section>
  );
}
