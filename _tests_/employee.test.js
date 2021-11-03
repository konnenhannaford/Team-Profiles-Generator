const Employee = require('../lib/employee');

describe('Employee', () => {
    it("Can make an object from the class emploee",()=>{
        const employee = new Employee("Kanye",1,"kanye@gmail.com") 
        expect(typeof(employee)).toBe("object");
    })

    it("should get name",()=>{
        const name = "Kanye"
        const employee = new Employee("Kanye",1,name)

        expect(employee.getName()).toBe(name);
    })

    it("should get id",()=>{
        const id = 1        
        const employee = new Employee("Kanye",1)
        expect(employee.getId()).toBe(id);
    })

    it("should get email ()",()=>{
        const email = "kanye@gmail.com"
        const employee = new Employee("Kanye",1,email)
        expect(employee.getEmail()).toBe(email);
    })
    


})
