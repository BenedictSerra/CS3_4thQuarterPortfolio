# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
    **MY ANSWER:** Compared to the default static positioning, the sidebar position changed relative to its old position. By giving it different values you can see that the values you input is how much its position will move **RELATIVE** to the default
  static position. Furthermore, even though the element with relative position moved, the other elements that had static position did not fill the gap made by the element with relative position. This means the relative position does not affect other elements,
  and just goes to its position relative to its static position. It also can overlap elements, and does not push them down.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
  **MY ANSWER:** Compared to relative position, the fixed position is significantly different because elements with fixed position stay. When you scroll down, elements with fixed position will stay in the position it was intially assigned (before scrolling).
  This element is helpful for navigation bars so that navigation is easier to do, and it stays in its position as you scroll down. Regardless of its parent element, fixed positioning uses the browser screen to determine position.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.
  

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
  **MY ANSWER:** The effect of absolute positioning in the element is that it takes the element out of the normal document flow. This means that other element act as if the element wasnt there at all. This allows
  elements in absolute positioning to float over other elements.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
  **MY ANSWER:** By swapping the z-index, you can notice that when content has a higher z index than notice, it overlaps the notice, and vise-versa. This means that
  the higher the z-index the more the prioritization that element has, meaning elements with higher z indexes will be displayed in front of elements with lower z indexes.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
      **MY ANSWER:** In order to attain this position, you have to change the TOP attribute of .notice to 65px to move it down a bit, and the left to 430px to make it move more to the right.
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
      **MY ANSWER:** By changeing the position of .content to relative, you can notice it moves down at it is RELATIVE to its original position. Fixed however, allows the element to keep its positioning even while its scrolling. Fixed depends
      on the browser.
    * What do you observe on about the effect of z-index on .notice and .content boxes?
      **MY ANSWER:** I observed that the higher the z-index, the higher the prioritization, and so elements with higher z-indexes will be displayed over those with lower z-indexes.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    b. How does absolute positioning depend on its parent element?
       **MY ANSWER:** Absolute positioning depends on the positioning of its parent element. If the parent element has position: relative, then the child element (the one absolute positioning) will be positioned relative to the parent element.
       However, if the parent element has position: static, the child element will be positioned relative to the body of the document.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
       **MY ANSWER:** The main difference between sticky and fixed positioning is that fixed positioning is removed from the normal document flow while sticky is not. Fixed positioning allows the element to anchor to the view port, and it stays in its position
       even if you scroll. Sticky however, stays 

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
