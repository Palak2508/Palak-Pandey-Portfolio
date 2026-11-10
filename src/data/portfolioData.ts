export interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Data Analytics' | 'Full-Stack' | 'Web & Mobile';
  tagline: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  awardOrHighlight?: string;
  githubUrl: string;
  demoUrl?: string;
  imageAccent: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
  description: string;
  courses?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    highlight?: string;
  }[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Palak Pandey",
    roleTitle: "Software Developer | AI/ML & Data Analytics Enthusiast",
    tagline: "Building full-stack apps, multimodal ML systems, and data-driven intelligence dashboards.",
    bio: "B.Tech Information Technology student at Pillai College of Engineering, University of Mumbai (AI/ML focus, CGPA 8.6/10, Expected 2027). Skilled in Python, SQL, Java, C++, React, Next.js, and modern machine learning frameworks (Scikit-learn, XGBoost, TensorFlow, RAG, ChromaDB). Experienced in data preprocessing, exploratory data analysis, and building executive Power BI dashboards with real-world impact.",
    email: "palakpandey254@gmail.com",
    phone: "(+91) 87795 36609",
    linkedin: "https://www.linkedin.com/in/palak-pandey-745a33323",
    github: "https://github.com/Palak2508",
    location: "Mumbai, Maharashtra, India",
    college: "Pillai College of Engineering, University of Mumbai",
    degree: "B.Tech, Information Technology Engineering (AI/ML Focus)",
    cgpa: "8.6 / 10",
    status: "Open to SDE / Data Analyst / ML Engineering Roles & Internships",
    resumePdfPath: "/assets/aistudio/Palak_All_7dc9a8f6.pdf",
    photoPath: "/assets/aistudio/palak_portfolio_74d0ad2d.jpg",
    roles: [
      "Software Developer",
      "Machine Learning & AI Builder",
      "Data Analyst",
      "Full-Stack Developer"
    ],
  },

  about: {
    heading: "About Me",
    subheading: "Academic Discipline, Practical Experience & Architectural Focus",
    story: [
      "I am a driven Information Technology engineering student at Pillai College of Engineering (University of Mumbai) with a passion for software development, applied machine learning, and data analytics.",
      "My technical background spans strong foundations in Python, SQL, Java, and C++, alongside practical experience deploying multimodal ML models, retrieval-augmented generation (RAG) pipelines, and interactive analytics dashboards.",
      "During my internship at HappieLoop Technologies, I cleaned and analyzed 3,900+ customer records and designed executive Power BI dashboards evaluating retention, segmentation, and purchasing trends. In leadership, I serve as Joint Public Relations Head for the Computer Society of India (CSI) chapter, coordinating tech publications like ByteStream and collegiate Hacktoberfest events."
    ],
    quickFacts: [
      { label: "Degree", value: "B.Tech Information Technology (AI/ML)" },
      { label: "University", value: "Pillai College of Engg., University of Mumbai" },
      { label: "Academic CGPA", value: "8.6 / 10 (Expected 2027)" },
      { label: "High School (HSC)", value: "Sainath Junior College (75.8%)" },
      { label: "Internship", value: "HappieLoop Technologies (Data Analyst Intern)" },
      { label: "Leadership", value: "Joint PR Head, CSI Chapter (200+ members)" },
      { label: "Phone", value: "(+91) 87795 36609" },
      { label: "Location", value: "Mumbai, India" }
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced", icon: "Terminal", highlight: "ML, Pandas, NLP & Scripting" },
        { name: "SQL", level: "Advanced", icon: "Database", highlight: "Queries, Aggregations & Analytics" },
        { name: "Java", level: "Proficient", icon: "Coffee", highlight: "OOP & DSA in Java" },
        { name: "C++", level: "Proficient", icon: "Code2", highlight: "Data Structures & Algorithms" },
        { name: "JavaScript", level: "Proficient", icon: "Code", highlight: "ES6+, Async & DOM APIs" },
        { name: "TypeScript", level: "Proficient", icon: "FileCode2", highlight: "Type-Safe Modern Development" }
      ]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn & XGBoost", level: "Advanced", icon: "Cpu", highlight: "Feature Eng., Hyperparameter Tuning" },
        { name: "TensorFlow & Keras", level: "Proficient", icon: "Layers", highlight: "Deep Learning & CNN Architectures" },
        { name: "MobileNetV2 & Transfer Learning", level: "Proficient", icon: "Sparkles", highlight: "Multimodal Feature Extraction" },
        { name: "RAG & LangChain", level: "Advanced", icon: "Cpu", highlight: "ChromaDB + Llama 3.2 3B Instruct" },
        { name: "ChromaDB (Vector DB)", level: "Proficient", icon: "Database", highlight: "Embeddings & Semantic Search" },
        { name: "TF-IDF & NLP", level: "Proficient", icon: "MessageSquare", highlight: "Text Vectorization & Classification" }
      ]
    },
    {
      category: "Data Analytics & BI",
      skills: [
        { name: "Power BI (DAX, Power Query)", level: "Advanced", icon: "BarChart3", highlight: "Certified Power BI Fundamentals" },
        { name: "Microsoft Excel", level: "Advanced", icon: "TableProperties", highlight: "Pivot Tables, VLOOKUP, SUMIFS" },
        { name: "Pandas & NumPy", level: "Advanced", icon: "TableProperties", highlight: "166,665+ Records Cleaned" },
        { name: "Matplotlib & EDA", level: "Proficient", icon: "BarChart3", highlight: "Data Visualization & Trend Analysis" },
        { name: "Customer Segmentation", level: "Proficient", icon: "SlidersHorizontal", highlight: "Retention & Churn Analysis" }
      ]
    },
    {
      category: "Web & Mobile Development",
      skills: [
        { name: "React", level: "Proficient", icon: "Atom", highlight: "Hooks, State, Modern UI" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Palette", highlight: "Responsive, Dark-Mode Interfaces" },
        { name: "Flask", level: "Proficient", icon: "Server", highlight: "Microservices & Chatbot APIs" },
        { name: "Streamlit", level: "Proficient", icon: "SlidersHorizontal", highlight: "Interactive ML App Prototyping" },
        { name: "Android (Java, XML)", level: "Working Knowledge", icon: "Laptop", highlight: "Tracify Shipment Tracking App" },
        { name: "HTML & CSS", level: "Advanced", icon: "Globe", highlight: "Semantic, Accessible Layouts" }
      ]
    },
    {
      category: "Cloud & Developer Tools",
      skills: [
        { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", highlight: "Version Control & Open Source" },
        { name: "AWS Fundamentals", level: "Academic", icon: "Server", highlight: "Cloud Computing Coursework" },
        { name: "VS Code", level: "Advanced", icon: "Laptop", highlight: "Development & Debugging" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Information Technology Engineering",
      institution: "Pillai College of Engineering, University of Mumbai",
      location: "New Panvel, Maharashtra",
      period: "2023 – Expected 2027",
      score: "CGPA: 8.6 / 10.0",
      description: "Specializing in Artificial Intelligence and Machine Learning. Active collegiate leadership as Joint PR Head of CSI and hackathon participant.",
      courses: [
        "Machine Learning & AI",
        "Computer Vision",
        "Database Management Systems",
        "Software Engineering & Project Management",
        "Cloud Computing (AWS Fundamentals)",
        "Data Structures & Algorithms"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science (PCMB)",
      institution: "Sainath Junior College",
      location: "Navi Mumbai, Maharashtra",
      period: "2023",
      score: "Score: 75.8%",
      description: "Rigorous pre-engineering foundation in Physics, Chemistry, Mathematics, and Biology.",
      courses: ["Mathematics", "Physics", "Chemistry", "Biology"]
    }
  ] as EducationItem[],

  experience: [
    {
      role: "Data Analyst Intern",
      company: "HappieLoop Technologies",
      period: "Jul 2026 – Aug 2026",
      type: "Remote Internship",
      location: "Remote",
      highlights: [
        "Analyzed retail data of 3,900+ customers using Python, SQL, and Excel; performed data cleaning, preprocessing, and exploratory data analysis.",
        "Built an executive Power BI dashboard covering KPIs, customer segmentation, sales trends, subscription status, age groups, product categories, retention trends, and average purchasing behavior."
      ],
      technologies: ["Python", "SQL", "Excel", "Power BI", "DAX", "Power Query", "Customer Segmentation"]
    },
    {
      role: "Joint Public Relations (Publicity) Head",
      company: "Computer Society of India (CSI), Pillai College of Engineering",
      period: "Collegiate Leadership",
      type: "Student Leadership",
      location: "New Panvel, Maharashtra",
      highlights: [
        "Led publicity and communication for a 200+ member chapter; coordinated with the core team on event support and speaker outreach.",
        "Coordinated the launch of the ByteStream magazine and the chapter's Hacktoberfest participation.",
        "Participated in the Gen AI Showdown hackathon, building and presenting an AI-powered solution under time constraints."
      ],
      technologies: ["Leadership", "Public Relations", "Event Management", "ByteStream Magazine", "Hacktoberfest"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "virality-prediction",
      title: "Social Media Virality Prediction – Multimodal Machine Learning",
      category: "AI & ML",
      tagline: "Fusion pipeline combining MobileNetV2, TF-IDF, and XGBoost (86% accuracy, 0.904 ROC-AUC)",
      description: "Engineered a multimodal machine learning pipeline combining image, text, and tabular features to accurately predict social media post virality.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "TensorFlow/Keras", "MobileNetV2", "TF-IDF"],
      keyFeatures: [
        "Extracted high-level image features using MobileNetV2 transfer learning.",
        "Vectorized textual captions and hashtags using TF-IDF feature extraction.",
        "Fused all modalities with an optimized XGBoost classifier.",
        "Achieved 86% classification accuracy and 0.904 ROC-AUC on the evaluation test set."
      ],
      awardOrHighlight: "86% Accuracy · 0.904 ROC-AUC",
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-blue-600/30 to-indigo-900/30"
    },
    {
      id: "cosmetics-intelligence",
      title: "Nykaa vs Tira vs Purplle – Market Intelligence Dashboard",
      category: "Data Analytics",
      tagline: "Cleaned 166,665 records · Power BI DAX Dashboard · Random Forest model (R² = 0.77)",
      description: "Comprehensive competitive analytics across India's top 3 beauty and cosmetics e-commerce platforms, tracking pricing strategies, discount depths, and customer behavior.",
      technologies: ["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Power Query", "DAX", "Random Forest"],
      keyFeatures: [
        "Cleaned and preprocessed 166,665 commercial product records using Python, Pandas, SQL, and Power Query.",
        "Analyzed pricing distributions, brand overlaps, discounts, and customer purchase affinities across platforms.",
        "Constructed an interactive Power BI dashboard featuring dynamic DAX KPI calculations.",
        "Trained a Random Forest regression model predicting campaign revenue lift (R² = 0.77)."
      ],
      awardOrHighlight: "166,665 Records Analyzed · R² = 0.77",
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-purple-600/30 to-pink-900/30"
    },
    {
      id: "pizza-sales",
      title: "Pizza Sales Analysis Dashboard",
      category: "Data Analytics",
      tagline: "SQL KPI queries across 50,000+ orders with dynamic Excel dashboard",
      description: "Data analytics project analyzing commercial sales trends, order velocity, and revenue drivers across a high-volume retail pizza chain.",
      technologies: ["SQL", "Microsoft Excel", "Pivot Tables", "VLOOKUP", "SUMIFS", "COUNTIFS"],
      keyFeatures: [
        "Queried 50,000+ order records with SQL to calculate total revenue, total orders, pizza volume, and average order value (AOV).",
        "Dissected order peak hours, top-selling pizza categories, and customer basket sizes.",
        "Built an interactive Excel dashboard with Pivot Tables, slicers, VLOOKUP, SUMIFS, and COUNTIFS."
      ],
      awardOrHighlight: "50,000+ Orders Processed",
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-amber-600/30 to-orange-900/30"
    },
    {
      id: "rag-assistant",
      title: "College Knowledge Assistant – RAG Document Q&A",
      category: "AI & ML",
      tagline: "Retrieval-Augmented Generation with LangChain, ChromaDB & Llama 3.2 3B Instruct",
      description: "Developed a context-grounded document question-answering assistant for collegiate handbooks and syllabi with zero hallucinations.",
      technologies: ["Python", "LangChain", "ChromaDB", "Llama 3.2 3B Instruct", "Streamlit", "Vector Embeddings"],
      keyFeatures: [
        "End-to-end RAG pipeline with PDF loading, recursive chunking, and ChromaDB vector embeddings.",
        "Fast semantic retrieval fetching context chunks based on student queries.",
        "Inference powered by Llama 3.2 3B Instruct synthesizing accurate, cited answers.",
        "Interactive Streamlit web interface supporting dynamic document uploads and Q&A."
      ],
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-cyan-600/30 to-blue-900/30"
    },
    {
      id: "gov-schemes-chatbot",
      title: "Multilingual Indian Government Schemes Chatbot",
      category: "AI & ML",
      tagline: "Flask REST API chatbot assisting citizens with welfare scheme discovery",
      description: "Chatbot designed to democratize public welfare access by categorizing government schemes and providing verified eligibility details.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "REST APIs"],
      keyFeatures: [
        "Built modular Flask backend exposing an `/api/chat` conversational endpoint.",
        "Structured scheme directory providing details on benefits, eligibility, and required documents.",
        "Responsive, accessible web frontend supporting quick inquiry flows."
      ],
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-emerald-600/30 to-teal-900/30"
    },
    {
      id: "smart-outfit-recommender",
      title: "Smart Outfit Recommender",
      category: "AI & ML",
      tagline: "Random Forest body type prediction with 94% accuracy & outfit suggestion interface",
      description: "AI-assisted fashion advisory tool that predicts body type from user measurements and suggests curated styling options.",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Web Interface"],
      keyFeatures: [
        "Trained a Random Forest classifier achieving 94% prediction accuracy on anthropometric measurements.",
        "Built a lightweight Python web interface providing personalized outfit suggestions.",
        "Integrated rule-based style mapping matching body silhouettes with clothing cuts."
      ],
      awardOrHighlight: "94% Model Accuracy",
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-rose-600/30 to-indigo-900/30"
    },
    {
      id: "customer-retention",
      title: "Indian E-Commerce Customer Behavior & Retention Analysis",
      category: "Data Analytics",
      tagline: "Chi-Square tests, PCA dimension reduction & hyperparameter-tuned XGBoost",
      description: "Exploratory and predictive analysis investigating customer retention drivers and purchase churn across Indian online retail.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "PCA", "Statistical Tests"],
      keyFeatures: [
        "Analyzed survey data across 269 respondents and 71 behavioral attributes.",
        "Conducted Chi-Square hypothesis testing and Random Forest feature importance scoring.",
        "Applied PCA to reduce feature space to 29 principal dimensions while preserving variance.",
        "Tuned XGBoost classifier delivering optimal retention classification performance."
      ],
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-teal-600/30 to-cyan-900/30"
    },
    {
      id: "lets-shyp",
      title: "Let’s Shyp – Logistics Booking Flow",
      category: "Web & Mobile",
      tagline: "5-stage guided booking wizard with real-time recalculation & state persistence",
      description: "Fluid modern logistics booking web application with dynamic cargo price estimation and persistent wizard state.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "State Persistence"],
      keyFeatures: [
        "5-stage guided booking wizard with step validation.",
        "Real-time dynamic price recalculation reflecting cargo weight, dimensions, and transit urgency.",
        "State persistence across steps ensuring seamless completion."
      ],
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-indigo-600/30 to-blue-900/30"
    },
    {
      id: "tracify-android",
      title: "Tracify – Native Android Tracking App",
      category: "Web & Mobile",
      tagline: "Native mobile shipment tracking with real-time status rendering",
      description: "Native Android application built with Java and XML for tracking live package movements and dispatch updates.",
      technologies: ["Java", "Android SDK", "XML", "Mobile UI"],
      keyFeatures: [
        "Native Android UI with dynamic status card rendering.",
        "Clean shipment timeline and milestone tracker.",
        "Lightweight architecture optimized for smooth mobile performance."
      ],
      githubUrl: "https://github.com/Palak2508",
      imageAccent: "from-blue-600/30 to-slate-900/30"
    }
  ] as Project[],

  certifications: [
    {
      title: "Microsoft Learn: Power BI Fundamentals",
      issuer: "Microsoft",
      date: "Certified",
      category: "Data Analytics",
      badge: "Microsoft Certified"
    },
    {
      title: "Microsoft Learn: Data Analytics Achievement",
      issuer: "Microsoft",
      date: "Certified",
      category: "Data Analytics",
      badge: "Microsoft Achievement"
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Technical Certification",
      date: "Completed",
      category: "Computer Science",
      badge: "Algorithms"
    },
    {
      title: "Generative AI",
      issuer: "Simplilearn",
      date: "Certified",
      category: "Artificial Intelligence",
      badge: "GenAI"
    },
    {
      title: "Spoken Tutorial (C++, Java, PHP, SQL, Python)",
      issuer: "IIT Bombay",
      date: "Certified",
      category: "Programming & Systems",
      badge: "IIT Bombay"
    }
  ],

  achievements: [
    {
      title: "Academic Excellence: 8.6 CGPA",
      organization: "Pillai College of Engineering, University of Mumbai",
      date: "2023 – Present (Expected 2027)",
      description: "Consistent high academic standing in Information Technology with specialized coursework in Machine Learning, Computer Vision, and Software Engineering.",
      icon: "GraduationCap",
      badge: "Top Academic Tier"
    },
    {
      title: "Joint Public Relations (Publicity) Head",
      organization: "Computer Society of India (CSI)",
      date: "Collegiate Leadership",
      description: "Led publicity and external outreach for 200+ member chapter; coordinated the launch of ByteStream magazine and Hacktoberfest participation.",
      icon: "Users",
      badge: "Chapter Leadership"
    },
    {
      title: "Gen AI Showdown Hackathon Participant",
      organization: "CSI / Collegiate Innovation",
      date: "Hackathon Event",
      description: "Engineered and presented an AI-powered solution under strict time constraints, showcasing rapid prototyping and model deployment.",
      icon: "Trophy",
      badge: "Hackathon"
    },
    {
      title: "166,665+ Commercial Records Analyzed",
      organization: "Market Intelligence Project",
      date: "Data Analytics Milestone",
      description: "Built end-to-end DAX Power BI dashboard and Random Forest regression model (R² = 0.77) analyzing multi-platform beauty e-commerce trends.",
      icon: "LineChart",
      badge: "Analytics Impact"
    }
  ] as AchievementItem[]
};
