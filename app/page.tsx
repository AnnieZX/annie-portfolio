import { ContactActions } from "./components/ContactActions";
import { ExternalLinkIcon, GitHubIcon } from "./components/Icons";

export default function AnniePortfolio() {
  type Project = {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    github: string;
    demo?: string;
  };

  const projects: Project[] = [
    {
      title: "AI Label Verification for Remote Sensing",
      subtitle: "Research pipeline for human-in-the-loop prediction verification",
      description:
        "Designed a verification pipeline that packages overlay images, bounding boxes, masks, and local/global context for a vision-language model to flag suspicious predictions, assign review scores, and generate structured explanations for expert validation.",
      tags: ["Computer Vision", "VLMs", "Remote Sensing", "Human-in-the-Loop"],
      github: "https://github.com/AnnieZX/wild-palm-lvm-verification",
    },
    {
      title: "Pulse2Playlist",
      subtitle: "Emotion-aware music recommender from biosignals",
      description:
        "Built an end-to-end ML system using multimodal physiological signals to classify emotional state and generate personalized playlist recommendations with an interactive demo interface.",
      tags: ["Machine Learning", "Streamlit", "Recommendation Systems", "Multimodal"],
      github: "https://github.com/AnnieZX",
    },
    {
      title: "Menstrual Cycle Modeling",
      subtitle: "Temporal representation learning for personalized health modeling",
      description:
        "Exploring multimodal wearable and hormonal time-series modeling for menstrual phase classification, ovulation detection, and personalized physiological representation learning.",
      tags: ["Deep Learning", "Time Series", "Health AI", "Representation Learning"],
      github: "https://github.com/AnnieZX/mcphases-ml",
    },
  ];

  const experience = [
    {
      role: "Data Analyst Intern",
      focus: "AI & Chatbot Optimization",
      org: ["Inmar Intelligence"],
      period: "Jun 2026 – Present",
      bullets: [
        "Analyzed 355K Salesforce cases, identifying 63K+ duplicates and recommending improvements to senior leadership.",
        "Enhanced retrieval quality by standardizing and restructuring 100+ knowledge base articles for enterprise RAG workflows.",
        "Delivered weekly LLM-assisted dashboards on first response rate and intent trends, informing weekly VP-level business reviews.",
      ],
      technologies: ["Python", "SQL", "Power BI", "LLMs", "Analytics", "Healthcare AI"],
    },
    {
      role: "Research Assistant",
      org: ["IRSC Lab", "Wake Forest University"],
      period: "Jan 2026 – Present",
      bullets: [
        "Developed a model-agnostic benchmarking framework for vision-language verification of 5,700+ aerial palm detections.",
        "Implemented scalable multimodal inference pipelines using PyTorch, Hugging Face Transformers, and Slurm.",
        "Designed an automated evaluation framework with IoU-based matching and five ablation studies, achieving up to 97.6% F1.",
        "Benchmarked Qwen2.5-VL and LLaVA-OneVision for a submission to ACM SIGSPATIAL 2026.",
      ],
      technologies: [
        "PyTorch",
        "Vision-Language Models",
        "Computer Vision",
        "Transformers",
        "Slurm",
        "Remote Sensing",
      ],
    },
    {
      role: "Research Assistant",
      org: ["Data Mining Lab", "Wake Forest University"],
      period: "Apr 2024 – Aug 2025",
      bullets: [
        "Developed NLP/LLM models to predict FDA drug approval outcomes from pharmaceutical datasets.",
        "Applied feature engineering and machine learning techniques to improve predictive performance across biomedical data.",
      ],
      technologies: ["Python", "NLP", "LLMs", "Machine Learning", "scikit-learn", "Biomedical AI"],
    },
    {
      role: "Cloud Consulting Intern",
      org: ["KPMG", "Shanghai, China"],
      period: "Summer 2025",
      bullets: [
        "Benchmarked Toyota Shanghai's cloud and IT/OT architecture against leading automotive practices.",
        "Evaluated AWS, Azure, and industrial IoT technologies to support smart factory and predictive maintenance initiatives.",
        "Assessed industrial data architecture and governance for AI/ML readiness, with findings incorporated into final client deliverables for Toyota Shanghai.",
      ],
      technologies: ["AWS", "Azure", "Cloud Computing", "Industrial IoT", "Data Architecture", "AI Infrastructure"],
    },
  ];

  const skillCategories = [
    {
      name: "Relevant Coursework",
      skills: ["Machine Learning", "Deep Learning", "Statistical Learning", "Cloud Computing"],
    },
    {
      name: "Programming",
      skills: ["Python", "Java", "R", "SQL"],
    },
    {
      name: "AI & Machine Learning",
      skills: [
        "PyTorch",
        "Hugging Face Transformers",
        "LLMs",
        "Vision-Language Models",
        "Computer Vision",
        "Prompt Engineering",
        "LLM API Integration",
        "XGBoost",
        "Time-Series Modeling",
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["scikit-learn", "Pandas", "NumPy", "Streamlit"],
    },
    {
      name: "Developer Tools",
      skills: ["Git", "Linux", "Docker", "AWS", "Slurm", "REST APIs", "MySQL"],
    },
    {
      name: "Languages",
      skills: ["English", "Mandarin Chinese"],
    },
  ];

  const highlights = [
    {
      value: "40,000+",
      label: "Satellite Images Evaluated",
    },
    {
      value: "4+",
      label: "Research & Industry Experiences",
    },
  ];

  const highlightTags = [
    "Computer Vision",
    "Vision-Language Models",
    "Healthcare AI",
    "Applied Machine Learning",
  ];

  const lifeCards = [
    {
      title: "Tennis",
      icon: "🎾",
      front: "play with friends",
      back: "I like playing tennis with friends, enjoying the rhythm of the game and the simple happiness of being present in the moment.",
    },
    {
      title: "Fitness",
      icon: "🏋️",
      front: "hiit · dance · strength",
      back: "I enjoy HIIT, cardio dance, and strength training — moving, sweating, and feeling strong.",
    },
    {
      title: "Film",
      icon: "🎬",
      front: "old films & stories",
      back: "I love watching films, especially classic and old movies, getting lost in their atmosphere and quiet storytelling.",
    },
    {
      title: "Travel",
      icon: "✈️",
      front: "go anytime",
      back: "I enjoy spontaneous solo travel, the freedom of going anywhere and discovering new places at my own pace.",
    },
    {
      title: "Cooking",
      icon: "🍳",
      front: "try new recipes",
      back: "I like cooking, trying new recipes and turning everyday moments warm and meaningful.",
    },
    {
      title: "Music",
      icon: "🎧",
      front: "rap pop lofi rock",
      back: "I enjoy listening to rap, pop, lofi, and rock, letting music shape my mood and bring a quiet sense of flow into my day.",
    },
  ];

  // Lightweight dev checks to catch accidental content issues early.
  if (typeof window !== "undefined") {
    console.assert(lifeCards.length === 6, "Expected 6 Life × Tech cards.");
    console.assert(
      new Set(lifeCards.map((card) => card.title)).size === lifeCards.length,
      "Life × Tech card titles should be unique.",
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
        <nav className="fade-in-section mb-16 flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-lg font-semibold tracking-wide">Annie Luo</p>
            <p className="text-sm text-neutral-400">CS + Statistics · ML / AI / Software</p>
          </div>
          <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#about" className="nav-link hover:text-white">
              About
            </a>
            <a href="#projects" className="nav-link hover:text-white">
              Projects
            </a>
            <a href="#experience" className="nav-link hover:text-white">
              Experience
            </a>
            <a href="#contact" className="nav-link hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <section className="fade-in-section fade-in-section-delay-1 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-300">
              Portfolio Website
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              I build thoughtful AI systems that connect research, engineering, and real-world impact.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              I’m a Computer Science and Statistics student at Wake Forest University focused on machine learning,
              software engineering, and applied AI. I enjoy turning research ideas into clean pipelines, practical tools,
              and polished technical projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-interactive rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-interactive rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="card-interactive rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Focus</p>
                <p className="mt-2 text-lg font-semibold">ML + AI Systems</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Interests</p>
                <p className="mt-2 text-lg font-semibold">Research + Product</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Currently</p>
                <ul className="mt-3 space-y-2.5 text-sm leading-6 text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>
                      <span className="font-medium text-neutral-200">Data Analyst Intern</span>
                      <br />
                      Inmar Intelligence
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>
                      <span className="font-medium text-neutral-200">Research Assistant</span>
                      <br />
                      IRSC Lab
                      <br />
                      Wake Forest University
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>
                      <span className="font-medium text-neutral-200">Building</span>
                      <br />
                      Vision-Language Verification Systems
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>
                      <span className="font-medium text-neutral-200">Looking For</span>
                      <br />
                      ML Engineering
                      <br />
                      Software Engineering
                      <br />
                      Applied AI
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="fade-in-section mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">About</p>
            <h2 className="mt-3 text-3xl font-semibold">A student who likes building things that actually work.</h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 leading-8 text-neutral-300">
            <p>
              I’m especially interested in machine learning systems, computer vision, NLP, and the design of useful AI tools.
              My work usually sits at the intersection of research thinking and engineering execution: defining a problem,
              designing a pipeline, debugging messy details, and turning the result into something clear and presentable.
            </p>
            <p className="mt-6">
              I enjoy turning messy research ideas into reliable engineering systems through experimentation, evaluation,
              automation, and thoughtful software design. My work often involves building reproducible pipelines, debugging
              complex workflows, and transforming research prototypes into practical AI applications.
            </p>
          </div>
        </section>

        <section className="fade-in-section fade-in-section-delay-1 mt-10">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Highlights</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card-interactive rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <p className="text-3xl font-semibold tracking-tight text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{item.label}</p>
              </div>
            ))}
            <div className="card-interactive rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:col-span-2 hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="flex flex-wrap gap-2">
                {highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="fade-in-section fade-in-section-delay-2 mt-10 grid items-stretch gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="mx-auto mt-10 flex w-full max-w-sm items-end lg:mx-0">
            <img
              src="/annie-profile.png"
              alt="Portrait of Annie Luo"
              className="h-auto w-full rounded-none shadow-none"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Life × Tech</p>
            <h2 className="mt-3 text-3xl font-semibold">A little more about me</h2>
            <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
              Outside of school and research, I enjoy staying active and keeping life balanced through the things I genuinely love.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {lifeCards.map((card) => (
                <div key={card.title} className="group [perspective:1000px]">
                  <div className="card-interactive relative min-h-[220px] rounded-2xl [transform-style:preserve-3d] group-hover:-translate-y-1 group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm [backface-visibility:hidden] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100 after:absolute after:inset-y-0 after:-left-[130%] after:w-[60%] after:rotate-12 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:opacity-0 after:transition-all after:duration-700 group-hover:after:left-[140%] group-hover:after:opacity-100">
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl leading-none drop-shadow-sm">{card.icon}</span>
                          <div className="text-lg font-semibold tracking-tight">{card.title}</div>
                        </div>
                        <div className="mt-4 flex flex-1 items-start">
                          <p className="relative z-10 max-w-[90%] text-[15px] leading-relaxed text-neutral-300">
                            {card.front}
                          </p>
                        </div>
                        <div className="pointer-events-none absolute bottom-4 right-4 text-5xl opacity-[0.08] blur-[0.3px]">
                          {card.icon}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/15 before:via-white/5 before:to-transparent before:opacity-100 after:absolute after:inset-y-0 after:-left-[130%] after:w-[60%] after:rotate-12 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:opacity-0 after:transition-all after:duration-700 group-hover:after:left-[140%] group-hover:after:opacity-100">
                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl leading-none drop-shadow-sm">{card.icon}</span>
                          <div className="text-lg font-semibold tracking-tight">{card.title}</div>
                        </div>
                        <div className="mt-4 flex-1 px-[1px]">
                          <p className="relative z-10 pr-1 text-sm leading-relaxed text-neutral-200">
                            {card.back}
                          </p>
                        </div>
                        <div className="pointer-events-none flex justify-end text-4xl opacity-[0.08]">
                          {card.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="fade-in-section mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Selected Work</p>
              <h2 className="mt-3 text-3xl font-semibold">Projects</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card-interactive group rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:-translate-y-1.5 hover:border-white/15 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-neutral-400">{project.subtitle}</p>
                  <span className="shrink-0 text-xs font-medium tracking-widest text-neutral-600 transition-colors group-hover:text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-interactive inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-interactive inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                    >
                      <ExternalLinkIcon className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="fade-in-section mt-24 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold">What I’ve worked on</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
              My experience moves across research, machine learning, and applied AI systems, with a focus on building work that feels both rigorous and useful.
            </p>
            <div className="mt-6 h-20 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
            <div className="space-y-7">
              {experience.map((item) => (
                <div key={item.period + item.org.join("-")} className="relative">
                  <div className="absolute -left-[26px] top-8 h-3 w-3 rounded-full border border-white/20 bg-neutral-950 shadow-[0_0_0_6px_rgba(255,255,255,0.02)]"></div>
                  <div className="card-interactive rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:-translate-y-1 hover:bg-white/[0.07]">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{item.period}</p>
                        <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                        {"focus" in item && item.focus ? (
                          <p className="mt-1 text-sm text-neutral-400">{item.focus}</p>
                        ) : null}
                      </div>
                      <p className="text-sm text-neutral-400 sm:pt-1 sm:text-right">
                        {item.org.map((line, index) => (
                          <span key={line}>
                            {index > 0 ? <br /> : null}
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2 leading-7 text-neutral-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-neutral-500">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in-section mt-24">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold">Tools I use</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="card-interactive rounded-[2rem] border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{category.name}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-2xl border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="fade-in-section mt-24 pb-10">
          <div className="card-interactive rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold">Let’s build something meaningful.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
              I’m interested in internships, research opportunities, and technical collaborations in machine learning,
              software engineering, and applied AI.
            </p>
            <ContactActions />
          </div>
        </section>
      </section>
    </div>
  );
}
