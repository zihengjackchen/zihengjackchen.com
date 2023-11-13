+++
authors = ["Ziheng Chen"]
title = "Addressing the Insufficiencies in CARLA Simulator"
date = "2023-05-11"
description = "Senior Thesis"
tags = [
    "python",
    "carla",
    "autonomous-vehicles",
    "dependable-systems",
    "pandas"
]
aliases = ["thesis"]
+++

![orig fric - clear_sunset_icy_70_ghost_cutin](/images/projects/thesis1.gif)
![reduced fric - clear_sunset_icy_70_ghost_cutin](/images/projects/thesis2.gif)

[GitHub](https://github.com/zihengjackchen/CARLA-Modified-Pipeline/tree/master)

#### Abstract
Despite the constant refinement of autonomous vehicles (AVs), their safety remains a critical issue.
Many autonomous vehicle systems are developed with the help of simulations since computer simulation is a cheap and straightforward approach to generating valuable datasets. Furthermore, as a validation method, simulation-based benchmarks are widely used to determine the performance of
autonomous models. In addition, AV research was also commonly conducted on computer hardware with simulation tools for its advantages. However, as we discover in this work, state-of-the-art AV simulators, such as CARLA, still fail to simulate the key aspects that can affect the AV's safety,
especially under adverse weather conditions., which might produce suboptimally trained systems. Simulation tools possess innate disadvantages such as incomplete physics simulation and lack of weather-specific effect in rendered camera images, which can lead to a discrepancy between simulation
and the real world. Due to the discrepancy, the simulator often underrepresents driving challenges in real life, especially under complex physics, limited lighting, and emergency scenarios. Therefore, the simulation can fundamentally limit the accuracy and safety of trained algorithms because of the inaccurate generated data. Therefore, this thesis aims to provide augmentation solutions to make the CARLA Simulator more accurately represent the real world:
1. This thesis introduces friction to actor vehicles in rainy and icy scenarios.
2. This thesis will compare the effectiveness of the above modifications by comparing the
behaviors of the vehicle with and without modifications and other metrics.
3. Our evaluation shows that in the worst case, compared to the existing CARLA implementation,
the accident rate could rise from 49% to 98% with our modifications with adverse scenarios,
leading to a wholly different yet perilous trajectory from a designed scenario.
As a result, this thesis aims to push better and more accurate open-sourced simulation tools that spark
further safer AV research.

#### Contributions
- Researched potential unrealistic vehicle behavior in rare cases in CARLA simulator
- Improved the friction model of vehicles as a function of weather according to previous literature in CARLA
- Generated and analyzed over 8,000 vehicle traces in varying rainy conditions, creating up to 66% more accidents


#### [Result](https://github.com/zihengjackchen/CARLA-Modified-Pipeline/blob/master/(ECE499)%20Deliverables/Thesis.pdf)