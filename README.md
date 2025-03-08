Name: Manpreet singh 
Student ID: 041129348 

Challenges
**News homepage**
This news homepage will be an excellent opportunity to practice your CSS Grid skills. 
There will be lots of tricky decisions to make and plenty of learning opportunities!

Name of Challenge: **Contact form**
Building accessible forms is a crucial task for front-end developers.
This challenge will help me practice building a form with several input types and validation.

![Screenshot 2025-03-07 144320](https://github.com/user-attachments/assets/9446a925-1c07-4cda-a078-80d83b7d3715)
![Screenshot 2025-03-07 144356](https://github.com/user-attachments/assets/10cfe56c-adc8-4f61-aac5-fb358ceef50c)
![Screenshot 2025-03-07 144419](https://github.com/user-attachments/assets/f876cd6e-c5ef-4931-af65-5794f43b923b)

**
Here are some challenges i have faced while coding this contact form, which i can add to our README file:**

### Challenges Faced:

1. ***Mixing HTML, CSS, and JavaScript in the Same File:* ** 
   - The JavaScript script was mistakenly placed inside the HTML structure, causing readability and maintainability issues.  
   - Solution: JavaScript was moved to an external script.js file for better organization.

2.** *Incorrect Placement of JavaScript Code:* ** 
   - The document.addEventListener("DOMContentLoaded", function () { ... }); was incorrectly placed inside the <div> container.  
   - Solution: It was moved inside a properly linked external script.js file.

3. *Form Validation and Error Handling:*  
   - Handling empty fields, unchecked radio buttons, and consent checkboxes needed proper validation.  
   - Solution: JavaScript if conditions were implemented to ensure all required fields were filled before submission.

4. *Form Submission and Reset Behavior:*  
   - After successful submission, the form needed to be reset to allow new input.  
   - Solution: Used form.reset(); to clear the form fields after submission.

5. *Styling and Layout Adjustments:*  
   - The input-group needed responsive styling for smaller screens.  
   - Solution: Used CSS media queries to ensure proper layout on mobile devices.

6. *Missing Required Attribute for Radio Buttons:*  
   - The required attribute was only on the first radio button, making validation inconsistent.  
   - Solution: Validation was added using JavaScript to check if a radio button was selected.

7. *Ensuring Accessibility and Readability:*  
   - Labels were linked to their respective input fields to improve accessibility.  
   - Solution: Used <label for="id"> to connect labels with input fields properly.

By documenting these challenges in your README file, you show problem-solving skills and help others understand potential pitfalls when working with similar code.




 **How It Works**
User fills out the form with:

First & Last Name
Email Address
Query Type (General Enquiry / Support Request)
Message
Optional consent checkbox


