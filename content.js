// 网站的全部文字都在这里。修改引号里的内容即可，保留引号、逗号和括号。
// 正文里的链接写成 [文字](网址)，加粗写成 **文字**。
window.siteContent = {
  name: "Wanglin He",
  tagline: "M.S. Student in Mechanical Engineering · Columbia University",
  location: "New York, NY",
  portrait: "images/portrait.jpg",

  // icon 可选：email、github、linkedin、cv、scholar
  links: [
    { label: "Email", url: "mailto:wh2629@columbia.edu", icon: "email" },
    { label: "GitHub", url: "https://github.com/Wanglin-He", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/wanglin-he-786077383/", icon: "linkedin" },
    { label: "CV", url: "cv.pdf", icon: "cv" }
  ],

  bio: [
    "I am a master’s student in Mechanical Engineering at [Columbia University](https://www.columbia.edu). My interests span robot hardware design and robot learning, with a focus on vision-language-action (VLA) models and world models.",
    "At the [Creative Machines Lab](https://www.creativemachineslab.com), supervised by [Prof. Hod Lipson](https://www.hodlipson.com), I develop the control system and simulation for self-reproducing modular robots. I am also building a benchmark with researchers at MIT and HKUST that tests how VLA models hold up under visual occlusion and long-horizon manipulation.",
    "I am a Teaching Assistant for Robotic Studio (MECE 4611) at Columbia. Before Columbia, I received my B.Eng. in Mechanical Engineering from [Shanghai University of Engineering Science](https://www.sues.edu.cn), where I designed robots for the RoboMaster University Competition.",
    "I am always happy to talk about robotics — feel free to reach out via [email](mailto:wh2629@columbia.edu)."
  ],

  // 研究方向卡片。icon 可选：wrench、bot、layers、cube、spark
  research: {
    intro: "From mechanical design to learned policies, I work on what it takes for robots to act reliably in the physical world.",
    areas: [
      {
        icon: "wrench",
        title: "Robot Hardware & Prototyping",
        text: "Mechanisms, modular robots and competition robots — from CAD and circuit boards to working prototypes."
      },
      {
        icon: "bot",
        title: "Robot Learning & VLA Models",
        text: "How vision-language-action models perform under occlusion and over long-horizon tasks, and where they fail."
      },
      {
        icon: "layers",
        title: "Simulation & Real-to-Sim",
        text: "Physics simulation in MuJoCo/MJX and Isaac Sim, and inferring simulation parameters from real robot videos."
      }
    ]
  },

  // 项目：image 是缩略图（放在 images 文件夹），status 是加粗的一行，summary 建议一到两句话
  projects: [
    {
      title: "Robustness of Vision-Language-Action Models",
      context: "With researchers at MIT and HKUST",
      status: "Ongoing · May 2026 – Present",
      summary: "An Isaac Sim benchmark for VLA models on long-horizon mug manipulation with an xArm, built to tell perception failures apart from planning and execution errors under visual occlusion.",
      image: "images/vla-manipulation.jpg",
      links: []
    },
    {
      title: "Robotic Budding: Self-Reproducing Modular Robots",
      context: "Creative Machines Lab, Columbia University · Supervised by Prof. Hod Lipson",
      status: "Ongoing · Sep 2025 – Present",
      summary: "A parent robot collects loose modules by magnetic docking, folds them into an offspring and separates from it; the offspring then moves on its own. I build the control system and the MuJoCo/MJX simulation, including a model of magnetic docking.",
      image: "images/budding-seal.jpg",
      links: [{ label: "Paper", url: "robotic-budding.pdf" }]
    },
    {
      title: "Real-to-Sim Parameter Inference from Robot Motion",
      context: "",
      status: "Ongoing · May 2026 – Present",
      summary: "A TimeSformer-based model watches eight frames of a voxel robot’s motion cycle and predicts its physical and actuation parameters, which are then re-simulated for comparison with the real video. Across four real recordings, the actuation frequency error is 0.8–2.5%.",
      image: "images/real2sim.jpg",
      links: []
    }
  ],

  // 论文：authors 里用 **名字** 加粗自己；highlight 可写获奖信息（红色显示），没有就留空
  publications: [
    {
      title: "Robotic Budding: From Homogeneous Cells to Diverse Morphologies in Physical Self-Reproduction",
      authors: "**Wanglin He**, Siyuan Zhang, Junyan Liu",
      venue: "IROS 2026 Workshop",
      highlight: "",
      image: "images/budding-trilobite.jpg",
      links: [
        { label: "OpenReview", url: "https://openreview.net/forum?id=2dITymcecM" },
        { label: "PDF", url: "robotic-budding.pdf" }
      ]
    },
    {
      title: "Mechanical Training Arm to Assist in Fracture Rehabilitation",
      authors: "C. Sun, **W. He**, H. Wen",
      venue: "International Journal of Technical & Scientific Research Engineering, 2023",
      highlight: "",
      image: "",
      links: [{ label: "Paper", url: "https://www.ijtsre.org/papers/2023/ev6c3/IJT-44712288.pdf" }]
    }
  ],

  // 以下三个板块是两列表格：label 是左边粗体，text 是右边说明
  education: [
    { label: "Columbia University", text: "M.S. in Mechanical Engineering, 2025 – present" },
    { label: "Shanghai University of Engineering Science", text: "B.Eng. in Mechanical Engineering, 2020 – 2024" }
  ],

  experience: [
    { label: "Columbia University, 2026 –", text: "Graduate Teaching Assistant, MECE 4611 Robotic Studio" },
    { label: "Creative Machines Lab, 2025 –", text: "Graduate Researcher, supervised by Prof. Hod Lipson" },
    { label: "RoboMaster, 2022 – 2024", text: "Mechanical & Hardware Engineer for the SUES team — turret and chassis of the Hero robot" }
  ],

  honors: [
    { label: "Shanghai, 2024", text: "Outstanding Graduate of Shanghai" },
    { label: "SUES", text: "Outstanding Student Scholarship, 2nd and 3rd Prize" }
  ],

  updated: "October 2026"
};
