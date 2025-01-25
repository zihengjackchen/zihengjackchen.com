+++
authors = ["Ziheng Chen"]
title = "Siri: LLM for Network Configuration"
date = "2023-12-15"
description = "Siri for Network Configuration"
tags = [
    "python",
    "large-language-model",
    "batfish",
    "dependable-systems",
    "network"
]
+++

# Siri for Network Configuration

[Source (GitHub)](https://github.com/zihengjackchen/LLM-Network-Configuration)  
[Presentation](https://github.com/zihengjackchen/LLM-Network-Configuration/blob/main/presentation.pdf)  
[Report](https://github.com/zihengjackchen/LLM-Network-Configuration/blob/main/report.pdf)  


#### Problem Statement
Efficiently validating and correcting network configurations is a critical aspect of ensuring the reliability and security of cloud systems. This research explores the use of GPT-4 Turbo, a state-of-the-art Large Language Model (LLM), in identifying and rectifying network configuration errors. The study evaluates its performance on 100 flawed network configuration files, revealing a success rate of 70% without contextual information, improving to 85% accuracy through in-context learning. Future research avenues, including observed hallucinations in LLM-aided validation, are also outlined.

#### Contributions
- Injected faults into network configurations based on common root causes and validated outcomes with Batfish
- Utilized `GPT-4 Turbo` to methodically detect and resolve network configuration errors, attaining a 70% accuracy rate without contextual information, and an 85% accuracy rate through in-context learning