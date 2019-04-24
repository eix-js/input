import { KeyboardInput } from "../src/keyboard/KeyboardInput"
import { expect } from "chai"

// set the global document object
function setDocument(newDocument: object) {
    //@ts-ignore
    global.document = newDocument
}

describe("Test KeyboardInput", () => {
    // set empty document with an event handler
    const subscriptions: { [ev: string]: ((val: any) => void)[] } = {}
    setDocument({
        addListener: (ev: string, cb: (val: any) => void) => {
            if (subscriptions[ev] == undefined)
                subscriptions[ev] = []
            subscriptions[ev].push(cb)
        },
        removeListener: (ev: string, cb: (val: any) => void) => {
            subscriptions[ev].splice(subscriptions[ev].indexOf(cb), 1)
        }
    })
    function emit(ev: string, val: any) {
        if (subscriptions[ev] != undefined)
            subscriptions[ev].forEach(sub => sub(val))
    }
    function createKeyboardEvent(key: string) {
        return { bubbles: true, cancelable: true, key: key, char: key, shiftKey: false }
    }
    it("should be able to be created with no arguments", () => {
        new KeyboardInput().dispose()
    })
    // generate a random key
    const letters = "qwertyuiopasdfghjklzxcvbnm1234567890"
    const keyToPress = letters[Math.floor(Math.random() * letters.length)]
    it("should be able to be created with some arguments", () => {
        new KeyboardInput(keyToPress).dispose()
    })
})