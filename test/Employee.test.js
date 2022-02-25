const Employee = require("../lib/Employee");
//employeeinstance test
describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
//name test= alice
    it("Can set name via constructor arguments", () => {
        const name = "Alice";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
//id test = 100
    it("Can set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });
// e-mail test = test@test.com
    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });
// get name test
    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Alice";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
// get id test
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
// get email test
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
// get role test
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Alice", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});