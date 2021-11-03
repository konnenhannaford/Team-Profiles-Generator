const Intern = require('../lib/intern');

describe('Intern', () => {
    it("Accesses users School info",()=>{
        const school = "Kanyes Uni" 
        const Intern = new Intern ("Kanye",1,"kanye@gmail.com", school) 
        expect(Intern.school).toBe(school);
    })

    it("should get role ()",()=>{
        const role = "Intern"
        const Intern = new Intern ("Kanye",1,role)
        expect(Intern.getRole()).toBe(role);
    })

})
