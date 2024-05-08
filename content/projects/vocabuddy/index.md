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
- Developed a full-stack vocabulary builder app using `React.js` for the front-end and `Node.js` with `Express.js` and `MySQL` for the back-end
- Designed a data schema using a UML diagram and deployed a `MySQL` instance on `GCP` for scalable storage solutions
- Created advanced SQL queries using transactions, isolation levels, and control structures for data integrity
- Optimized database queries and implemented indexing strategies, achieving up to 300x reduction in operational costs
- Added user authentication and supported social networking features to promote daily engagement and progress tracking
- Integrated an intelligent learning progress tracking algorithm for personalized recommendations
