import React from 'react';

const screen = {
  mobileMax: 767,
  tabletMax: 991,
};

export default function Container({ className = '', children, ...props }) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 0 50px;
          max-width: 1280px;
          // overflow: hidden;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .container {
            padding: 0 32px;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .container {
            padding: 0 16px;
          }
        }
      `}</style>
    </div>
  );
}
