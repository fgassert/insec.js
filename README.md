insec.js
========

A completely insecure nuisance password module for static pages.


Use
---
Generate a **dbj1** hash of your password using an [online tool](http://www.nitrxgen.net/hashgen/), or with `node dbjhash.js <pass>`.

Copy contents `include.html` into the bottom of your page just before closing the `<body>` element.

Edit the line:

```
<script>insec = new insec('',0)</script>
```

with your hashed password as the first argument and how long you wish to cookie the session in days as the second.

**E.g.**

```
<script>insec = new insec(402054200,1)</script>
```

 - Password `password`
 - Expires in 1 day
