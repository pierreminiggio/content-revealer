let addInstancesProto = require('@pierreminiggio/add-instance-proto')

let ContentRevealerSingleton = (function () {
    let buildInstance = function () {

        this.load = function (querySelector = '.content-revealer') {
            let singleton = this

            document.querySelectorAll(querySelector).forEach(elt => {
                if (elt.dataset.loaded === undefined) {
                    elt.dataset.loaded = 1
                    let target = elt.dataset.revealerContent
                    let group = elt.dataset.revealerGroup !== undefined ? elt.dataset.revealerGroup : 1

                    // On repère un objet via son id, s'il n'en a pas on lui donne un prefix et un numéro
                    //let identifier = singleton.createInstanceIdentifier(elt)

                    singleton.loadedInstances[identifier] = elt
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
