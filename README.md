insec.js
========

A completely insecure nuisance password module for static pages.

Puts a full screen block infront of your page, which a password to matching a visible dbj1 hash will remove. Also cookies the session for convenience.

Use
---
1. Generate a **dbj1** hash of your password using an [online tool](http://www.nitrxgen.net/hashgen/), or with the included utility `node dbjhash.js <pass>`.
2. Copy contents `include.html` into the bottom of your page just before closing the `<body>` element.
3. Copy `insec.js` into your site directory
3. Edit the line: `<script>insec = new insec('',0)</script>` with your hashed password as the first argument and how long you wish to cookie the session in days as the second.

**E.g.**

```
<script>insec = new insec(402054200,1)</script>
```

 - Password `password` (hashed=402054200)
 - Expires in 1 day

[See the example](http://fgassert.github.io/insec.js/example.html) (the password is 'password')

Insecutity features
---

Ways people can get by this password module:
1. Brute force the password (compute time < 1min)
2. Manually delete the blocking <div> with developer tools
3. Sharing the password (there's only one)

