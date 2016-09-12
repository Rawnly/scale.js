# Classes V2
__A new better version full recoded of [classes.css]('https://github.com/Rawnly/Classes.css')__



Classes is just a simple stylesheet who helps you to **center** and **stylize** your page content

Download
--------
You can get **Classes.css** downloading latest varsion on [GitHub page](http://github.com/Rawnly/V2Classes.css/)
or include this **CDN**

```html
    <link rel="stylesheet" href="https://rawgit.com/Rawnly/V2Classes.css/master/css/classes.css" >
```

Usage
=====

Centering
-----------
Centering an object into a page is always a necessity, so i think this can be useful, a class named `.centered-page`. So i'm not good to write explanations so let's see exaples:

**Code:**
```html
  <!-- index.html -->
  ...
  <div class="page-centered">
    <p>This text is `relative` centered in the page</p>
  </div>
```
---

Font
-----------

You can also quickly change the **font weight**  and **font family**  and the **font size** directly from your <code>html</code>

| Font Weights | Classes  | Font Families | Classes |
| :----------: | ------ | :-----------: | ----- |
| **800** | `superbold` | **Roboto** | `roboto` |
| **700** | `boldest`   | **Bitter** | `bitter` |
| **600** | `bolder`    |  **Oswald** | `oswald` |
| **500** | `bold`      |  **Roboto Slab** | `roboto-slab` |
| **400** | `normal`    |  **Muli** | `muli` |
| **300** | `thin`      |  **Indie Flower** | `indie-flower` |
| **200** | `thinner`   |  **Lobster** | `lobster` |
| **100** | `thinnest`  |  **Josefin Sans** | `josefin-sans` |
|||  **Satisfy** | `satisfy` |
|||  **Courgette** | `courgette` |
|||  **Bungee** | `bungee` |

**Example**
```html
  <!-- your-page.html -->
  <h1 class="font oswald bold">
    Awsome <!-- font-width:500; font-family:'Oswald'; -->
  </h1>
```
[**> Example Fonts Styles <**](http://coloraiz.webe.io/classes/)

With Classes the page class has `16px` of font-size by default, so you can manipulate it with `xSize` class

**MAYBE THIS WILL BE REPLACED WITH --[Scale.js](http://github.com/rawnly/scale.js)--**

| Class | Size (in px) | Size (in %) |
| --- | :---: | :---:     |
| `.x1` |  20px | 125%    |
| `.x2` |  35px | 218.75% |
| `.x3` |  50px | 312.5%  |
| `.x4` |  65px | 406.25% |
| `.x5` |  80px | 500%    |
| `.x6` |  95px | 593.75% |

**Example**
```html
<!-- your-page.html -->
<h1 class="font x1">
  Awsome <!-- font-size:125%; -->
</h1>
```

Also i added the `text-align`, `link formattations` and `text-decoration`:

**Text Align**
----
Is so simple you just add (always with the `font` class) and the align class who can be:

* `left`
* `center`
* `right`
* `justify`

**Link Formattation**
---
* `.clear` for no text-decoration
* `.dark` for light background
* `.light` for dark background
* `.an` for underline animation

**Text Decoration**
----
Like *Text Align* (always with the `font` class):

* `.overline` for *overline* text-decoration
* `.underline` for *underline* text-decoration
* `.strike` for *line-trought* text-decoration

-----
Other
---

- Made with an **awsome** text editor : [Atom](http://www.atom.io) | [GitHub](http://github.com/atom/atom)

- All my projects [here](http://webeproject.github.io/webe.io/)
