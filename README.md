[CUSTOMIZATION_GUIDE.md](https://github.com/user-attachments/files/25405001/CUSTOMIZATION_GUIDE.md)
# Ibis Academy - Customization Guide

Welcome to your new Ibis Academy app! Here's how to customize the lessons and add your own content.

## What's New

✅ Rebranded as "Ibis Academy" with flamingo logo 🦩  
✅ Learn/Practice toggle on dashboard  
✅ 9 lesson templates across 3 topics (Algebra, Geometry, Trigonometry)  
✅ Beautiful lesson viewer with examples and tips  
✅ Easy-to-edit lesson structure  

## How to Edit Lessons

All lesson content is stored in the `app.js` file in the `lessons` object (starting around line 30).

### Lesson Structure

Each lesson has:
- **title**: The lesson name
- **subtitle**: Brief description
- **level**: 'Beginner', 'Intermediate', or 'Advanced'
- **sections**: Array of content sections

### Section Types

**1. Text Section**
```javascript
{
    type: 'text',
    content: '<h3>Your Heading</h3><p>Your paragraph text here.</p>'
}
```

**2. Example Section** (highlighted in blue)
```javascript
{
    type: 'example',
    title: 'Example 1: Title Here',
    content: '<p><strong>Problem:</strong> Your problem text</p><p><strong>Solution:</strong> Step-by-step solution</p>'
}
```

**3. Tips Section** (highlighted in yellow)
```javascript
{
    type: 'tips',
    content: '<h4>💡 Key Tips:</h4><ul><li>Tip 1</li><li>Tip 2</li></ul>'
}
```

### Adding a New Lesson

1. Open `app.js` in your text editor
2. Find the `lessons` object
3. Add your lesson to the appropriate topic:

```javascript
'your-lesson-id': {
    title: 'Your Lesson Title',
    subtitle: 'Brief description of the lesson',
    level: 'Beginner',
    sections: [
        {
            type: 'text',
            content: '<h3>Introduction</h3><p>Your intro text...</p>'
        },
        {
            type: 'example',
            title: 'Example 1',
            content: '<p>Your example...</p>'
        },
        {
            type: 'tips',
            content: '<h4>💡 Tips:</h4><ul><li>Tip 1</li><li>Tip 2</li></ul>'
        }
    ]
}
```

4. Add the lesson card to `index.html`:

Find the appropriate topic section and add:
```html
<div class="lesson-card" onclick="openLesson('topic-name', 'your-lesson-id')">
    <h4>Your Lesson Title</h4>
    <p>Brief description</p>
    <span class="lesson-badge">Beginner</span>
</div>
```

## Example: Creating a New Algebra Lesson

Let's add a lesson on "Solving Systems of Equations":

**Step 1: Add to app.js**

In the `algebra` section of the `lessons` object:

```javascript
'systems-equations': {
    title: 'Systems of Equations',
    subtitle: 'Solve two equations with two variables',
    level: 'Intermediate',
    sections: [
        {
            type: 'text',
            content: '<h3>What is a System of Equations?</h3><p>A system of equations is a set of two or more equations with the same variables. We need to find values that satisfy all equations simultaneously.</p>'
        },
        {
            type: 'text',
            content: '<h3>Methods for Solving</h3><ul><li><strong>Substitution:</strong> Solve one equation for a variable, then substitute</li><li><strong>Elimination:</strong> Add or subtract equations to eliminate a variable</li><li><strong>Graphing:</strong> Find where the lines intersect</li></ul>'
        },
        {
            type: 'example',
            title: 'Example: Substitution Method',
            content: '<p><strong>Solve:</strong><br>y = 2x + 1<br>3x + y = 11</p><p><strong>Step 1:</strong> Substitute y = 2x + 1 into the second equation<br>3x + (2x + 1) = 11<br>5x + 1 = 11</p><p><strong>Step 2:</strong> Solve for x<br>5x = 10<br>x = 2</p><p><strong>Step 3:</strong> Find y<br>y = 2(2) + 1 = 5</p><p><strong>Answer:</strong> x = 2, y = 5</p>'
        },
        {
            type: 'tips',
            content: '<h4>💡 Quick Tips:</h4><ul><li>Use substitution when one equation is already solved for a variable</li><li>Use elimination when coefficients are similar</li><li>Always check your solution in both equations</li></ul>'
        }
    ]
}
```

**Step 2: Add to index.html**

Find the Algebra lessons section and add:

```html
<div class="lesson-card" onclick="openLesson('algebra', 'systems-equations')">
    <h4>Systems of Equations</h4>
    <p>Solve two equations with two variables</p>
    <span class="lesson-badge">Intermediate</span>
</div>
```

## Tips for Writing Good Lessons

1. **Start Simple**: Begin with basic concepts before advanced ones
2. **Use Examples**: Show worked examples for every concept
3. **Break It Down**: Use step-by-step solutions
4. **Add Visuals**: Use emojis and formatting to make content engaging
5. **Include Tips**: Add practical tips and common mistakes to avoid

## HTML Formatting in Lessons

You can use these HTML tags in lesson content:

- `<h3>`, `<h4>` - Headings
- `<p>` - Paragraphs
- `<strong>` - Bold text
- `<em>` - Italic text
- `<ul>` and `<li>` - Bullet lists
- `<br>` - Line break

Example:
```html
'<p>The formula is <strong>a² + b² = c²</strong></p>'
```

## Updating Your App

After editing lessons:

1. Save your changes to `app.js` and `index.html`
2. Deploy to Firebase:
   ```bash
   cd ~/firebase-auth-app
   firebase deploy
   ```
3. Hard refresh your browser (Ctrl+Shift+R)

## Need More Topics?

To add a completely new topic (like "Calculus"):

1. Add a new section to the `lessons` object in `app.js`
2. Add topic cards to both Learn and Practice views in `index.html`
3. Update the styling if needed in `style.css`

## Getting Help

If you run into issues:
- Check the browser console (F12) for errors
- Make sure all quotes and brackets are properly closed
- Verify that lesson IDs match between `app.js` and `index.html`

Happy teaching! 🦩📚
