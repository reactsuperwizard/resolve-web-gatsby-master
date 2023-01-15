import React, { useState, useLayoutEffect, useRef, useMemo } from 'react';

import PlayIcon from './icons/Play';

export default function Video({ className, ratio, thumbnail = '', ...rest }) {
  const containerRef = useRef(null);
  const [showIFrame, setShowIFrame] = useState(false);
  const [height, setHeight] = useState('auto');

  useLayoutEffect(() => {
    function updateSize() {
      if (containerRef.current.clientWidth) {
        setHeight(`${containerRef.current.clientWidth / ratio}px`);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [ratio]);

  const handleShowIFrameClick = () => {
    setShowIFrame(true);
  };

  const containerStyle = useMemo(() => {
    const style = {
      height,
    };

    if (thumbnail) {
      style.backgroundImage = `url(${thumbnail})`;
    }

    return style;
  }, [height, thumbnail]);

  return (
    <div ref={containerRef} className="container" style={containerStyle}>
      {showIFrame ? (
        <iframe
          title="video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          height={height}
          {...rest}
          className={`video ${className ? className : ''}`}
        />
      ) : (
        <div
          className="play-btn__container"
          role="button"
          aria-label="Play video"
          tabIndex={0}
          onClick={handleShowIFrameClick}
          onKeyDown={handleShowIFrameClick}
        >
          <PlayIcon />
        </div>
      )}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-size: cover;
          border-radius: 8px;
        }

        .play-btn__container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.15);
        }

        .play-btn__container:hover {
          opacity: 0.8;
        }

        .video {
          box-shadow: 0 42.4071px 84.8142px -42.4071px rgb(0 0 0 / 30%),
            0 70.6785px 141.357px -28.2714px rgb(50 50 93 / 25%),
            inset 0 1.41357px 1.41357px rgb(143 153 174 / 5%);
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
