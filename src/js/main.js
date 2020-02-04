let addInstancesProto = require('@pierreminiggio/add-instance-proto')
const ContentRevealerInstance = require('./ContentRevealer')
console.log(require('./ContentRevealer'))

let ContentRevealerSingleton = (function () {
    let buildInstance = function () {

        this.load = function (querySelector = '.content-revealer') {
            let singleton = this

            document.querySelectorAll(querySelector).forEach(elt => {
                if (elt.dataset.loaded === undefined) {
                    elt.dataset.loaded = 1
                    let target = elt.dataset.revealerContent
                    let group = elt.dataset.revealerGroup !== undefined ? elt.dataset.revealerGroup : 1

                    if (singleton.loadedInstances[group] === undefined) {
                        singleton.loadedInstances[group] = new ContentRevealerInstance()
                    }
                    
                    console.log(singleton.loadedInstances)
                }
            })
        }
    }

    let instance = null
    return new function () {
        this.getInstance = function () {
            if (instance == null) {
                instance = new buildInstance()
                instance.buildInstance = null
            }
            return instance
        }
    }
})()

let ContentRevealer = ContentRevealerSingleton.getInstance()
addInstancesProto(ContentRevealer)

module.exports = ContentRevealer
