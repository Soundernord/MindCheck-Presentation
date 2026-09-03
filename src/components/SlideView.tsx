import React, { useState, useEffect } from 'react';
import {
  ConsultationIllustration,
  DecorativeZigzag,
  CircularAgenticLoop,
  ResearchGapBridge
} from './Illustrations';
import { EvolutionTimeline } from './EvolutionTimeline';
import { LITERATURE_PAPERS } from '../data/slidesData';
import {
  MessageSquare,
  FileText,
  Mic,
  Camera,
  Layers,
  Brain,
  ShieldCheck,
  UserCheck,
  Sparkles,
  AlertCircle,
  Database,
  Compass,
  Check,
  Search,
  BookOpen,
  Cpu,
  ShieldAlert,
  ArrowRight,
  Filter,
  Play,
  Pause
} from 'lucide-react';

interface SlideProps {
  slideId: number;
}

export const SlideView: React.FC<SlideProps> = ({ slideId }) => {
  // State for Slide 8 (Filter by year)
  const [paperFilter, setPaperFilter] = useState<'all' | '2026' | '2025' | '2024'>('all');
  
  // State for Slide 7 (Agentic Loop phase and auto-play)
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [isLoopAutoPlaying, setIsLoopAutoPlaying] = useState<boolean>(true);

  // Auto-play the Agentic loop cycle every 3.2 seconds
  useEffect(() => {
    if (!isLoopAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 6);
    }, 3200);
    return () => clearInterval(interval);
  }, [isLoopAutoPlaying]);

  // Filtered literature papers
  const filteredPapers = LITERATURE_PAPERS.filter(p => {
    if (paperFilter === 'all') return true;
    return p.year === parseInt(paperFilter, 10);
  });

  return (
    <div className="slide-content-wrapper">
      {/* ============================================================ */}
      {/* SLIDE 1: TITLE HERO */}
      {/* ============================================================ */}
      {slideId === 1 && (
        <section className="slide-layout slide-1-hero" id="slide-1">
          <div className="hero-floating-bg">
            <div className="organic-blob blob-1 anim-float-slow" />
            <div className="organic-blob blob-2 anim-float-reverse" />
          </div>

          <div className="hero-content-grid">
            <div className="hero-text-col anim-slide-up">
              <div className="badge-pill anim-glow">
                <Sparkles size={14} className="badge-icon anim-spin-slow" />
                <span>Academic Viva Case Study Presentation</span>
              </div>

              <h1 className="hero-title anim-fade-in">
                MINDCHECK: A MULTIMODAL AGENTIC AI APPROACH FOR ADAPTIVE MENTAL WELLNESS ASSESSMENT
              </h1>

              <div className="hero-subtitle-box">
                <DecorativeZigzag color="#A8E063" width={60} height={12} />
                <h2 className="hero-subtitle">Caring for the Mind</h2>
              </div>

              <blockquote className="hero-quote">
                “Mental health plays a vital role in how we think, feel, and behave every day.”
              </blockquote>

              <div className="presenter-card anim-hover-lift">
                <div className="presenter-label">Presented by</div>
                <div className="presenter-names">Suhani Thakare &amp; Onkar Chand</div>
                <div className="academic-badge">Conceptual Case Study • Motivated by Research Gap</div>
              </div>
            </div>

            <div className="hero-visual-col anim-scale-in">
              <div className="hero-illustration-wrapper">
                <ConsultationIllustration className="hero-illustration anim-breathe" />
                <div className="hero-caption-card anim-hover-lift">
                  <span className="caption-tag">Human-Centric Vision</span>
                  <p>Adaptive dialogue grounded in empathetic, multimodal contextual awareness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 2: INTRODUCTION */}
      {/* ============================================================ */}
      {slideId === 2 && (
        <section className="slide-layout slide-2-intro" id="slide-2">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 02 • Conceptual Introduction</div>
            <h2 className="slide-heading">Introduction to Mental Wellness Assessment</h2>
            <p className="slide-subheading">
              Addressing complexity through the synergy of Multimodal Sensing &amp; Agentic AI Reasoning
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="intro-grid">
            <div className="intro-cards-column">
              <div className="intro-lead-card anim-fade-in anim-hover-lift">
                <p className="lead-text">
                  Mental wellness assessment is inherently <strong>complex</strong> and cannot always be captured through a single source. 
                  Multimodal and Agentic AI can combine <strong>text, speech, voice, and facial cues</strong> while enabling 
                  <strong> reasoning, planning, and continuous adaptation</strong>.
                </p>
                <div className="scope-clarification-banner">
                  <Search size={18} className="banner-icon" />
                  <span>
                    <strong>Case Study Scope:</strong> This investigation reviews existing research and identifies the 
                    fundamental gap motivating the <em>MindCheck</em> concept.
                  </span>
                </div>
              </div>

              <div className="intro-quad-grid">
                <div className="feature-mini-card anim-hover-lift stagger-1">
                  <div className="mini-card-icon-wrap icon-teal anim-pulse-subtle">
                    <Layers size={20} />
                  </div>
                  <h4>Multimodal Synthesis</h4>
                  <p>Synchronizing textual linguistics, vocal acoustic pitch, and facial micro-dynamics.</p>
                </div>

                <div className="feature-mini-card anim-hover-lift stagger-2">
                  <div className="mini-card-icon-wrap icon-mint anim-pulse-subtle">
                    <Brain size={20} />
                  </div>
                  <h4>Agentic Reasoning</h4>
                  <p>Goal-directed reasoning loops that adapt questions rather than following rigid static scripts.</p>
                </div>

                <div className="feature-mini-card anim-hover-lift stagger-3">
                  <div className="mini-card-icon-wrap icon-green anim-pulse-subtle">
                    <Database size={20} />
                  </div>
                  <h4>Longitudinal Memory</h4>
                  <p>Preserving session context over time to track subtle changes in user wellbeing.</p>
                </div>

                <div className="feature-mini-card anim-hover-lift stagger-4">
                  <div className="mini-card-icon-wrap icon-aqua anim-pulse-subtle">
                    <ShieldCheck size={20} />
                  </div>
                  <h4>Triaging &amp; Safety</h4>
                  <p>Supporting early screening and professional clinician review without autonomous diagnosing.</p>
                </div>
              </div>
            </div>

            <div className="intro-visual-column anim-scale-in">
              <div className="illustration-card-container anim-hover-lift">
                <ConsultationIllustration />
                <div className="callout-bubble">
                  <Sparkles size={16} className="text-teal" />
                  <span>Holistic perception mirrors genuine human empathy.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 3: PROBLEM STATEMENT */}
      {/* ============================================================ */}
      {slideId === 3 && (
        <section className="slide-layout slide-3-problem" id="slide-3">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 03 • Problem Formulation</div>
            <h2 className="slide-heading">Problem Statement &amp; Current Limitations</h2>
            <p className="slide-subheading">
              Psychological and emotional conditions require deep conversational context and professional evaluation.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="problem-content-wrap">
            <div className="limitations-grid">
              <div className="limitation-card anim-hover-lift stagger-1">
                <div className="limit-num">01</div>
                <div className="limit-header">
                  <FileText size={18} className="limit-icon" />
                  <h3>Single-Modal Information</h3>
                </div>
                <p>Reliance solely on questionnaires or text prompts overlooks acoustic tone and facial affective cues.</p>
              </div>

              <div className="limitation-card anim-hover-lift stagger-2">
                <div className="limit-num">02</div>
                <div className="limit-header">
                  <MessageSquare size={18} className="limit-icon" />
                  <h3>Limited Adaptive Questioning</h3>
                </div>
                <p>Pre-scripted dialogue trees fail to probe deeper into ambiguous or emotionally charged user disclosures.</p>
              </div>

              <div className="limitation-card anim-hover-lift stagger-3">
                <div className="limit-num">03</div>
                <div className="limit-header">
                  <Brain size={18} className="limit-icon" />
                  <h3>Lack of Reasoning &amp; Planning</h3>
                </div>
                <p>Most chatbots generate surface-level replies without multi-step intent modeling or strategy formulation.</p>
              </div>

              <div className="limitation-card anim-hover-lift stagger-4">
                <div className="limit-num">04</div>
                <div className="limit-header">
                  <Database size={18} className="limit-icon" />
                  <h3>Limited Session Context &amp; Memory</h3>
                </div>
                <p>Discussions reset between interactions, preventing longitudinal tracking of mental wellness shifts.</p>
              </div>

              <div className="limitation-card anim-hover-lift stagger-5">
                <div className="limit-num">05</div>
                <div className="limit-header">
                  <Camera size={18} className="limit-icon" />
                  <h3>Subtle Behavioral Cues Missed</h3>
                </div>
                <p>Micro-hesitations in speech or dampened facial affect go undetected in standard self-reported surveys.</p>
              </div>

              <div className="limitation-card anim-hover-lift stagger-6">
                <div className="limit-num">06</div>
                <div className="limit-header">
                  <ShieldAlert size={18} className="limit-icon" />
                  <h3>Privacy, Safety &amp; Reliability</h3>
                </div>
                <p>Hallucinations, uncontrolled diagnostic claims, and weak data sovereignty undermine user trust.</p>
              </div>
            </div>

            <div className="highlight-callout-banner anim-pulse-glow">
              <div className="callout-icon-wrap">
                <AlertCircle size={28} />
              </div>
              <div className="callout-body">
                <span className="callout-kicker">Core Research Mandate</span>
                <p className="callout-text">
                  “There is a need for an <strong>adaptive, multimodal and safety-aware approach</strong> that supports 
                  <strong> early identification and professional evaluation</strong> rather than providing diagnosis itself.”
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 4: OBJECTIVE OF CASE STUDY */}
      {/* ============================================================ */}
      {slideId === 4 && (
        <section className="slide-layout slide-4-objectives" id="slide-4">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 04 • Research Scope</div>
            <h2 className="slide-heading">Objectives of Case Study</h2>
            <p className="slide-subheading">
              Five systematic goals charting existing AI capabilities toward the MindCheck conceptual proposal.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="objectives-list-container">
            <div className="objective-item-card anim-hover-slide stagger-1">
              <div className="obj-index-circle">1</div>
              <div className="obj-body">
                <h3>Study Existing AI-Based Approaches</h3>
                <p>
                  Conduct a structured inquiry into contemporary algorithmic frameworks utilized across mental wellness screening and affective computing.
                </p>
              </div>
              <div className="obj-tag">Foundation</div>
            </div>

            <div className="objective-item-card anim-hover-slide stagger-2">
              <div className="obj-index-circle">2</div>
              <div className="obj-body">
                <h3>Examine Conversational, Multimodal &amp; Agentic AI</h3>
                <p>
                  Analyze how linguistic chat interfaces, acoustic/visual sensory inputs, and autonomous goal-directed agents intersect.
                </p>
              </div>
              <div className="obj-tag">Taxonomy</div>
            </div>

            <div className="objective-item-card anim-hover-slide stagger-3">
              <div className="obj-index-circle">3</div>
              <div className="obj-body">
                <h3>Analyze Reasoning, Planning &amp; Adaptation</h3>
                <p>
                  Investigate cognitive loops (Chain-of-Thought, Reflection, BDI models) that facilitate dynamic conversational steering.
                </p>
              </div>
              <div className="obj-tag">Cognitive Loop</div>
            </div>

            <div className="objective-item-card anim-hover-slide stagger-4">
              <div className="obj-index-circle">4</div>
              <div className="obj-body">
                <h3>Identify Limitations &amp; Challenges</h3>
                <p>
                  Unpack persistent bottlenecks spanning single-modal blindspots, session amnesia, ethical guardrails, and clinical risks.
                </p>
              </div>
              <div className="obj-tag">Critical Review</div>
            </div>

            <div className="objective-item-card highlight-obj anim-hover-slide stagger-5 anim-pulse-subtle">
              <div className="obj-index-circle obj-accent">5</div>
              <div className="obj-body">
                <h3>Determine the Research Gap Motivating MindCheck</h3>
                <p>
                  Synthesize findings to formalize the foundational research gap that motivates the proposed MindCheck conceptual framework.
                </p>
              </div>
              <div className="obj-tag tag-accent">Conceptual Synthesis</div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 5: BACKGROUND & PARADIGM EVOLUTION */}
      {/* ============================================================ */}
      {slideId === 5 && (
        <section className="slide-layout slide-5-background" id="slide-5">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 05 • Evolutionary Journey</div>
            <h2 className="slide-heading">Background &amp; Technological Evolution</h2>
            <p className="slide-subheading">
              Tracing the paradigm shift from static paper inventories to adaptive multimodal agentic intelligence.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="evolution-flow-container">
            <div className="evolution-nodes-row">
              {/* Phase 1 */}
              <div className="evolution-node anim-hover-lift stagger-1">
                <div className="node-number">Phase 01</div>
                <div className="node-icon-box">
                  <FileText size={26} />
                </div>
                <h3>Mental Wellness Assessment</h3>
                <p>Traditional psychometric scales (PHQ-9, GAD-7) and scripted clinical intake forms.</p>
                <div className="node-pill">Static &amp; Retrospective</div>
              </div>

              <div className="evolution-connector anim-pulse-arrow">
                <div className="connector-arrow">↓</div>
                <span className="connector-label">Dialogue</span>
              </div>

              {/* Phase 2 */}
              <div className="evolution-node anim-hover-lift stagger-2">
                <div className="node-number">Phase 02</div>
                <div className="node-icon-box">
                  <MessageSquare size={26} />
                </div>
                <h3>Conversational AI</h3>
                <p>Rule-based and generative chatbots providing sympathetic interactive dialogue.</p>
                <div className="node-pill">Text-Centric Only</div>
              </div>

              <div className="evolution-connector anim-pulse-arrow">
                <div className="connector-arrow">↓</div>
                <span className="connector-label">Sensory Cues</span>
              </div>

              {/* Phase 3 */}
              <div className="evolution-node anim-hover-lift stagger-3">
                <div className="node-number">Phase 03</div>
                <div className="node-icon-box">
                  <Layers size={26} />
                </div>
                <h3>Multimodal AI</h3>
                <p>Cross-attention fusing acoustic prosody, facial expression tension, and text semantic cues.</p>
                <div className="node-pill">Passive Perception</div>
              </div>

              <div className="evolution-connector anim-pulse-arrow">
                <div className="connector-arrow">↓</div>
                <span className="connector-label">Reasoning</span>
              </div>

              {/* Phase 4 */}
              <div className="evolution-node node-highlight anim-hover-lift stagger-4 anim-pulse-subtle">
                <div className="node-number">Phase 04</div>
                <div className="node-icon-box box-accent">
                  <Brain size={26} />
                </div>
                <h3>Agentic AI</h3>
                <p>Closed-loop reasoning, strategic goal planning, episodic memory, and dynamic inquiry tuning.</p>
                <div className="node-pill pill-accent">Adaptive &amp; Proactive</div>
              </div>
            </div>

            {/* Formula Banner */}
            <div className="formula-synthesis-card anim-fade-in anim-hover-lift">
              <div className="formula-math">
                <span className="formula-part anim-glow">Agentic AI</span>
                <span className="formula-op">+</span>
                <span className="formula-part anim-glow">Multimodal AI</span>
                <span className="formula-eq">→</span>
                <span className="formula-result anim-glow">More Adaptive &amp; Context-Aware Assessment</span>
              </div>
              <p className="formula-sub">
                Transitions mental wellness screening from rigid one-size-fits-all scoring to empathetic, clinically supervised interaction.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 6: EXISTING APPROACHES */}
      {/* ============================================================ */}
      {slideId === 6 && (
        <section className="slide-layout slide-6-approaches" id="slide-6">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 06 • Modality Landscape</div>
            <h2 className="slide-heading">Existing Approaches in AI Mental Wellness</h2>
            <p className="slide-subheading">
              Current state-of-the-art modalities surrounding automated mental wellbeing support.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="hub-layout-wrapper">
            <div className="hub-center-core anim-pulse-glow">
              <div className="hub-core-inner">
                <Brain size={36} className="core-icon anim-spin-slow" />
                <h3>AI FOR MENTAL WELLNESS</h3>
                <span>Current Landscape</span>
              </div>
            </div>

            <div className="hub-cards-grid">
              <div className="hub-satellite-card anim-hover-lift stagger-1">
                <div className="card-top-bar">
                  <div className="icon-badge icon-teal">
                    <MessageSquare size={20} />
                  </div>
                  <span className="hub-index">01</span>
                </div>
                <h4>Conversational AI</h4>
                <p>LLM agents engaging in open dialogue; provides initial comfort but often hallucinates or forgets multi-turn context.</p>
              </div>

              <div className="hub-satellite-card anim-hover-lift stagger-2">
                <div className="card-top-bar">
                  <div className="icon-badge icon-mint">
                    <FileText size={20} />
                  </div>
                  <span className="hub-index">02</span>
                </div>
                <h4>Text-Based Analysis</h4>
                <p>Sentiment analysis, semantic embeddings, and lexical markers (LIWC); blind to sarcasm and non-verbal strain.</p>
              </div>

              <div className="hub-satellite-card anim-hover-lift stagger-3">
                <div className="card-top-bar">
                  <div className="icon-badge icon-green">
                    <Mic size={20} />
                  </div>
                  <span className="hub-index">03</span>
                </div>
                <h4>Speech &amp; Voice Analysis</h4>
                <p>Acoustic prosody, pitch variability, speech pauses, and jitter; valuable indicators of psychomotor retardation.</p>
              </div>

              <div className="hub-satellite-card anim-hover-lift stagger-4">
                <div className="card-top-bar">
                  <div className="icon-badge icon-aqua">
                    <Camera size={20} />
                  </div>
                  <span className="hub-index">04</span>
                </div>
                <h4>Facial Analysis</h4>
                <p>Action unit (FACS) recognition and micro-expression tracking; sensitive to lighting, camera angles, and cultural bias.</p>
              </div>

              <div className="hub-satellite-card anim-hover-lift stagger-5">
                <div className="card-top-bar">
                  <div className="icon-badge icon-teal">
                    <Layers size={20} />
                  </div>
                  <span className="hub-index">05</span>
                </div>
                <h4>Multimodal AI</h4>
                <p>Early/late fusion models reconciling voice, text, and video; typically operate as offline batch predictors without dialogue.</p>
              </div>

              <div className="hub-satellite-card card-accent-glow anim-hover-lift stagger-6">
                <div className="card-top-bar">
                  <div className="icon-badge icon-lime">
                    <Compass size={20} />
                  </div>
                  <span className="hub-index">06</span>
                </div>
                <h4>Agentic AI</h4>
                <p>Emerging autonomous architectures utilizing reflection and tool-calling; sparsely integrated with real-time bio-cues.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 7: AGENTIC AI IN MENTAL HEALTH */}
      {/* ============================================================ */}
      {slideId === 7 && (
        <section className="slide-layout slide-7-agentic" id="slide-7">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 07 • Dynamic Agentic Cycle</div>
            <h2 className="slide-heading">Agentic AI in Mental Health: The Autonomous Loop</h2>
            <p className="slide-subheading">
              Transforming mental health AI from static classification models into adaptive, goal-oriented interaction systems.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="agentic-diagram-grid">
            <div className="agentic-svg-column anim-scale-in">
              <CircularAgenticLoop activeStep={activeWorkflowStep} />
              
              <div className="loop-step-controls">
                <div className="loop-playback-bar">
                  <button
                    type="button"
                    className={`playback-toggle-btn ${isLoopAutoPlaying ? 'playing' : ''}`}
                    onClick={() => setIsLoopAutoPlaying((prev) => !prev)}
                    title={isLoopAutoPlaying ? 'Pause Automated Loop Walkthrough' : 'Play Automated Loop Walkthrough'}
                  >
                    {isLoopAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isLoopAutoPlaying ? 'Auto-Cycle Active' : 'Auto-Cycle Paused'}</span>
                  </button>
                  <span className="step-hint">Or click any step below:</span>
                </div>

                <div className="step-buttons-pill">
                  {['Perception', 'Reasoning', 'Planning', 'Adaptation', 'Memory', 'Action'].map((lbl, idx) => (
                    <button
                      key={lbl}
                      type="button"
                      className={`step-btn ${activeWorkflowStep === idx ? 'active' : ''}`}
                      onClick={() => {
                        setActiveWorkflowStep(idx);
                        setIsLoopAutoPlaying(false);
                      }}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="agentic-explanation-column">
              <div className="paradigm-transformation-card anim-hover-lift">
                <div className="paradigm-badge anim-pulse-subtle">
                  <Sparkles size={16} /> Key Paradigm Shift
                </div>
                <blockquote className="key-idea-text">
                  “Agentic AI transforms mental-health AI from a <strong>static prediction system</strong> into an 
                  <strong> adaptive, goal-oriented interaction system</strong>.”
                </blockquote>
              </div>

              <div className="phase-detail-card anim-hover-lift key-fade-change" key={activeWorkflowStep}>
                <div className="phase-header">
                  <span className="phase-badge">Phase 0{activeWorkflowStep + 1}</span>
                  <h3>
                    {[
                      'PERCEPTION: Multimodal Sensory Ingestion',
                      'REASONING: Affective State & Intent Modeling',
                      'PLANNING: Goal-Directed Strategy Formulation',
                      'ADAPTATION: Dynamic Dialogue & Pace Tuning',
                      'MEMORY: Session & Longitudinal Grounding',
                      'ACTION: Empathetic Interventions & Clinical Triage'
                    ][activeWorkflowStep]}
                  </h3>
                </div>
                <p className="phase-description">
                  {[
                    'Synchronous streaming of textual statements, pitch fluctuations, vocal jitter, and facial action units into structured cognitive representations.',
                    'Inferring emotional valences, cognitive distortions, and unstated hesitancy using multi-step chain-of-thought verification.',
                    'Constructing non-invasive inquiry strategies to explore sensitive domains without triggering anxiety or defensive resistance.',
                    'Tailoring linguistic complexity, empathetic reassurance, and conversational tempo in response to live patient distress indicators.',
                    'Maintaining episodic session logs and semantic relationship graphs to recognize multi-week changes in patient wellbeing.',
                    'Synthesizing warm conversational prompts while immediately activating clinical safety escalations if distress thresholds are exceeded.'
                  ][activeWorkflowStep]}
                </p>
                <div className="phase-clinical-safeguard">
                  <ShieldCheck size={16} className="text-teal anim-pulse-subtle" />
                  <span>Clinical Safeguard: Governed by strictly bounded safety boundaries.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 8: EVOLUTION OF AI IN MENTAL-HEALTH RECOGNITION */}
      {/* ============================================================ */}
      {slideId === 8 && (
        <section className="slide-layout slide-8-evolution" id="slide-8">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 08 • Historical Paradigm Evolution</div>
            <h2 className="slide-heading">Evolution of AI in Mental-Health Recognition</h2>
            <p className="slide-subheading">
              A chronological trajectory from early rule-based systems to multimodal agentic cognitive architectures.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <EvolutionTimeline />
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 9: LITERATURE REVIEW */}
      {/* ============================================================ */}
      {slideId === 9 && (
        <section className="slide-layout slide-9-literature" id="slide-9">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 09 • Scholarly Foundation</div>
            <h2 className="slide-heading">Literature Review &amp; Prior Art (2024–2026)</h2>
            <p className="slide-subheading">
              Chronological synthesis of peer-reviewed journal &amp; conference contributions highlighting the emerging role of Agentic AI.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="lit-table-wrapper anim-hover-lift">
            <div className="table-controls-bar">
              <div className="filter-group">
                <Filter size={16} className="filter-icon" />
                <span className="filter-label">Filter Chronology:</span>
                {(['all', '2026', '2025', '2024'] as const).map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    className={`filter-chip ${paperFilter === yr ? 'active' : ''}`}
                    onClick={() => setPaperFilter(yr)}
                  >
                    {yr === 'all' ? 'All (2024–2026)' : yr}
                  </button>
                ))}
              </div>

              <div className="table-meta-badge">
                <BookOpen size={14} /> Showing {filteredPapers.length} Peer-Reviewed Studies (Journal Priority)
              </div>
            </div>

            {/* Desktop / Tablet Scrollable Table View */}
            <div className="table-scroll-container lit-table-desktop">
              <table className="research-table" aria-label="Literature review papers">
                <thead>
                  <tr>
                    <th style={{ width: '6%' }}>S. No.</th>
                    <th style={{ width: '28%' }}>Study Name &amp; Authors</th>
                    <th style={{ width: '22%' }}>Conference / Journal &amp; Year</th>
                    <th style={{ width: '24%' }}>Key Insights</th>
                    <th style={{ width: '20%' }}>Agentic AI Role</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPapers.map((paper) => (
                    <tr key={paper.sNo} className={`table-row-anim ${paper.isJournal ? 'journal-row' : ''}`}>
                      <td className="cell-num">#{paper.sNo}</td>
                      <td className="cell-title">
                        <strong>{paper.title}</strong>
                        <span className="author-sub">{paper.authors}</span>
                      </td>
                      <td className="cell-venue">
                        <span className="venue-tag">
                          {paper.isJournal ? 'Journal' : 'Conference'}
                        </span>
                        <div className="venue-text">{paper.venueYear}</div>
                      </td>
                      <td className="cell-insight">{paper.keyInsights}</td>
                      <td className="cell-agentic">
                        <span className="agentic-role-badge">{paper.agenticRole}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Responsive Cards View (< 768px) */}
            <div className="lit-cards-mobile-view" aria-label="Literature review cards">
              {filteredPapers.map((paper) => (
                <div key={paper.sNo} className={`lit-mobile-card anim-hover-lift ${paper.isJournal ? 'is-journal-card' : ''}`}>
                  <div className="lit-card-top-header">
                    <span className="lit-card-num">#{paper.sNo}</span>
                    <div className="lit-card-meta-tags">
                      <span className="venue-tag">{paper.isJournal ? 'Journal' : 'Conference'}</span>
                      <span className="lit-card-year">{paper.year}</span>
                    </div>
                  </div>

                  <h3 className="lit-card-title">{paper.title}</h3>
                  <div className="lit-card-authors">{paper.authors}</div>
                  <div className="lit-card-venue">{paper.venueYear}</div>

                  <div className="lit-card-section">
                    <div className="lit-card-section-label">Key Insights</div>
                    <p className="lit-card-insight-text">{paper.keyInsights}</p>
                  </div>

                  <div className="lit-card-section">
                    <div className="lit-card-section-label">Agentic AI Role</div>
                    <div className="agentic-role-badge">{paper.agenticRole}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="table-footnote">
              * Note: Prioritized prominent journals (IEEE TAFFC, Nature NPJ Digital Medicine, JMIR, TOCHI) demonstrating the evolution towards self-reflective, safety-governed AI agents.
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 10: CRITICAL ANALYSIS & RESEARCH GAPS */}
      {/* ============================================================ */}
      {slideId === 10 && (
        <section className="slide-layout slide-10-gaps" id="slide-10">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 10 • Evaluative Synthesis</div>
            <h2 className="slide-heading">Critical Analysis &amp; Research Gaps</h2>
            <p className="slide-subheading">
              Synthesizing existing methodological constraints to identify the foundational gap bridging current systems and MindCheck.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="split-gaps-container">
            {/* Left: Critical Analysis */}
            <div className="critical-analysis-col">
              <div className="column-heading-box">
                <Search size={22} className="text-teal" />
                <h3>Critical Analysis</h3>
              </div>

              <div className="critique-cards-stack">
                <div className="critique-card anim-hover-slide stagger-1">
                  <h4>Siloed Algorithmic Paradigms</h4>
                  <p>
                    Existing systems excel in narrow tasks—NLP models detect sentiment, acoustic models extract pitch, and vision models track facial landmarks—yet they almost universally operate in total isolation.
                  </p>
                </div>

                <div className="critique-card anim-hover-slide stagger-2">
                  <h4>Absence of Active Probing</h4>
                  <p>
                    Passive classification algorithms score what the user spontaneously volunteers. They lack the clinical foresight to formulate gentle clarifying inquiries when data signals conflict.
                  </p>
                </div>

                <div className="critique-card anim-hover-slide stagger-3">
                  <h4>Static Episodic Amnesia</h4>
                  <p>
                    Conversational agents treat every consultation as a zero-history event, missing gradual trajectory declines or recovery markers over successive weeks.
                  </p>
                </div>
              </div>

              <div className="bridge-visual-box anim-hover-lift">
                <ResearchGapBridge />
              </div>
            </div>

            {/* Right: The 6 Research Gaps */}
            <div className="research-gaps-col">
              <div className="column-heading-box highlight-gaps">
                <AlertCircle size={22} className="text-dark" />
                <h3>Identified Research Gaps</h3>
              </div>

              <div className="gap-items-list">
                <div className="gap-item anim-hover-slide stagger-1">
                  <div className="gap-bullet">1</div>
                  <div className="gap-text">
                    <h4>Limited Multimodal Integration</h4>
                    <p>Few frameworks integrate speech acoustic prosody and facial micro-dynamics into live conversational dialogue.</p>
                  </div>
                </div>

                <div className="gap-item anim-hover-slide stagger-2">
                  <div className="gap-bullet">2</div>
                  <div className="gap-text">
                    <h4>Limited Dynamic Questioning</h4>
                    <p>Predetermined survey forms dominate; real-time adaptive steering based on affective cues is largely unstudied.</p>
                  </div>
                </div>

                <div className="gap-item anim-hover-slide stagger-3">
                  <div className="gap-bullet">3</div>
                  <div className="gap-text">
                    <h4>Limited Reasoning–Planning–Action Loops</h4>
                    <p>Systems lack internal deliberation and chain-of-thought verification before generating communicative responses.</p>
                  </div>
                </div>

                <div className="gap-item anim-hover-slide stagger-4">
                  <div className="gap-bullet">4</div>
                  <div className="gap-text">
                    <h4>Limited Session &amp; Longitudinal Memory</h4>
                    <p>Absence of privacy-preserving knowledge graphs that track affective changes across recurrent sessions.</p>
                  </div>
                </div>

                <div className="gap-item anim-hover-slide stagger-5">
                  <div className="gap-bullet">5</div>
                  <div className="gap-text">
                    <h4>Need for Stronger Safety-Aware Decisions</h4>
                    <p>Insufficient safety gating, risk escalation policies, and hallucination containment for vulnerable populations.</p>
                  </div>
                </div>

                <div className="gap-item highlight-final-gap anim-hover-slide stagger-6 anim-pulse-subtle">
                  <div className="gap-bullet accent-bullet">6</div>
                  <div className="gap-text">
                    <h4>Few Approaches Combine All Capabilities</h4>
                    <p>No unified, clinically supervised framework currently binds multimodal sensing, agentic planning, and safety triaging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 11: CASE STUDY INSIGHTS */}
      {/* ============================================================ */}
      {slideId === 11 && (
        <section className="slide-layout slide-11-insights" id="slide-11">
          <header className="slide-header anim-slide-up">
            <div className="slide-kicker">Slide 11 • Conceptual Pillars</div>
            <h2 className="slide-heading">Case Study Insights &amp; Architectural Takeaways</h2>
            <p className="slide-subheading">
              Six foundational requirements distilled from literature to guide safe and adaptive mental wellness architectures.
            </p>
            <DecorativeZigzag color="#087F73" />
          </header>

          <div className="insights-hub-layout">
            <div className="insights-center-node anim-pulse-glow">
              <Brain size={44} className="node-center-icon anim-spin-slow" />
              <h3>AI FOR MENTAL WELLNESS</h3>
              <p>Core Architectural Principles</p>
            </div>

            <div className="insights-hex-grid">
              <div className="insight-card anim-hover-lift stagger-1">
                <div className="insight-card-top">
                  <div className="insight-icon-box icon-teal">
                    <Layers size={22} />
                  </div>
                  <span className="insight-num">Pillar 01</span>
                </div>
                <h4>Multimodal Information</h4>
                <p>Synthesizing acoustic prosody and visual affect with text provides a far richer window into mental state than text alone.</p>
              </div>

              <div className="insight-card anim-hover-lift stagger-2">
                <div className="insight-card-top">
                  <div className="insight-icon-box icon-mint">
                    <MessageSquare size={22} />
                  </div>
                  <span className="insight-num">Pillar 02</span>
                </div>
                <h4>Conversational Interaction</h4>
                <p>Empathetic, naturalistic dialogue lowers patient defensiveness and enables deep, collaborative exploratory disclosures.</p>
              </div>

              <div className="insight-card anim-hover-lift stagger-3">
                <div className="insight-card-top">
                  <div className="insight-icon-box icon-green">
                    <Cpu size={22} />
                  </div>
                  <span className="insight-num">Pillar 03</span>
                </div>
                <h4>Agentic AI Capabilities</h4>
                <p>Autonomous reflection, goal planning, and tool use empower the system to adapt inquiry paths dynamically.</p>
              </div>

              <div className="insight-card anim-hover-lift stagger-4">
                <div className="insight-card-top">
                  <div className="insight-icon-box icon-aqua">
                    <Database size={22} />
                  </div>
                  <span className="insight-num">Pillar 04</span>
                </div>
                <h4>Memory &amp; Personalization</h4>
                <p>Longitudinal recall enables the system to recognize baseline fluctuations and personalize pacing across time.</p>
              </div>

              <div className="insight-card anim-hover-lift stagger-5">
                <div className="insight-card-top">
                  <div className="insight-icon-box icon-teal">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="insight-num">Pillar 05</span>
                </div>
                <h4>Safety &amp; Privacy</h4>
                <p>Differential privacy, encrypted local feature extraction, and strict hallucination prevention guardrails are non-negotiable.</p>
              </div>

              <div className="insight-card card-accent-border anim-hover-lift stagger-6">
                <div className="insight-card-top">
                  <div className="insight-icon-box icon-lime">
                    <UserCheck size={22} />
                  </div>
                  <span className="insight-num">Pillar 06</span>
                </div>
                <h4>Human-in-the-Loop</h4>
                <p>AI must function solely as an assistive triaging and screening tool that hands off structured summaries to human practitioners.</p>
              </div>
            </div>
          </div>

          <div className="insight-bottom-takeaway anim-pulse-glow">
            <div className="takeaway-badge">Primary Takeaway</div>
            <p className="takeaway-text">
              “The literature indicates a <strong>clear opportunity for adaptive, multimodal and safety-aware Agentic AI</strong> in mental-wellness assessment.”
            </p>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SLIDE 12: CONCLUSION */}
      {/* ============================================================ */}
      {slideId === 12 && (
        <section className="slide-layout slide-12-conclusion" id="slide-12">
          <div className="conclusion-floating-bg">
            <div className="organic-blob blob-conclusion-1 anim-float-slow" />
            <div className="organic-blob blob-conclusion-2 anim-float-reverse" />
          </div>

          <div className="conclusion-content-box anim-fade-in">
            <div className="conclusion-badge anim-glow">
              <Check size={16} /> Slide 12 • Case Study Synthesis
            </div>

            <h2 className="conclusion-heading anim-slide-up">Conclusion &amp; Future Conceptual Vision</h2>

            <div className="conclusion-text-card anim-hover-lift">
              <p className="conclusion-main-paragraph">
                “The case study shows that AI in mental-wellness assessment is evolving from basic conversational and single-modal systems toward 
                <strong> multimodal and Agentic AI</strong>. Existing research demonstrates the value of reasoning, planning, adaptation and 
                multimodal analysis, but their complete integration remains limited. This highlights an opportunity for safe, adaptive and 
                context-aware mental-wellness assessment, providing the foundation for the <strong>MindCheck</strong> concept.”
              </p>
            </div>

            <div className="conclusion-concept-branding anim-scale-in">
              <div className="concept-logo-box anim-glow">
                <Brain size={38} className="concept-brain-icon anim-spin-slow" />
                <h3 className="concept-title">MINDCHECK</h3>
              </div>
              <div className="concept-tagline">
                From Research Gap <ArrowRight size={18} className="inline-arrow anim-pulse-arrow" /> Future Concept
              </div>
            </div>

            <div className="academic-viva-disclaimer anim-hover-lift">
              <ShieldAlert size={18} className="disclaimer-icon" />
              <p>
                <strong>Academic Scope Notice:</strong> This study presents MindCheck strictly as a research-motivated conceptual framework. 
                MindCheck is neither an implemented commercial product nor a clinically validated diagnostic tool. AI systems must operate as 
                supportive screening aids strictly subservient to licensed mental health practitioners.
              </p>
            </div>

            <div className="conclusion-footer-presenters">
              <span>Presented by <strong>Suhani Thakare</strong> &amp; <strong>Onkar Chand</strong></span>
              <span className="dot-sep">•</span>
              <span>Academic Case Study Defense</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
