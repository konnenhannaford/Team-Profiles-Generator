const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/employee.js');

describe('Employee', () => {

    it("Can make an object from the class employee",()=>{
        const employee = new Employee("Kanye",1,"kanye@gmail.com") 
        expect(typeof(employee)).toBe("object");
    })

    it("should get name",()=>{
        const name = "Kanye"
        const employee = new Employee(name)

        expect(employee.getName()).toBe(name);
    })

    it("should get id",()=>{
        const id = 1        
        const employee = new Employee("Kanye",1)
        // expect(typeof(employee.getId)).toBe("number");
        expect(employee.getId()).toBe(id);
    })


    it("should get email ()",()=>{
        const email = "kanye@gmail.com"
        const employee = new Employee("Kanye",1,email)
        expect(employee.getEmail()).toBe(email);
    })
    


})
