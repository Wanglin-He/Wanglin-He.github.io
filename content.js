// 使用本地编辑器或直接编辑此文件。
window.siteContent = {
  "name": "Wanglin He",
  "tagline": "M.S. Student in Mechanical Engineering · Columbia University",
  "portrait": "portrait.png",
  "bio": [
    "I am a master’s student in Mechanical Engineering at Columbia University. My interests span robotic hardware design and prototyping, as well as robot learning, with a particular focus on vision-language-action models and world models.",
    "At Columbia’s Creative Machines Lab, led by Prof. Hod Lipson, I develop control systems and simulation infrastructure for self-reproducing modular robots. This work is currently under review at an IROS 2026 workshop. I am also developing a benchmark to evaluate the robustness of vision-language-action models under visual occlusion and long-horizon manipulation, in collaboration with researchers at MIT and HKUST.",
    "I also serve as a Teaching Assistant for Robotic Studio at Columbia, helping students design and build robots and apply machine learning methods, including reinforcement learning, to robotic control."
  ],
  "links": [
    {
      "label": "Email",
      "url": "mailto:wh2629@columbia.edu"
    },
    {
      "label": "GitHub",
      "url": "https://github.com/Wanglin-He"
    },
    {
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/wanglin-he-786077383/"
    },
    {
      "label": "CV",
      "url": "cv.pdf"
    }
  ],
  "projects": [
    {
      "title": "Robustness of Vision-Language-Action Models",
      "context": "Collaborative research with researchers at MIT and HKUST",
      "dates": "May 2026 – Present",
      "summary": "How can robots act reliably when visual information is incomplete and manipulation tasks unfold over multiple steps? This ongoing project aims to evaluate the robustness of vision-language-action (VLA) models under visual occlusion and long-horizon manipulation.\n\nThe experimental workflow is being developed in Isaac Sim, with current work centered on xArm-based mug manipulation. It connects camera observations, geometric reasoning, and motion planning, with checks on coordinate frames, grasp geometry, and collision representations before executing candidate motions.\n\nThe broader goal is to build reproducible evaluations that distinguish perception failures from planning and execution errors. Current efforts focus on validating the experimental infrastructure; comparative model evaluation remains a subsequent stage of the project.",
      "contribution": "",
      "tags": [
        "Robot learning",
        "Isaac Sim",
        "VLA evaluation"
      ],
      "image": "vla-manipulation.png",
      "links": []
    },
    {
      "title": "Robotic Budding: Self-Reproducing Modular Robots",
      "context": "Creative Machines Lab, Columbia University · Prof. Hod Lipson",
      "dates": "September 2025 – Present",
      "summary": "Robotic Budding explores physical self-reproduction using a single standardized robotic module. Each module combines two actuated joints, onboard power and computation, and magnetic docking interfaces, allowing the same hardware to form a three-module trilobite or a five-module seal.\n\nA parent robot collects loose modules through magnetic docking, folds the acquired modules into a three-dimensional offspring, and executes a programmed separation sequence. The parent retains its original modules, while the offspring is built entirely from the collected modules and can move independently.\n\nA browser-based interface supports human teleoperation through discrete motion commands, wireless communication, and module-status feedback. Magnetic interaction simulations model distance-dependent attraction and near-contact damping to support docking-parameter evaluation.\n\nPreliminary hardware experiments demonstrated the complete budding process once for each morphology. These demonstrations establish mechanical feasibility; autonomous collection and docking, repeated-trial evaluation, and reproduction across multiple generations remain future work.",
      "contribution": "",
      "tags": [
        "Modular robotics",
        "Physical self-reproduction",
        "MuJoCo / MJX"
      ],
      "image": "robotic-budding.png",
      "links": [
        {
          "label": "Paper PDF",
          "url": "robotic-budding.pdf"
        }
      ]
    },
    {
      "title": "Real-to-Sim Parameter Inference from Robot Motion",
      "context": "",
      "dates": "May 2026 – Present",
      "summary": "This project explores how physical and actuation parameters of voxel-based robots can be inferred directly from real-world motion videos. The goal is to connect observed behavior with a simulation model that can reproduce the robot’s motion.\n\nA TimeSformer-based model processes eight frames sampled from a single motion cycle to predict spatial parameter maps and a shared actuation frequency. The inferred parameters are then used to re-simulate the robot, allowing direct visual comparison between recorded and reconstructed motion.\n\nPreliminary real-world evaluations examine whether the predicted actuation phases match the robot’s known drive pattern. Across three videos with phase annotations, the model correctly identifies 11 of 16 cells, while frequency errors across four recordings range from approximately 0.8% to 2.5%.",
      "contribution": "",
      "tags": ["Real-to-Sim", "Visual system identification", "Video transformers"],
      "image": "real2sim-robot.png",
      "links": []
    }
  ],
  "honors": [
    {
      "title": "RoboMaster University Competition",
      "context": "Shanghai University of Engineering Science · Supervised by Prof. Chunyan Zhang",
      "dates": "March 2022 – June 2024",
      "summary": "Mechanical and electrical system design for a RoboMaster Hero robot, from its turret and firing mechanism to an omnidirectional chassis.",
      "contribution": "I led structural design, circuit-board drawing, and wiring layout using SolidWorks and Altium Designer. The chassis combined mecanum wheels with multi-stage damping, while a slip ring allowed the turret and chassis to move independently without interfering with turret circuitry.",
      "tags": [
        "Mechanical design",
        "SolidWorks",
        "Altium Designer"
      ],
      "image": "",
      "links": []
    }
  ],
  "publicationsTitle": "Publications",
  "emptyPublications": "Publication details will be added here.",
  "publications": [
    {
      "title": "Robotic Budding: From Homogeneous Cells to Diverse Morphologies in Physical Self-Reproduction",
      "authors": "Wanglin He, Siyuan Zhang, Junyan Liu",
      "venue": "",
      "summary": "",
      "links": [
        {
          "label": "Paper PDF",
          "url": "robotic-budding.pdf"
        }
      ]
    },
    {
      "title": "Mechanical Training Arm to Assist in Fracture Rehabilitation",
      "authors": "C. Sun, W. He, H. Wen",
      "venue": "International Journal of Technical & Scientific Research Engineering · 6(3), 2023",
      "summary": "",
      "links": [
        {
          "label": "Paper PDF",
          "url": "https://www.ijtsre.org/papers/2023/ev6c3/IJT-44712288.pdf"
        }
      ]
    }
  ],
  "footer": "Robot learning · Simulation · Mechanical design"
};
