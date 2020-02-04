const ContentRevealer = require('./main.js')
ContentRevealer.load()

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