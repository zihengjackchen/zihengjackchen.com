+++
authors = ["Ziheng Chen"]
title = "ODAF: Out-of-Distribution Detection and Fallback for AV"
date = "2024-05-06"
description = ""
tags = [
    "python", 
    "CARLA",
    "autonomous-vehicles",
    "pytorch",
    "Machine Learning",
    "Autoencoder"
]
+++

# ODAF: Out-of-Distribution Detection and Fallback for AV

[Source (GitHub)](https://github.com/zihengjackchen/OOD-Detection-and-Fallback-for-AV)  
[Presentation](https://github.com/zihengjackchen/OOD-Detection-and-Fallback-for-AV/blob/main/deliverables/ECE%20542%20Final%20Project.pdf)  
[Report](https://github.com/zihengjackchen/OOD-Detection-and-Fallback-for-AV/blob/main/deliverables/Out-of-Distribution%20Detection%20and%20Fallback%20for%20Autonomous%20Vehicles.pdf)  

#### Problem Statement
Handling out-of-distribution (OOD) scenarios remains a challenge in autonomous vehicles as more safety-related issues emerge. In the field of machine learning, OOD cases occur when a learned model encounters input that is not included in training, potentially resulting in decision-making failures. These OOD situations can manifest in various ways, but this project focuses specifically on OOD scenarios involving varying weather conditions that affect adverse weather, which can significantly distort visual inputs and sensor data. As the industry shifts towards end-to-end vision-based autonomous driving that increasingly relies on visual data, robust handling of OOD input becomes crucial. Current learning-based approaches to OOD detection, like RIP, are limited in their robustness and interpretability. Thus, our project aims to implement a statistical analysis to first detect OOD and then enable the fallback mode that encourages safer driving behaviors. We introduce three weather modifications that inject up to 100% more accidents and 50% change in vehicle route among all weathers on the baseline autonomous driving agent. We also proposed two OOD detection methods that can detect OOD with an accuracy of up to 92%. Finally, we achieved up to 50% reduction in collision score and 46% in route-change proportion with modified weather by enabling the fallback mode to promote safer driving actions when OOD is detected using our method.

### Example
![orig](/images/projects/ODAF_orig.png#center)
![rainy](/images/projects/ODAF_rainy_250.png#center)
![hazy](/images/projects/ODAF_hazy_150.png#center)
![shady](/images/projects/ODAF_shady_0.5.png#center)  
Some example images that provide a clear comparison of the modifications, showing visual impact to various degrees. *Top to bottom: original, rain, haze, shade.*

#### Contributions
1. Improved the safety of autonomous vehicles by designing and testing the out-of-distribution (OOD) detection method and fallback mode
2. Introduced three distinct weather modifications that resulted in up to 100% more accident cases, thoroughly testing the detection algorithm's accuracy and fallback mode
3. Integrated Python-based OOD detection algorithms using mahanalobis distance and autoencoders in `PyTorch` and fallback protocols into the CARLA simulation pipeline to ensure robust end-to-end vision-based driving
4. Designed and conducted experiments that revealed a 92% OOD detection accuracy, reducing collision scores by up to 50% and route-change proportions by 46% during adverse weather conditions