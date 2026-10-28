export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build intelligent systems that turn complex data into actionable insights.",
    description: "A LITTLE ABOUT ME",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Python, PyTorch, TensorFlow, FastAPI, Docker & more",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Exploring the intersection of Machine Learning, Generative AI and real-world engineering.",
    description: "WHAT DRIVES ME",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building Luna, an AI-powered women's health platform.",
    description: "CURRENTLY WORKING ON",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's build something impactful together.",
    description: "LET'S CONNECT",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Luna — AI-Powered Women's Health",
    des: "Developing an AI health platform with LSTM cycle prediction, Random Forest phase classification, anomaly detection and a PubMed-grounded RAG assistant.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "GenAI Earth Resource Monitor",
    des: "Fine-tuned SegFormer for satellite imagery segmentation with 94% accuracy, combined with LSTM forecasting and GenAI-powered environmental risk reporting.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Aircraft Predictive Maintenance",
    des: "Built an aircraft component risk prediction system combining XGBoost and LSTM for 92% F1-score and an 18% reduction in false negatives.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    name: "Amazon HackOn",
    title: "Ranked among the Top 50 coders",
  },
  {
    name: "HackWithMAIT",
    title: "Secured 3rd place",
  },
  {
    name: "SheBuilds",
    title: "Top 10 teams — All India Women's Hackathon",
  },

]; 

export const companies = [
  {
    id: 1,
    name: "Amazon HackOn",
    description: "Ranked among the Top 50 coders",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "HackWithMAIT",
    description: "Secured 3rd place",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "SheBuilds",
    description: "Top 10 teams — All India Women's Hackathon",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Science Trainee — AdtCoreX",
    desc: "Building aircraft sensor data-cleaning pipelines, synthetic datasets and reliability-centered maintenance automation for aviation analytics.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Intern — Airports Authority of India",
    desc: "Developed an XGBoost + LSTM predictive maintenance pipeline with 92% F1-score and 18% fewer false negatives.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/nagpal-suhani",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/suhani-nagpal-388b68291/",
  },
];