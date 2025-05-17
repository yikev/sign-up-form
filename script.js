let message = document.querySelector('.message');

// Add a message span

let span = document.createElement('span');
message.style.backgroundColor = 'lightgray';
span.innerHTML = 'The color we’ve chosen for the ‘Create Account’ button is similar to tones found in the background image. Specifically, it is #596D48.The inputs, by default have a very light border (#E5E7EB), but we’ve included 2 variations. For starters, the password inputs should have a red border if they contain an invalid password. This can be handled with the :invalid pseudo-class you’ve learned in the previous lesson.';

message.appendChild(span);