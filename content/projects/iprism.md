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

![Demo](/images/projects/dsn2024.gif#center)
![Demo](/images/projects/dsn2024_realworld.gif#center)

[Project Website](https://zihengjackchen.github.io/AV-webpages/iprism/)  

*Paper accepted by DSN 2024*

*Artifact submitted to DSN committee. [Source (work in progress)](https://github.com/zihengjackchen/iPrism)*

#### Problem Statement
In complex and dynamic real-world situations involving multiple actors, ensuring safety is a significant challenge. This complexity often leads to severe accidents. The current techniques for mitigating safety hazards are not effective because they do not guarantee accessible escape routes and do not specifically address actors contributing to hazards. As a result, these techniques may not provide timely responses. 

To overcome these limitations, we propose a new measure called the safety-threat indicator (STI). This metric helps identify crucial actors by incorporating defensive driving techniques through counterfactual reasoning. We utilize STI to analyze real-world datasets, revealing inherent biases towards safe scenarios. Additionally, we employ it to develop a hazard mitigation policy using reinforcement learning. 

Our approach demonstrates a substantial reduction in the accident rate for advanced autonomous vehicle agents in rare hazardous scenarios—up to a 77% improvement over current state-of-the-art methods. 


#### Contributions
- Enhanced the resiliency of AVs in unfamiliar and accident-prone scenarios with a novel traffic risk assessment method
- Validated the method by unit-testing a prototype using designed experiments in `CARLA Simulator` and Argoverse dataset, including real-world geometric and semantic metadata, lane boundaries, geometric LiDAR, and ring camera information
- Created `multi-threaded` data generation and testing pipelines and boosted efficiency by 200% using `subprocess` in Python
- Engineered a memory-efficient `ResNet` variant, reducing the footprint by 50% while achieving 95%+ testing accuracy
- Constructed 6000 scenarios from NHTSA pre-crash typologies and trained lightweight `Double DQN` Reinforcement Learning Agents in `PyTorch` to preemptively brake using the traffic risk as an indicator, reducing accidents by 72.7%
- Cleansed and statistically analyzed generated datasets using `pandas`, and visualized outcomes with seaborn and Matplotlib
