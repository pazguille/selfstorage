# Self-Storage JS

It's a client-side library for caching JavaScript resources in the localStorage. The main objective of this project is to intended to save bandwith and time. You can store any other JavaScript library from the same origin (same domain).

When a new visitor comes to your web site for the first time, you makes a request to JavaScripts resources. Then stores the resources in the localstorage and you can use it locally.

Therefore, when the visitor come back to your web site if the resources are availables locally, loads from the localstorage, saving bandwith and time.

It's [cross-browser compatible](http://caniuse.com/#search=localstorage):
- Chrome
- Firefox
- Opera
- Safari
- IE10
- IE9
- IE8
- Safari Mobile
- Android Browser
- Blackberry Browser

## Installation

	$ component install pazguille/selfstorage

See: [https://github.com/component/component](https://github.com/component/component)

## How-to
First, add the library:
```html
<script src="http://mydomain.com/build/build.js"></script>
```
Then, require the selfstorage:
```js
var selfstorage = require('selfstorage');

```
Now, starts to load and store any library! It makes a request once, then it loads from LocalStorage.
```js
selfstorage.use('http://mydomain.com/jquery.js', function () {
    // Some code here!
    // jQuery is available
});
```

## API

### selfstorage#use(url, callback)
The use(url, callback) method first checks if it is available locally. If not, it makes the request  and stores the source in the localstorage. Then, executes the given callback.

### selfstorage#get(url)
The get(url) method returns the current value associated with the given url.

### selfstorage#remove(url)
The remove(url) method deletes the url from the collection.

### selfstorage#clear()
The clear() method cleans all the cache (for that domain).

## Contact
- Guille Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
### The MIT License
Copyright (c) 2013 [@pazguille](http://twitter.com/pazguille)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.