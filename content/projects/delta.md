+++
authors = ["Ziheng Chen"]
title = "Delta Supercomputer GPU Analysis"
date = "2024-11-28"
description = "Delta Supercomputer GPU Analysis"
tags = [
    "python", "subprocess", "threadpoolexecutor", 
    "CARLA",
    "supercomputer",
    "dependable-systems",
    "linux",
    "large-scale-data-processing",
    "matplotlib",
    "seaborn",
    "DEPEND-Group"
]
+++

- Pre-processed 6B+ lines of Delta Supercomputer system logs, removing duplicates and high noise with error coalescing and keyword matching
- Boosted processing speed by 100x using Hyperscan and Python multiprocessing for efficient error extraction and analysis
- Analyzed GPU failure modes for AI workloads, studying error distribution, causality, and concurrence for NVLink and memory errors, and assessed user application impact
- Investigated error persistence and recovery paths based on NVIDIA Ampere architecture, extracting actionable insights for system reliability