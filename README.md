Simple Content Revealer

Installation :
```
npm install pierreminiggio/content-revealer
```

Utilisation : 
```javascript
const ContentRevealer = require('@pierreminiggio/content-revealer')
```

```html
<a
    href="javascript:;"
    class="content-revealer"
    data-revealer-content="#groupOneContent1"
    data-revealer-revealed
>Trigger 1</a>
<a
    href="javascript:;"
    class="content-revealer"
    data-revealer-content="#groupOneContent2"
>Trigger 2</a>
<a
    href="javascript:;"
    class="content-revealer"
    data-revealer-content="#groupOneContentThree"
>Trigger 3</a>
<div id="groupOneContent1">Content 1</div>
<div id="groupOneContent2">Content 2</div>
<div id="groupOneContentThree">Content 3</div>
```

Tu peux appliquer ce que tu veux comme style ou animation pour l'état affiché et caché, exemple ici je change juste la couleur : 
```javascript
ContentRevealer.load('.custom-revealer', {
    showFunction: (elements, trigger) => {
        elements.forEach(elt => {
            elt.style.color = 'green'
        })
        trigger.style.color = 'blue'
    },
    hideFunction: (elements, trigger) => {
        elements.forEach(elt => {
            elt.style.color = 'red'
        })
        trigger.style.color = 'orange'
    }
})
```