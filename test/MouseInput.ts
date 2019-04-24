import { MouseInput } from "../src/mouse/MouseInput"
import { expect } from "chai"

describe("Test MouseInput", () => {
    it("should create a singleton instance", () => {
        new MouseInput()
    })
    it("should create identical singletons", () => {
        const mouseInput1 = new MouseInput()
        const mouseInput2 = new MouseInput()
        expect(mouseInput1).to.deep.equal(mouseInput2)
    })
})