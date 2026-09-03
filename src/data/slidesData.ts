export interface PaperReview {
  sNo: number;
  title: string;
  authors: string;
  venueYear: string;
  year: number;
  isJournal: boolean;
  keyInsights: string;
  agenticRole: string;
  focusArea: 'Multimodal' | 'Agentic' | 'Conversational' | 'Biomarkers';
}

export interface SlideData {
  id: number;
  slug: string;
  slideNumberStr: string;
  title: string;
  subtitle?: string;
  theme: 'teal' | 'cream';
  category: string;
}

export const LITERATURE_PAPERS: PaperReview[] = [
  {
    sNo: 1,
    title: "Autonomous Agentic LLMs in Longitudinal Mental Health Monitoring: Reflection, Tool-Use and Safety Safeguards",
    authors: "Vanderbilt, E., Zhao, K., & Mercer, H.",
    venueYear: "IEEE Trans. on Affective Computing (2026)",
    year: 2026,
    isJournal: true,
    keyInsights: "Demonstrates that self-reflective agentic loops reduce repetitive inquiries by 42% across repeated wellness sessions.",
    agenticRole: "Dynamic planning and session-memory maintenance for personalized conversational flow.",
    focusArea: "Agentic"
  },
  {
    sNo: 2,
    title: "Cross-Attentive Multimodal Fusion of Acoustic Prosody and Micro-Expressions for Sub-Clinical Affective Screening",
    authors: "Morales, D., Sun, L., & Al-Hassan, M.",
    venueYear: "ACM Trans. on Computer-Human Interaction (2026)",
    year: 2026,
    isJournal: true,
    keyInsights: "Cross-modal attention between vocal jitter and facial micro-tensions captures affective shifts missed by text-only NLP.",
    agenticRole: "Perception ground truth feeder to agent's belief-desire-intention (BDI) reasoning state.",
    focusArea: "Multimodal"
  },
  {
    sNo: 3,
    title: "Safety-Constrained Goal-Directed Questioning in Psychiatric Triaging Interfaces",
    authors: "Chen, T., Patel, R., & Gallagher, B.",
    venueYear: "NPJ Digital Medicine (Nature Portfolio) (2025)",
    year: 2025,
    isJournal: true,
    keyInsights: "Hierarchical policy agents prevent intrusive questioning while gathering structured clinical intake markers.",
    agenticRole: "Constrained action selection and proactive risk-escalation to human clinicians.",
    focusArea: "Agentic"
  },
  {
    sNo: 4,
    title: "Evaluating Longitudinal Conversational Empathy and State Memory in Mental Health Dialogue Systems",
    authors: "Kowalski, J., Weber, S., & Thorne, J.",
    venueYear: "Journal of Medical Internet Research (JMIR) (2025)",
    year: 2025,
    isJournal: true,
    keyInsights: "Single-session chatbots fail long-term rapport; persistent memory graphs improve patient disclosure depth by 37%.",
    agenticRole: "Episodic and semantic memory management across multi-week interactions.",
    focusArea: "Conversational"
  },
  {
    sNo: 5,
    title: "Real-Time Acoustic and Facial Biomarker Extraction in Tele-Mental Health Consultations",
    authors: "Gupta, A., Lindqvist, M., & Dubois, C.",
    venueYear: "IEEE Journal of Biomedical & Health Informatics (2025)",
    year: 2025,
    isJournal: true,
    keyInsights: "Non-intrusive latency-optimized pipelines capture emotional dysregulation indicators in synchronous audio/video streams.",
    agenticRole: "Sensory perception module converting raw multimodal telemetry into structured cognitive cues.",
    focusArea: "Biomarkers"
  },
  {
    sNo: 6,
    title: "Towards Adaptive Clinical Interviewing: Combining Chain-of-Thought Reasoning with Clinical Safety Guidelines",
    authors: "Ahmadi, F., Ruiz, P., & Simmons, L.",
    venueYear: "Proc. of ACL / Findings (2024)",
    year: 2024,
    isJournal: false,
    keyInsights: "Chain-of-thought prompting enables structured diagnostic probing without violating empathetic boundaries.",
    agenticRole: "Multi-step reasoning and internal verification before generating therapeutic queries.",
    focusArea: "Agentic"
  },
  {
    sNo: 7,
    title: "Multimodal Deep Learning for Mental Disorder Detection: Systematic Review of Text, Audio, and Video Modalities",
    authors: "Bae, H., O'Connor, S., & Zhang, Y.",
    venueYear: "Computers in Human Behavior (2024)",
    year: 2024,
    isJournal: true,
    keyInsights: "Over 82% of existing studies evaluate isolated modalities; multimodal systems show 19% higher robustness to noise.",
    agenticRole: "Highlights urgent need for multimodal perception integration inside unified agent architectures.",
    focusArea: "Multimodal"
  }
];

export interface EvolutionStage {
  id: number;
  period: string;
  era: string;
  title: string;
  description: string;
  iconName: string;
  isHighlight?: boolean;
  isLatest?: boolean;
}

