import React from 'react';
import './style.css';

const GlitchText = ({ children, speed = 0.4, enableShadows = true, enableOnHover = false, className = '' }) => {
  const inlineStyle = {
    '--speed': `${speed}s`,
  };

  const wrapperClass = `glitch-wrapper ${enableOnHover ? 'glitch-on-hover' : 'glitch-always'} ${className}`;

  return (
    <div className={wrapperClass} style={inlineStyle} data-text={children}>
      {children}
    </div>
  );
};

export default GlitchText;
