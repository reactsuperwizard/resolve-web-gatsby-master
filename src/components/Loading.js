import React from 'react';

const svgStyle = {
  animation: 'rotate 0.8s linear infinite',
  height: '100%',
  transformOrigin: 'center center',
  width: '100%',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
};

const circleStyle = {
  strokeDasharray: '50,200',
  strokeDashoffset: '0',
  strokeLinecap: 'round',
};

const animation = `@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px;
  }
}`;

export default class Loading extends React.Component {
  render() {
    const { when, children, className } = this.props;

    if (when) {
      const { width, height, margin } = this.props;

      const style = {
        width,
        height,
        margin,
      };

      return (
        <div className={`loading ${className || ''}`} style={style}>
          <style>{animation}</style>
          <svg style={svgStyle} viewBox="25 25 50 50">
            <circle
              style={circleStyle}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="5"
              strokeMiterlimit="10"
            />
          </svg>
          <style jsx>{`
            .loading {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 40px;
              height: 40px;
              margin: -20px 0 0 -20px;
            }

            .loading circle {
              stroke: #555b60;
            }
          `}</style>
        </div>
      );
    }

    return <div>{children || null}</div>;
  }
}
