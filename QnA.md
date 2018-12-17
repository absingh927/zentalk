> What do you think are the greatest risk areas in completing the project?
  - Depending on the technology chosen, the setup can be time consuming and architecting in a way that can be expanded on.
  - Implementing even a simple/lite version of a rich text editor in order to create articles and comments.

> What changes/additions would you make to the design?
  I think the design is a good starting point and has some of the essential elements there. I would add more spacing and background color to show greater separation of flow. So the user knows their current article, current position within the main flow of the app. I would also add the date and time articles and comments were posted so user knows the current status of the information they are seeing. 


> List a two or three features that you would consider implementing in the future that would add significant value to the project. 
  - Article and Comment time and date information as how many hours ago it was posted.
  - Trending/Featured article carousel on top
  - How long article/post will take to read
---

> Describe the major design/build decisions and why you made them.

  The framework I choose was React along with using `TypeSript` and `react-redux` for state management. I had previously worked with the all three of technologies and these are also ideal for a front end focused application. React also allows for giving the overall app a very smooth and quick feel, while `TypeScript` make you very aware of the data your are passing in your logic. Jeff Wallace and I had also talked a fair amount about using TypeScript with React so it was a good chance to demonstrate as well.

  For the architecture of the application, I tried to split each major aspect into its own feature with corresponding views, reducers, and actions, while loosely following the ducks pattern. The advantage and disadvantage of Redux is that the framework is not opinionated itself, so it really allows you design in a way that makes sense to you. However, I think feature is always the best way to go because it allows you to design a scalable solution that can also be understood easily by other developers later on. 

  To help with general styling and desinging the actual UI components, I used reactstrap, a react component library that extends the latest version of Bootstrap 4. It makes it extremely easy to implement frequently used patterns and also has great documentation.


> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

  I did not have to learn a specific framework and its hard to say how long I spent specifically debugging since coding and debugging happened simultaneously. I would say I spent approximately two days worth of time overall. The beginning was definitely a little slower as you make big architectural decisions, get started and design the overall structure of your app. 


> If you could go back and give yourself advice at the beginning of the project, what would it be?
  Make sure you can set aside a good portion of dedicated time. As its the end of the year, there is a lot going on weekdays and weekends, so it got quite hard to find a long chunk of uninterrupted time. 

> Did you learn anything new?
  Yes! I did not get a lot of time, but I did manage to write two tests for my Modal Component actions and reducer which are essential to my app.

> Do you feel that this assignment allowed you to showcase your abilities effectively?
  Yes. I really enjoyed doing this!

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
  No. None, I can think of the moment!

