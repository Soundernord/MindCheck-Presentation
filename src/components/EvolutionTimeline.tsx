import React, { useState, useEffect } from 'react';
import { EVOLUTION_STAGES } from '../data/slidesData';
import {
  Terminal,
  Bot,
  Sparkles,
  Layers,
  Brain,
  Compass,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const EvolutionTimeline: React.FC = () => {
  // Currently animated visible stage (1 to 6)
  const [activeStage, setActiveStage] = useState<number>(6); // Show all initially or animate
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedMilestone, setSelectedMilestone] = useState<number>(6);

  // Auto-advance timeline sequentially from Left to Right
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStage((prev) => {
        if (prev >= 6) {
          // Loop back after pausing at the end
          return 1;
        }
        return prev + 1;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Keep selected milestone in sync with activeStage when playing
  useEffect(() => {
    if (isPlaying) {
      setSelectedMilestone(activeStage);
    }
  }, [activeStage, isPlaying]);

  const handleManualSelect = (id: number) => {
    setSelectedMilestone(id);
    setActiveStage(id);
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setActiveStage(1);
    setSelectedMilestone(1);
    setIsPlaying(true);
  };

  // Calculate connecting line progress percentage (0 to 100%)
  const lineProgress = ((activeStage - 1) / (EVOLUTION_STAGES.length - 1)) * 100;

  const getStageIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'Terminal': return <Terminal size={size} />;
      case 'Bot': return <Bot size={size} />;
      case 'Sparkles': return <Sparkles size={size} />;
      case 'Layers': return <Layers size={size} />;
      case 'Brain': return <Brain size={size} />;
      case 'Compass': return <Compass size={size} />;
      default: return <Sparkles size={size} />;
    }
  };

  const currentDetail = EVOLUTION_STAGES.find((s) => s.id === selectedMilestone) || EVOLUTION_STAGES[5];

  return (
    <div className="evolution-timeline-wrapper">
      {/* Controls Bar */}
      <div className="timeline-playback-bar">
        <div className="timeline-status">
          <span className="live-dot" />
          <span className="status-text">
            <strong>Stage 0{selectedMilestone} of 06:</strong> {currentDetail.period} — {currentDetail.title}
          </span>
        </div>

        <div className="timeline-action-buttons">
          <button
            type="button"
            className={`timeline-btn ${isPlaying ? 'active' : ''}`}
            onClick={() => setIsPlaying((p) => !p)}
            title={isPlaying ? 'Pause Timeline' : 'Play Timeline'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? 'Auto-Advancing' : 'Paused'}</span>
          </button>

          <button
            type="button"
            className="timeline-btn"
            onClick={handleRestart}
            title="Replay from 1966"
          >
            <RotateCcw size={14} />
            <span>Replay</span>
          </button>
        </div>
      </div>

      {/* Main Horizontal Timeline Graphic */}
      <div className="timeline-track-container">
        {/* Background Track Line */}
        <div className="timeline-base-line" />

        {/* Animated Connecting Line (Fills Left -> Right) */}
        <div
          className="timeline-active-line"
          style={{ width: `${lineProgress}%` }}
        />

        {/* The 6 Milestone Nodes */}
        <div className="timeline-nodes-flex">
          {EVOLUTION_STAGES.map((stage) => {
            const isReached = stage.id <= activeStage;
            const isCurrent = stage.id === selectedMilestone;
            const isHighlight = stage.isHighlight;
            const isLatest = stage.isLatest;

            return (
              <div
                key={stage.id}
                className={`timeline-node-card-item ${isReached ? 'reached' : 'pending'} ${isCurrent ? 'current-selected' : ''} ${isHighlight ? 'highlight-stage' : ''} ${isLatest ? 'latest-stage' : ''}`}
                onClick={() => handleManualSelect(stage.id)}
              >
                {/* Year Pill Tag */}
                <div className="node-year-badge">
                  <span>{stage.period}</span>
                </div>

                {/* Node Center Dot on Connecting Line */}
                <div className="node-center-dot">
                  <div className="dot-inner">
                    {getStageIcon(stage.iconName, 16)}
                  </div>
                  {isCurrent && <div className="dot-ping-ring" />}
                </div>

                {/* Milestone Info Card */}
                <div className="node-info-card">
                  <div className="card-era-tag">{stage.era}</div>
                  <h4 className="card-milestone-title">{stage.title}</h4>
                  <p className="card-milestone-desc">{stage.description}</p>

                  {isHighlight && (
                    <div className="focus-badge">
                      {isLatest ? '✦ Modern Frontier' : '★ Core Paradigm'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Spotlight of Selected Era */}
      <div className="timeline-spotlight-card anim-hover-lift">
        <div className="spotlight-left">
          <div className="spotlight-icon-box">
            {getStageIcon(currentDetail.iconName, 28)}
          </div>
          <div>
            <span className="spotlight-period">{currentDetail.period} • {currentDetail.era}</span>
            <h3 className="spotlight-title">{currentDetail.title}</h3>
          </div>
        </div>
        <div className="spotlight-right">
          <p className="spotlight-desc">{currentDetail.description}</p>
        </div>
      </div>

      {/* Bottom Evolution Takeaway Banner */}
      <div className="timeline-takeaway-banner anim-pulse-glow">
        <div className="takeaway-badge">Evolution Trajectory</div>
        <p className="takeaway-text">
          “<strong>Evolution:</strong> Rule-Based <ArrowRight size={14} className="inline-arr" /> ML <ArrowRight size={14} className="inline-arr" /> LLM <ArrowRight size={14} className="inline-arr" /> Multimodal AI <ArrowRight size={14} className="inline-arr" /> <strong>Agentic AI</strong> <ArrowRight size={14} className="inline-arr" /> <strong>Multimodal Agentic AI</strong>”
        </p>
      </div>

      {/* Academic Viva Scope Notice */}
      <div className="timeline-academic-notice">
        <ShieldAlert size={16} className="notice-icon" />
        <p>
          <strong>Historical Perspective:</strong> This chronological timeline synthesizes the broader technological evolution 
          of artificial intelligence in mental health recognition and affective computing over the past six decades. It does not 
          represent the development history of the MindCheck concept itself.
        </p>
      </div>
    </div>
  );
};
