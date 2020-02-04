class ContentRevealer
{

    constructor()
    {
        this.triggers = []
        this.showFunction = (elements, trigger) => {
            elements.forEach(elt => {
                elt.style.display = ''
            })
        }
        this.hideFunction = (elements, trigger) => {
            elements.forEach(elt => {
                elt.style.display = 'none'
            })
        }
    }

    addTrigger(element)
    {
        const revealer = this
        element.addEventListener('click', function(e) {
            e.preventDefault()
            if (revealer.isRevealed(this)) {
                return
            }
            revealer.hideAllContent()
            revealer.showContent(this)
            revealer.handleTriggerElement(this)
        })

        revealer.handleTriggerElement(element)

        revealer.triggers.push(element)
    }

    isRevealed(element)
    {
        return element.dataset.revealerRevealed !== undefined
    }

    getTriggeredContent(element)
    {
        return document.querySelectorAll(element.dataset.revealerContent)
    }

    handleTriggerElement(element)
    {
        if (this.isRevealed(element)) {
            this.showContent(element)
        } else {
            this.hideContent(element)
        }
    }

    hideAllContent()
    {
        this.triggers.forEach(trigger => {
            this.hideContent(trigger)
        })
    }

    showContent(element)
    {
        if (! this.isRevealed(element)) {
            element.dataset.revealerRevealed = 1
        }
        this.showFunction(this.getTriggeredContent(element), element)
    }

    hideContent(element)
    {
        if (this.isRevealed(element)) {
            element.removeAttribute('data-revealer-revealed')
        }
        this.hideFunction(this.getTriggeredContent(element), element)
    }
}

module.exports = ContentRevealer
