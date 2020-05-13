const enhancer = require('./enhancer.js');
// test away!
describe("enhancer unit tests", () => {
    it("repairs", () => {
        expect(enhancer.repair({name:"item", durability:20}).toBe({name:"item", durability:100}))
    })
})