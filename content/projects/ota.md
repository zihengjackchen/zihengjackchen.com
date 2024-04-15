+++
authors = ["Ziheng Chen"]
title = "OTA: Out-of-Distribution Testing"
date = "2024-04-05"
description = "Out-of-Distribution Testing Framework for Autonomous Vehicles"
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
[Project Website](https://zihengjackchen.github.io/AV-webpages/OTA/)   
[Source (work in progress)](https://github.com/zihengjackchen/OTA)   

#### Problem Statement
In the rapidly advancing field of autonomous vehicle (AV) technology, ensuring the safety and reliability of these systems is paramount. Traditional AV datasets provide a wealth of scenarios for training and testing AV systems under normal conditions, but they fall short when it comes to out-of-distribution (OOD) scenarios—situations that the vehicle might never have encountered during training but could potentially face on the road.

This project introduces a robust OOD Data Generation Pipeline specifically designed for CARLA, an open-source simulator for autonomous driving research. Our pipeline focuses on systematically generating and modifying safety-critical scenarios provided by the National Highway Traffic Safety Administration (NHTSA) to include OOD conditions. This allows us to explore the limits of AV systems in a controlled yet challenging environment.


#### Contributions
- Created 6 safety-critical scenarios following 80% of crash typologies from NHTSA
