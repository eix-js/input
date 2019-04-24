import { KeyboardEvent } from "../src/keyboard/KeyboardEvent"

// set the global document object
function setDocument(newDocument: object) {
    //@ts-ignore
    global.document = newDocument
}

describe("Test KeyboardEvent", () => {
    // set empty document with just an event handler
    setDocument({
        addListener: (_ev: string, _cb: () => void) => { },
        removeListener: (_ev: string, _cb: () => void) => { },
    })
    it("should be able to be created with no arguments", () => {
        new KeyboardEvent()
    })
})