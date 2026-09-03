import React from 'react';

// Friendly Consultation Illustration (Doctor/Counselor + Client in calm environment)
export const ConsultationIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 540 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`consultation-svg ${className}`}
    aria-label="Mental health supportive consultation illustration"
  >
    <defs>
      <linearGradient id="auraGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9AD9D0" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#EAF7F2" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#087F73" />
        <stop offset="100%" stopColor="#05665E" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A8E063" />
        <stop offset="100%" stopColor="#79B86A" />
      </linearGradient>
    </defs>

    {/* Background Soft Aura & Shapes */}
    <circle cx="270" cy="200" r="160" fill="url(#auraGlow)" />
    <path
      d="M120,320 Q270,360 420,320"
      stroke="#79B86A"
      strokeWidth="4"
      strokeDasharray="8 8"
      opacity="0.4"
    />

    {/* Calming Potted Plant on Left */}
    <ellipse cx="90" cy="340" rx="28" ry="12" fill="#E2EBE5" />
    <path d="M78,340 L82,295 L98,295 L102,340 Z" fill="#087F73" opacity="0.8" />
    <path d="M90,295 Q65,250 55,270 Q75,280 90,295 Z" fill="#79B86A" />
    <path d="M90,295 Q90,230 102,245 Q96,275 90,295 Z" fill="#A8E063" />
    <path d="M90,295 Q115,255 125,275 Q105,285 90,295 Z" fill="#79B86A" />

    {/* Soft Rug / Flooring */}
    <ellipse cx="270" cy="345" rx="190" ry="32" fill="#087F73" fillOpacity="0.06" />

    {/* Client / User on Right Armchair */}
    <g transform="translate(310, 150)">
      {/* Armchair back & cushion */}
      <rect x="25" y="60" width="70" height="95" rx="20" fill="#EAF7F2" stroke="#9AD9D0" strokeWidth="2.5" />
      <rect x="15" y="115" width="90" height="40" rx="14" fill="#D3EFE6" />
      {/* Client Body */}
      <ellipse cx="60" cy="85" rx="20" ry="26" fill="#05665E" />
      <circle cx="60" cy="40" r="18" fill="#FDD7BA" />
      {/* Hair */}
      <path d="M44,40 C42,24 60,18 74,28 C78,36 74,45 68,45 C60,45 52,48 44,40 Z" fill="#123B3A" />
      {/* Thought / Expression Wave */}
      <path d="M25,35 Q5,20 -5,35 T-25,25" stroke="#79B86A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="-32" cy="22" r="4" fill="#A8E063" />
    </g>

    {/* Counselor / Practitioner on Left Chair */}
    <g transform="translate(130, 145)">
      {/* Chair */}
      <rect x="5" y="65" width="68" height="95" rx="18" fill="#EAF7F2" stroke="#9AD9D0" strokeWidth="2.5" />
      <rect x="-2" y="120" width="82" height="40" rx="12" fill="#D3EFE6" />
      {/* Counselor Body */}
      <ellipse cx="40" cy="90" rx="22" ry="28" fill="#087F73" />
      <circle cx="40" cy="45" r="18" fill="#FCD2B2" />
      {/* Hair */}
      <path d="M24,42 C24,26 42,22 56,26 C60,34 58,45 54,46 Z" fill="#2D403E" />
      {/* Note pad / tablet */}
      <rect x="52" y="95" width="26" height="34" rx="4" fill="#FFFDF5" stroke="#087F73" strokeWidth="2" />
      <line x1="58" y1="105" x2="72" y2="105" stroke="#79B86A" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="112" x2="68" y2="112" stroke="#79B86A" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Center Table with Calming Cup & Gentle Lamp */}
    <rect x="245" y="270" width="50" height="55" rx="8" fill="#FFFDF5" stroke="#9AD9D0" strokeWidth="2" />
    <path d="M255,325 L245,348" stroke="#087F73" strokeWidth="3" strokeLinecap="round" />
    <path d="M285,325 L295,348" stroke="#087F73" strokeWidth="3" strokeLinecap="round" />
    <rect x="262" y="258" width="16" height="12" rx="3" fill="#087F73" />
    <path d="M278,262 C282,262 282,266 278,266" stroke="#087F73" strokeWidth="1.5" fill="none" />

    {/* Supportive Dialogue Bubbles & Empathy Wave */}
    <g transform="translate(225, 90)">
      <path
        d="M10,25 C10,12 25,2 45,2 C65,2 80,12 80,25 C80,34 72,42 60,46 L65,58 L48,47 C47,47 46,47 45,47 C25,47 10,37 10,25 Z"
        fill="#FFFFFF"
        stroke="#087F73"
        strokeWidth="2"
      />
      <circle cx="33" cy="24" r="3.5" fill="#79B86A" />
      <circle cx="45" cy="24" r="3.5" fill="#087F73" />
      <circle cx="57" cy="24" r="3.5" fill="#A8E063" />
    </g>

    {/* Floating Wellness Heart with Leaf */}
    <g transform="translate(250, 40)">
      <circle cx="20" cy="20" r="18" fill="#A8E063" fillOpacity="0.25" />
      <path
        d="M20,13 C18,9 12,9 10,13 C8,17 12,23 20,28 C28,23 32,17 30,13 C28,9 22,9 20,13 Z"
        fill="#087F73"
      />
    </g>
  </svg>
);

