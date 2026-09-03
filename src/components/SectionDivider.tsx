import React from 'react';

interface DividerProps {
  type?: 'wave-down' | 'wave-up' | 'curve' | 'soft-angle';
  fillColor?: string;
  bgColor?: string;
}

export const SectionDivider: React.FC<DividerProps> = ({
  type = 'wave-down',
  fillColor = '#FFFDF5',
  bgColor = '#087F73'
}) => {
  if (type === 'wave-down') {
    return (
      <div className="section-divider-wrap" style={{ backgroundColor: bgColor }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,0 C320,65 520,15 820,55 C1120,95 1320,30 1440,50 L1440,80 L0,80 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  if (type === 'wave-up') {
    return (
      <div className="section-divider-wrap" style={{ backgroundColor: bgColor }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,80 C320,15 520,65 820,25 C1120,-15 1320,50 1440,30 L1440,0 L0,0 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="section-divider-wrap" style={{ backgroundColor: bgColor }}>
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,0 Q720,60 1440,0 L1440,60 L0,60 Z" fill={fillColor} />
      </svg>
    </div>
  );
};
