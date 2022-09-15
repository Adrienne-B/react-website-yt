# react-website-yt

## Summary
This was a personal project I wanted to do to practice on the react software. I followed a youtube video which helped me to create
a  website.

### Software used:
Visual Studio Code and react.js

### What I learn:
1. Just b/c react program says there aren't errors doesnt mean that there aren't any erros. Sometimes you have to inspect it.
2. Programs can update every few months...so I have to constantly stay up to date to put in the correct code to make things work.

#### Random Unexpected Challenges:
1. Website wouldn't display on the screen (white canvas) even when errors wasnt displayed.
2. Fontawesome link (wouldn't allow hamburger to show).
3. importing all components and pages correctly.
4.Would not deploy.

#### Solutions/solving the issue:
1. I had to update the latest version of Index.js template.
2. I had to update the latest version of App.js template from path component to exact path.
3. I had to find a better Fontawesome link to get my hamburger.

4. Had to deploy npm install gh-pages --save-dev in the terminal, 
  a.	On Package.json 
  b.	Type “homepage”:https//your github name.io”, at the very top
  c.	In the scripts section type “predeploy”:”npm run build”, and “deploy”: “gh-pages-d build” no comma at the end
  d.	Go to the terminal
  e.	On the right side of the terminal, hit the bash button, then go to the search bar and type bashSo that it uploads.
  f.	Type git status
  g.	git init
  h.	git remote add origin https://github.com/....with the name of the project,git (depends)
  i.	git add -A
  j.	git status

#### Weakness so far:
1.	Still a beginner a react (better understanding now).


##### Credited: https://www.youtube.com/watch?v=I2UBjN5ER4s&t=539s