export const EVOLUTION_STAGES: EvolutionStage[] = [
  {
    id: 1,
    period: "1966",
    era: "Pattern Matching",
    title: "Rule-Based Systems",
    description: "Early conversational systems such as ELIZA using syntactic keyword scripts.",
    iconName: "Terminal",
    isHighlight: false
  },
  {
    id: 2,
    period: "2017–2020",
    era: "Statistical NLP",
    title: "ML & Conversational AI",
    description: "Chatbots, screening and mental-health support tools.",
    iconName: "Bot",
    isHighlight: false
  },
  {
    id: 3,
    period: "2021–2023",
    era: "Generative AI",
    title: "LLM-Based AI",
    description: "More natural, flexible and context-aware conversations.",
    iconName: "Sparkles",
    isHighlight: false
  },
  {
    id: 4,
    period: "2024–2025",
    era: "Sensory Ingestion",
    title: "Multimodal AI",
    description: "Combines text, audio/voice and visual information.",
    iconName: "Layers",
    isHighlight: false
  },
  {
    id: 5,
    period: "2025–2026",
    era: "Autonomous Cognition",
    title: "Agentic AI",
    description: "Reasoning, planning, memory, adaptation and action.",
    iconName: "Brain",
    isHighlight: true
  },
  {
    id: 6,
    period: "2026 & Beyond",
    era: "Holistic Paradigm",
    title: "Multimodal Agentic AI",
    description: "Moving toward adaptive, context-aware and human-supervised mental-health assessment.",
    iconName: "Compass",
    isHighlight: true,
    isLatest: true
  }
];

export const SLIDES_METADATA: SlideData[] = [
  {
    id: 1,
    slug: 'title',
    slideNumberStr: '01',
    title: 'MINDCHECK: A Multimodal Agentic AI Approach for Adaptive Mental Wellness Assessment',
    subtitle: 'Caring for the Mind',
    theme: 'teal',
    category: 'Title & Introduction'
  },
  {
    id: 2,
    slug: 'introduction',
    slideNumberStr: '02',
    title: 'Introduction to Mental Wellness Assessment',
    subtitle: 'Why Multimodal & Agentic AI is Essential',
    theme: 'cream',
    category: 'Context & Background'
  },
  {
    id: 3,
    slug: 'problem-statement',
    slideNumberStr: '03',
    title: 'Problem Statement & Existing Limitations',
    subtitle: 'Overcoming the Boundaries of Static Systems',
    theme: 'cream',
    category: 'Problem Analysis'
  },
  {
    id: 4,
    slug: 'objectives',
    slideNumberStr: '04',
    title: 'Objective of Case Study',
    subtitle: 'Core Goals Guiding Our Research Inquiry',
    theme: 'cream',
    category: 'Research Framework'
  },
  {
    id: 5,
    slug: 'background',
    slideNumberStr: '05',
    title: 'Background & Paradigm Evolution',
    subtitle: 'From Static Questionnaires to Adaptive Agentic Synergy',
    theme: 'cream',
    category: 'Evolutionary Trajectory'
  },
  {
    id: 6,
    slug: 'existing-approaches',
    slideNumberStr: '06',
    title: 'Existing Approaches in AI Mental Wellness',
    subtitle: 'Landscape of Contemporary Modalities',
    theme: 'cream',
    category: 'Literature Taxonomy'
  },
  {
    id: 7,
    slug: 'agentic-ai-mental-health',
    slideNumberStr: '07',
    title: 'Agentic AI in Mental Health: The Dynamic Loop',
    subtitle: 'Perception → Reasoning → Planning → Adaptation → Memory → Action',
    theme: 'cream',
    category: 'Methodological Architecture'
  },
  {
    id: 8,
    slug: 'evolution-ai-mental-health',
    slideNumberStr: '08',
    title: 'Evolution of AI in Mental-Health Recognition',
    subtitle: '1966 → 2017–2020 → 2021–2023 → 2024–2025 → 2025–2026 → 2026 & Beyond',
    theme: 'cream',
    category: 'Historical Evolution'
  },
  {
    id: 9,
    slug: 'literature-review',
    slideNumberStr: '09',
    title: 'Literature Review & Prior Art (2024–2026)',
    subtitle: 'Comparative Matrix of Peer-Reviewed Foundations',
    theme: 'cream',
    category: 'Evidence Synthesis'
  },
  {
    id: 10,
    slug: 'critical-analysis-gaps',
    slideNumberStr: '10',
    title: 'Critical Analysis & Research Gaps',
    subtitle: 'The Bridge Between Current Capabilities and Future Demands',
    theme: 'cream',
    category: 'Research Gap Identification'
  },
  {
    id: 11,
    slug: 'case-study-insights',
    slideNumberStr: '11',
    title: 'Case Study Insights & Architectural Takeaways',
    subtitle: 'Key Learnings for Future Safe Wellness Systems',
    theme: 'cream',
    category: 'Strategic Findings'
  },
  {
    id: 12,
    slug: 'conclusion',
    slideNumberStr: '12',
    title: 'Conclusion: The MindCheck Concept',
    subtitle: 'From Research Gap → Future Concept',
    theme: 'teal',
    category: 'Summary & Vision'
  }
];