// Decorative Chevrons / Zigzags used in PPT borders and headers
export const DecorativeZigzag: React.FC<{ color?: string; width?: number; height?: number }> = ({
  color = '#A8E063',
  width = 72,
  height = 14
}) => (
  <svg width={width} height={height} viewBox="0 0 72 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 10L10 3L18 10L26 3L34 10L42 3L50 10L58 3L66 10L70 6"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Decorative Organic Dots Cluster
export const DecorativeDots: React.FC<{ color?: string }> = ({ color = '#9AD9D0' }) => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="3" fill={color} />
    <circle cx="24" cy="8" r="3" fill={color} />
    <circle cx="40" cy="8" r="3" fill={color} />
    <circle cx="56" cy="8" r="3" fill={color} />
    <circle cx="8" cy="24" r="3" fill={color} />
    <circle cx="24" cy="24" r="3" fill={color} />
    <circle cx="40" cy="24" r="3" fill={color} />
    <circle cx="56" cy="24" r="3" fill={color} />
  </svg>
);

// Circular Agentic Workflow: PERCEPTION -> REASONING -> PLANNING -> ADAPTATION -> MEMORY -> ACTION -> PERCEPTION
export const CircularAgenticLoop: React.FC<{ activeStep?: number }> = ({ activeStep = 0 }) => {
  const steps = [
    { label: 'PERCEPTION', desc: 'Multimodal stream ingest (voice, text, face)', color: '#087F73' },
    { label: 'REASONING', desc: 'Affective state & intent inference', color: '#05665E' },
    { label: 'PLANNING', desc: 'Adaptive goal-directed inquiry strategy', color: '#79B86A' },
    { label: 'ADAPTATION', desc: 'Dynamic tone, pace & question tuning', color: '#A8E063' },
    { label: 'MEMORY', desc: 'Episodic session & longitudinal recall', color: '#087F73' },
    { label: 'ACTION', desc: 'Empathetic response & risk triage alert', color: '#05665E' },
  ];

  const total = steps.length;
  const radius = 170;
  const cx = 250;
  const cy = 250;

  return (
    <div className="agentic-loop-container">
      <svg viewBox="0 0 500 500" className="agentic-loop-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#087F73" />
            <stop offset="50%" stopColor="#79B86A" />
            <stop offset="100%" stopColor="#9AD9D0" />
          </linearGradient>
          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#087F73" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer Circular Flow Orbit */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="url(#loopGradient)"
          strokeWidth="6"
          strokeDasharray="10 8"
          className="orbit-ring"
        />

        {/* Center Hub */}
        <circle cx={cx} cy={cy} r="74" fill="#FFFDF5" stroke="#087F73" strokeWidth="3" filter="url(#shadowFilter)" />
        <circle cx={cx} cy={cy} r="64" fill="#EAF7F2" />
        
        {/* Center Icons & Text */}
        <g transform={`translate(${cx - 24}, ${cy - 38})`}>
          {/* Stylized Brain & Spark Icon */}
          <path
            d="M24 10 C14 10 8 18 8 26 C8 32 12 37 16 40 C14 44 14 50 18 54 C22 57 28 56 30 53 C32 56 38 57 42 54 C46 50 46 44 44 40 C48 37 52 32 52 26 C52 18 46 10 36 10 C34 6 26 6 24 10 Z"
            fill="#087F73"
            opacity="0.9"
          />
          <circle cx="30" cy="30" r="4" fill="#A8E063" />
        </g>
        <text x={cx} y={cy + 22} textAnchor="middle" fill="#087F73" fontSize="13" fontWeight="700" fontFamily="Outfit">
          AGENTIC
        </text>
        <text x={cx} y={cy + 37} textAnchor="middle" fill="#42615D" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans">
          CORE ENGINE
        </text>

        {/* 6 Step Nodes */}
        {steps.map((step, idx) => {
          // Angle in radians (starting from top -PI/2)
          const angle = (idx * (2 * Math.PI / total)) - Math.PI / 2;
          const nx = cx + radius * Math.cos(angle);
          const ny = cy + radius * Math.sin(angle);
          const isActive = idx === activeStep;

          return (
            <g key={step.label} className={`loop-step-node ${isActive ? 'active' : ''}`}>
              {/* Connector Direction Arrow */}
              {/* Node Outer Circle */}
              <circle
                cx={nx}
                cy={ny}
                r={isActive ? "38" : "33"}
                fill={isActive ? "#087F73" : "#FFFDF5"}
                stroke={isActive ? "#A8E063" : "#087F73"}
                strokeWidth={isActive ? "4" : "2.5"}
                filter="url(#shadowFilter)"
                style={{ transition: 'all 0.3s ease' }}
              />
              {/* Step number badge */}
              <circle
                cx={nx}
                cy={ny - 14}
                r="10"
                fill={isActive ? "#A8E063" : "#EAF7F2"}
              />
              <text
                x={nx}
                y={ny - 10}
                textAnchor="middle"
                fill={isActive ? "#05665E" : "#087F73"}
                fontSize="10"
                fontWeight="800"
                fontFamily="Outfit"
              >
                0{idx + 1}
              </text>
              {/* Label */}
              <text
                x={nx}
                y={ny + 8}
                textAnchor="middle"
                fill={isActive ? "#FFFFFF" : "#123B3A"}
                fontSize="10"
                fontWeight="700"
                fontFamily="Outfit"
                letterSpacing="0.5"
              >
                {step.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Research Gap & Conceptual Bridge Graphic (Slide 9)
export const ResearchGapBridge: React.FC = () => (
  <svg viewBox="0 0 520 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="bridge-svg">
    <defs>
      <linearGradient id="cliffGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAF7F2" />
        <stop offset="100%" stopColor="#D2EDE3" />
      </linearGradient>
      <linearGradient id="bridgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#087F73" />
        <stop offset="50%" stopColor="#79B86A" />
        <stop offset="100%" stopColor="#05665E" />
      </linearGradient>
    </defs>

    {/* Left Cliff: Existing Isolated AI */}
    <path d="M20 130 L160 130 L150 220 L20 220 Z" fill="url(#cliffGrad)" stroke="#9AD9D0" strokeWidth="2" />
    <rect x="30" y="70" width="115" height="50" rx="8" fill="#FFFDF5" stroke="#087F73" strokeWidth="2" />
    <text x="87" y="92" textAnchor="middle" fill="#087F73" fontSize="12" fontWeight="700" fontFamily="Outfit">
      CURRENT AI
    </text>
    <text x="87" y="107" textAnchor="middle" fill="#42615D" fontSize="10" fontFamily="Plus Jakarta Sans">
      Static & Fragmented
    </text>

    {/* The Research Gap Abyss */}
    <path d="M155 220 L185 140 L335 140 L365 220 Z" fill="#087F73" fillOpacity="0.04" />
    <text x="260" y="185" textAnchor="middle" fill="#087F73" fontSize="13" fontWeight="800" letterSpacing="1" fontFamily="Outfit">
      RESEARCH GAP
    </text>
    <text x="260" y="202" textAnchor="middle" fill="#79B86A" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans">
      Lack of Unified Agentic Multimodal Loops
    </text>

    {/* Right Cliff: Future Concept (MindCheck) */}
    <path d="M360 130 L500 130 L500 220 L370 220 Z" fill="url(#cliffGrad)" stroke="#9AD9D0" strokeWidth="2" />
    <rect x="375" y="70" width="115" height="50" rx="8" fill="#087F73" />
    <text x="432" y="92" textAnchor="middle" fill="#FFFDF5" fontSize="12" fontWeight="700" fontFamily="Outfit">
      MINDCHECK
    </text>
    <text x="432" y="107" textAnchor="middle" fill="#A8E063" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans">
      Adaptive Concept
    </text>

    {/* Connecting Suspension Bridge */}
    <path
      d="M140 128 Q260 165 380 128"
      stroke="url(#bridgeGrad)"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Bridge Vertical Struts */}
    <line x1="180" y1="139" x2="180" y2="152" stroke="#79B86A" strokeWidth="2" />
    <line x1="220" y1="147" x2="220" y2="160" stroke="#087F73" strokeWidth="2" />
    <line x1="260" y1="150" x2="260" y2="163" stroke="#79B86A" strokeWidth="2" />
    <line x1="300" y1="147" x2="300" y2="160" stroke="#087F73" strokeWidth="2" />
    <line x1="340" y1="139" x2="340" y2="152" stroke="#79B86A" strokeWidth="2" />

    {/* Bridge Walkway */}
    <path d="M145 140 L375 140" stroke="#123B3A" strokeWidth="3" strokeDasharray="4 4" />
  </svg>
);
