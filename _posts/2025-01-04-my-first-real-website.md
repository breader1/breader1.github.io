---
layout: post
title: "My First 'Real' Website"
categories: Development
---
[**Check out the website!**](https://visionfireandsafety.com/)

### **The Starry-Eyed Student**
Going into summer break before my final semester of school, I had an incredible opportunity to help a small business with a complete overhaul of their company website. Vision Fire and Safety, knowing about my studies, wanted to give me a chance to put my new skills into practice for a real-world client. I jumped at the chance to work with them over the summer.

The website they had was… outdated, to say the least. We’re talking about a 15-year-old, single-page site with over 3,000 words crammed onto it. It wasn’t scrollable, had a bright red background with off-white text, and was plastered with newspaper-style fire hydrant clip art. It was a spectacle, to say the least!

This situation actually worked in my favor—anything I changed would be an automatic improvement. That said, I wanted to go beyond the bare minimum and follow the best practices I’d learned in class to deliver a website Vision Fire and Safety would be proud of.

---

### **What to Do...?**
As I started working on the website, it hit me: this wasn’t just another school assignment. It was a real-world website, and a company was relying on me to bridge the gap between their business and their clients. There were no pre-made templates or step-by-step instructions to follow. It was up to me to figure everything out.

The freedom to choose my tech stack was both exciting and overwhelming. What do I pick? I’d recently learned Laravel and PHP, so I decided to go with those. But before I could start coding, I needed to figure out where to host the site. The old site was hosted on GoDaddy, which didn’t support the technologies I wanted to use. I chose Azure because of its seamless integration with GitHub repos, making it easy to set up CI/CD pipelines. After linking the custom domain from GoDaddy and using a special Nginx command my professor had shown us, I was ready to get started.

---

### **Time to Design**
A friend from school expressed interest in helping me with the project, so we collaborated on the design together. Design wasn’t exactly our strong suit—we were more comfortable working on the backend in class. Thankfully, the client wanted a simple, minimalist website, which aligned well with our skills. 

We used a combination of designer AI tools and research, surveying other fire protection companies’ websites for inspiration and common design patterns. After a few iterations and discussions with the client, we finalized a layout and were ready to start coding.

Initially, we planned to use Laravel with PHP, but my friend suggested trying **Tailwind CSS**, a technology we hadn’t yet used in class. Switching to **HTML**, **Tailwind CSS**, and a bit of **JavaScript** simplified our workflow significantly, and we were off to the races.

---

### **Time to Code**
With the layout finalized, we quickly got to work. Using Laravel’s built-in routing, we set up site navigation. We designed the site with a mobile-first approach since most of Vision Fire and Safety’s clients access the site from their phones. We also added support for light and dark mode based on the user’s system preferences—a feature we were particularly proud of.

To enhance the site further, we pitched the idea of adding Google Maps integration to show the business’s location. The client loved the idea, so we set up an account and implemented the Google Maps API into the footer. It turned out great and added a nice touch to the overall design.

---

### **What I Learned**
This project was an incredible learning experience. I gained hands-on knowledge in:
- Task management and planning
- Setting up a custom domain and hosting a Laravel project on Azure
- Using Tailwind CSS
- Communicating with clients, especially when iterating on designs
- Integrating light and dark mode based on system preferences
- Maintaining and monitoring a live website

Overall, it was a simple project, but it was done well. By following the processes I learned in class, I was able to plan, collaborate with a client, and deliver a product they were happy with. That was an amazing feeling. Today, I continue to monitor and maintain the Vision Fire and Safety website, ensuring it stays up-to-date and functional.

