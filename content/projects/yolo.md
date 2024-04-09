+++
authors = ["Ziheng Chen"]
title = "Self-supervised and transfer learning, object detection"
date = "2023-04-04"
tags = [
    "python", "pytorch", "numpy", "machine-learning", "deep-learning", "neural-networks", "computer-vision",
    "matplotlib"
]
+++
![yolo](/images/projects/cs444-mp3.png#center)


[Source (GitHub)](https://github.com/zihengjackchen/CS444-Deep-Learning/tree/main/assignment3%20-%20Self-supervised%20and%20transfer%20learning%2C%20object%20detection)

[Results](https://github.com/zihengjackchen/CS444-Deep-Learning/blob/main/assignment3%20-%20Self-supervised%20and%20transfer%20learning%2C%20object%20detection/zihengc2_yutongz7_mp3_report.pdf)

- Implemented a self-supervised learning model on CIFAR10 using PyTorch, achieving a test accuracy of 78% for rotation prediction
- Conducted fine-tuning experiments, comparing performance between initializing from the rotation model and random weights, targeting a test set accuracy of 60%
- Trained a full ResNet18 model on supervised CIFAR10 classification, reaching an expected accuracy of 80%
- Explored advanced models and replicated a plot demonstrating the benefits of pre-training on the Rotation task with limited labeled data
- Implemented a YOLO-like object detector on the PASCAL VOC 2007 dataset, leveraging a pre-trained DetNet-inspired network structure
- Achieved objectives in line with optimal accuracy while minimizing computational expense