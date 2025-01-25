+++
authors = ["Ziheng Chen"]
title = "iPrism: Traffic Risk Assessment and Mitigation"
date = "2024-04-05"
description = "Watch Out for the Safety-Threatening Actors: Proactively Mitigating Safety Hazards"
tags = [
    "python", "subprocess", "threadpoolexecutor", 
    "CARLA",
    "autonomous-vehicles",
    "dependable-systems",
    "linux",
    "pandas",
    "reinforcement-learning",
    "large-scale-data-processing",
    "matplotlib",
    "seaborn",
    "DEPEND-Group"
]
+++

Accepted by DSN 2024: 
- [Paper](https://ieeexplore.ieee.org/abstract/document/10646631) 
- [Project Website](https://zihengjackchen.github.io/iprism-page/)  
- [Source](https://github.com/zihengjackchen/iPrism)

![Demo](/images/projects/iprism_intro.jpg#center)

- Enhanced the resiliency of AVs in unfamiliar and accident-prone scenarios with a novel traffic risk assessment method
- Validated the method by unit-testing a prototype using designed experiments in `CARLA Simulator` and Argoverse dataset, including real-world geometric and semantic metadata, lane boundaries, geometric LiDAR, and ring camera information
- Created `multi-threaded` data generation and testing pipelines and boosted efficiency by 200% using `subprocess` in Python
- Engineered a memory-efficient `ResNet` variant, reducing the footprint by 50% while achieving 95%+ testing accuracy
- Constructed 6000 scenarios from NHTSA pre-crash typologies and trained lightweight `Double DQN` Reinforcement Learning Agents in `PyTorch` to preemptively brake using the traffic risk as an indicator, reducing accidents by 72.7%
- Cleansed and statistically analyzed generated datasets using `pandas`, and visualized outcomes with seaborn and Matplotlib
