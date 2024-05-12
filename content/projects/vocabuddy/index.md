+++
authors = ["Ziheng Chen"]
title = "Vocabuddy: Vocabulary Builder Application"
date = "2024-05-05"
tags = [
    "javascript", "typescript", "react", "mysql", "ci-cd", "node.js", "rest-api", "backend", "frontend", "google-cloud-platform", "web-development"
]

aliases = ["vocabuddy"]
+++


# Vocabuddy: Vocabulary Builder Application

[Source (GitHub)](https://github.com/zihengjackchen/Vocabuddy)  


#### Introduction

Vocabuddy is a web-based application designed for students preparing for standardized tests like the ACT, SAT, and GRE. With a streamlined, browser-accessible interface, it offers comprehensive vocabulary training through interactive exercises, quizzes, and study tools tailored to each test's unique requirements. 

Vocabuddy tracks vocabulary progress in real time, providing insights into word mastery, and fosters a collaborative environment where users can share progress and challenge each other with GRE quizzes. By leveraging search algorithms, it offers personalized vocabulary recommendations based on study history, ensuring learners focus on relevant words for their exams. Vocabuddy aims to make GRE verbal preparation engaging, manageable, and effective.


#### Demo
{{< video src="not_logged_in">}}  
User can searh for words, check school detail, and check site statistics when nog logged in.

{{< video src="logged_in">}}  
User can study words and check their own progress when logged in.

#### Contributions
- Developed a vocabulary builder app with progress tracking and social networking features to promote daily engagement
- Used `React.js` (front-end), with `Express` and `Node.js` (back-end APIs), and a `MySQL` database, entirely hosted on `GCP`
- Researched and selected optimal data sources for vocabulary content and designed a normalized `MySQL` database schema
- Reduced operational costs of advanced `SQL` queries by up to 300x through strategic indexing of database tables
- Developed an intelligent algorithm for tracking learning progress, providing personalized content recommendations to users
