---
layout: post
title: "The 500 Error That Haunted My Dreams"
categories: Development
---
During the summer of 2024, I had the incredible opportunity to work for a small business, Vision Fire and Safety, and completely rebuild their website from the ground up. It was an amazing experience that taught me a lot about real-world web development—far beyond the cookie-cutter projects tailored for students in a school environment.

#### **Delivering on Time and Earning Client Trust**

I managed to finish the project and deliver it to the client on time. They were happy with the final product, which meant the world to me—especially as a student at the time. After finalizing everything, I reassured them that they could reach out to me if anything went wrong or if they needed help, as they didn’t have an IT team or developers on staff. Thankfully, the rest of the summer went by smoothly without any issues.

#### **Returning to School and Shifting Focus**

In September, I turned my focus back to school and, to be honest, forgot about the website. It was working as far as I knew, and I had no reason to think otherwise—after all, why would it break? My final semester was challenging, with three web courses introducing new languages and frameworks. It was tough to keep up, and with midterms approaching, my focus was completely on school.

#### **Midterm Interruptions**

Midterm week arrived, and I was already stressed out. I had just finished my second of six exams when I received an email from Vision Fire and Safety letting me know their website wasn’t working. To their credit, they understood I was in the middle of exams and graciously offered to wait until they were over. While I appreciated their thoughtfulness, I couldn’t leave them hanging for that long.

#### **The Hunt for the 500 Error**

I opened my laptop and started investigating. The site was throwing a 500 error—a vague and frustrating issue that could mean anything. After ruling out changes to the code (nothing had been pushed to the repo), I noticed errors related to logging in Laravel, which had been fine during the initial deployment. I was stumped.

Through some research, I discovered that Azure, the hosting service, had recently changed its deployment process. All web applications were now being deployed directly from a `.zip` file. This streamlined the deployment process but introduced a problem: Laravel’s logging system requires write permissions to append to its log file, and files deployed from a `.zip` are read-only by default. Suddenly, everything clicked—the change in Azure’s process was causing the 500 error!

#### **Implementing the Fix**

Now that I knew the cause, I had to figure out the solution. Since I couldn’t change Azure’s deployment process, I modified the CI/CD pipeline workflow. Instead of zipping the files, I adjusted the workflow to deploy them in their original format. This ensured the files had read/write permissions, resolving the issue. The trade-off was a slightly slower deployment process, but it was a small price to pay for a functional website.

I updated the workflow file, pushed the changes to the repo, and watched the deployment process. It worked! The website was back online, and I could finally sleep.

#### **Lessons Learned**

Fixing a real 500 error—not a classroom scenario—was both nerve-wracking and rewarding. Knowing that a business relied on me to resolve the issue added pressure, but it also motivated me to find a solution. This experience taught me valuable lessons about debugging, real-world deployment pipelines, and dealing with unexpected challenges. Now, if I ever face this issue again, I know exactly where to start.

Looking back, this was more than just a technical challenge—it was a chance to grow as a developer and deliver a solution that truly mattered.

