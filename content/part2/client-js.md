# JavaScript in the Browser

Let's add some behaviour to your webpage so it actually does something useful. That's where JavaScript comes in.

## Step 1

Much like with the CSS, we need to link our new **.js** code with our web page, our **.html** file.

Add the following tags to the *bottom* of the HTML file.

```html
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<script src="app.js"></script>
```

Now whenever you refresh/load the web page, it will reference two separate JS files for the browser to download (at the end), one of which is external (3rd party) to our application. This 3rd party library called jQuery is there to make life easier. We don't **need** it, but with it we can write less code. This is why most websites use jQuery or other libraries like it.

## Step 2

The second file **app.js** needs to exist in our workspace, so let's create it just like you created **style.css** earlier.

It will be empty at first, but let's add the following code into it.

```javascript
alert('hello from the JS file');
```

Save the file and refresh the HTML file in your browser. When the page loads you should see an alert pop up that says your message.

![Alert](/assets/alert.png)

`alert` is a built in function that all browsers support, even though they may look slightly different on each browser. I'm guessing it's not your first time seeing one, so now you know how they happen.

Any time you call a function in JS you have to use parentheses `()` after it, and within the brackets you put in data that you want to give the function. Programming functions are much like math functions. They take in values and can do some crunching and give you back a computed value, or in this case, give you back some behaviour like popup that message you passed into it.

Every single predefined JavaScript function has documentation, so we can look up details about how they work. [Case in point](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

Very soon, we'll create our own function while using other functions. It's going to get a bit more real, so hold on to your suspenders!

## Step 3

**Remove the `alert` code** and let's get down to business. We want to make it so when our `<form>` is submitted (via enter key or by clicking the send button) we read the text content of the input field (with `id="message"` in the HTML file) and do something with it. For now let's just `alert` it.

```javascript
$('form').on('submit',function () {
  var text = $('#message').val();
  alert(text);
  return false;
});
```

Remember, type that out yourself. Don't copy paste it. Assuming you started and closed all the brackets, quotes, and semicolons correctly, it should add some interesting behaviour to the page. 

Save the file, and refresh the HTML page. Put some text into the second field and hit Enter or click Send. You should see it echoed back to you in an alert message. If not, review or otherwise seek help.

![Working alert](/assets/working-alert.png)

### Explanation

The code above isn't doing too much, but it does need to be reviewed before we move on.

First, we use **jQuery** using the `$` function, telling it that we want to target all `form` elements on the page. There is only one form element on the page and it is the one at the bottom which contains both input fields and the button.

Note how we don't use the `<`angle`>` brackets when targeting elements here, just like with CSS. Angle brackets are solely used to *define* tags in the HTML page.

We then call/invoke another function called `on` on that returned form element, saying that we want to be notified anytime that a very specific *event* takes place.  In this case the event we care about is `submit`.

Asking to be notified when a given event takes place and waiting for it to happen is a very popular programming paradigm called **event-driven programming**  Once the event takes place, we will be notified via our own custom function. That's right, `on` is a function that accepts another function as a parameter. Read that again. Look at the code. Remember that we pass in data into functions within the parentheses `()`. They're not on the same line, but they are there.

This part may be a bit confusing but perhaps this annotated code can help you see it better.

![Annotated code](/assets/annotated.png)

Otherwise, call over a mentor for explanation.

Inside our function, the rest of the code is indented so that we know that it is within that function, just like we nest HTML tags with indentation. Make sure your code is indented correctly because improper indentation is a big source of confusion.

This inside code is capturing the text value of the HTML element with the ID `message` and then passing it to `alert` so that we can see it.

Lastly, the `return false` is there to tell the browser to cancel the original form submission logic (which is to attempt sending the form to the server, with loading spinner and everything.) This is common practice when adding custom behaviour to forms like we are doing here.
