---
layout: page
title: Projects
permalink: /projects/
---
#### **[VisionFireandSafety.com](https://visionfireandsafety.com/)**
I led the redesign and development of a minimalist, purpose-driven website for a small business, balancing functionality and user experience. Built using **Laravel**, **HTML**, **JavaScript**, and **Tailwind CSS**, the project involved securing a new domain, crafting custom designs and assets, and programming the site from the ground up. I implemented a CI/CD pipeline to streamline deployments for both development and production environments, and the site is hosted on Azure for reliability and scalability.

The website is fully mobile-friendly and adapts to light or dark mode based on the user’s system preferences, ensuring a seamless user experience across devices. Hosting the site on Azure with Laravel presented unique challenges. I had to configure a special Nginx command on the server to ensure proper functionality and troubleshoot issues caused by Laravel's built-in logging system, which impacted site performance. Despite these hurdles, I successfully deployed the website and continue to provide ongoing maintenance and support to keep it operational and up-to-date. 

[Read about the time it crashed!](https://breader1.github.io/development/2025/01/05/when-500-haunts-your-dreams.html)



---
#### **Moodzic**
Moodzic is an AI-powered text-to-audio full-stack web application that I developed with a team of three during our Internet Software Architecture course. The project was built using **Node.js**, **HTML**, **CSS**, and a bit of **Python** to run our AI model, `MusicGen`. Notably, we didn’t use any frameworks (no Express!), which made the experience both challenging and insightful—though I never want to work without Express again!

I took on significant responsibilities in this project, including managing the repository, setting up CI/CD pipelines, and designing and implementing the **API gateway** and **backend database**. One of the biggest challenges me and my team faced was the compute time of the AI model, which took over **five minutes** to generate an audio file from a text prompt. This wasn't acceptable, and hosting the model on a cloud service with a GPU was EXPENSIVE!

To solve this, I configured the AI model to run on my gaming PC and hosted it as a service, enabling our API gateway to route HTTP requests from the frontend directly to the AI. Leveraging the CUDA cores on my GPU, I reduced the compute time from **5.5 minutes to just 40 seconds**, achieving a 94% improvement in performance!

Unfortunately we could only host the client and API until the end of the semester because it was costing too much, so the application is no longer live. However, you can [check out the GitHub repository here](https://github.com/breader1/COMP4537_Moodzic)!

---
#### **Dynamite Goaltending**
This is a personal project I'm currently building for a friend who is a goaltending coach. The project is a static website built using React and TypeScript, and it will serve as a platform for my friend to share his coaching philosophy, services, and contact information with potential clients. I'm also integrating a scheduling system to allow clients to book appointments directly through the site, which will help streamline the booking process and improve the overall user experience.

It's currently in development, but once it's finished I'll host it and provide a link to it here. Be sure to check back soon!

---

More note worthy projects to come - Stay Tuned!




