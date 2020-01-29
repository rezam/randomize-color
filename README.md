# randomize-color
Randomize Color by JS

1. Include randomcolor.js in your HTML file.
2. Call the function and get the random color by <strong>randomizeColor()</strong>.
   E.X. randomizeColor() return color hex in this format: <strong>#000000</strong>.
3. Use like this to get random background color by click on the button:
```JavaScript
btnResult.addEventListener("click", function(){
	bodyStyle.style.background = randomizeColor();
})
```
