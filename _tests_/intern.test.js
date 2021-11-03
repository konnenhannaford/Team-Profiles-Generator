const Intern = require('../lib/intern.js');

describe('Intern', () => {
    it("Accesses users School info",()=>{
        const school = "Kanyes Uni" 
        const intern = new Intern ("Kanye",1,"kanye@gmail.com", school) 
        expect(intern.school).toBe(school);
    })

    it("should get role ()",()=>{
        const role = "Intern"
        const intern = new Intern ("Kanye",1,role)
        expect(intern.getRole()).toBe(role);
    })

})
