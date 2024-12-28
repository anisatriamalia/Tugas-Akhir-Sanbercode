import Directory from "../../../POM/orangeHRM/Export/ExportDirectory";

    describe('Search Directory Feature',()=>{
        beforeEach(()=>{
            Directory.Website();
    })
        it('Berhasil masuk ke menu Directory', ()=>{
            Directory.textLogin().should('have.text','Login');
            Directory.inputUsername().type('Admin');
            Directory.inputPassword().type('admin123');
            cy.intercept("GET","**/directory/employees?limit=14&offset=0").as('employees?limit=14&offset=0');
            Directory.buttonlogin().click();
            Directory.menuDirectory().click();
            cy.wait('@employees?limit=14&offset=0').then((intercept)=>{
                expect(intercept.response.statusCode).to.equal(200);});
            Directory.messages().should('have.text','Directory');
        });
        it('Berhasil mencari data dengan complete data', ()=>{
            Directory.textLogin().should('have.text','Login');
            Directory.inputUsername().type('Admin');
            Directory.inputPassword().type('admin123')
            Directory.buttonlogin().click();
            Directory.menuDirectory().click();
            Directory.inputEmployeeName().type('Peter');
            cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
            Directory.clickJobTitle();
            Directory.selectJobTitle().contains('Chief Financial Officer').first().click();
            Directory.clickLocation();
            Directory.optionLocation();
            Directory.selectLocation();
            cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=2&empNumber=3&jobTitleId=2').as('directorySearchRequest');
            Directory.clickSearch();
            cy.wait('@directorySearchRequest').then((intercept)=>{
                expect(intercept.response.statusCode).to.equal(200);});
            Directory.ProfileUser();
        });
        it('Berhasil mencari Employee dengan Input Username and select Job Title', ()=>{
            Directory.textLogin().should('have.text','Login');
            Directory.inputUsername().type('Admin');
            Directory.inputPassword().type('admin123')
            Directory.buttonlogin().click();
            Directory.menuDirectory().click();
            Directory.inputEmployeeName().type('Peter');
            cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
            Directory.clickJobTitle();
            Directory.selectJobTitle().contains('Chief Financial Officer').first().click();
            cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=3&jobTitleId=2').as('directorySearchRequest');
            Directory.clickSearch();
            cy.wait('@directorySearchRequest').then((intercept)=>{
                expect(intercept.response.statusCode).to.equal(200);});
            Directory.ProfileUser();
        });
        it('Berhasil mencari Employee dengan Input Username and select Location', ()=>{
            Directory.textLogin().should('have.text','Login');
            Directory.inputUsername().type('Admin');
            Directory.inputPassword().type('admin123')
            Directory.buttonlogin().click();
            Directory.menuDirectory().click();
            Directory.inputEmployeeName().type('Peter');
            cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
            Directory.clickLocation();
            Directory.optionLocation();
            Directory.selectLocation();
            cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=2&empNumber=3').as('directorySearchRequest');
            Directory.clickSearch();
            cy.wait('@directorySearchRequest').then((intercept)=>{
                expect(intercept.response.statusCode).to.equal(200);});
            Directory.ProfileUser();
        });
        it('Berhasil mencari data menggunakan Employee Name', ()=>{
            Directory.textLogin().should('have.text','Login');
            Directory.inputUsername().type('Admin');
            Directory.inputPassword().type('admin123');
            Directory.buttonlogin().click();
            Directory.menuDirectory().click();
            Directory.inputEmployeeName().type('Peter');
            cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').click();
            cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=3').as('directorySearchRequest');
            Directory.clickSearch();
            cy.wait('@directorySearchRequest').then((intercept)=>{
                expect(intercept.response.statusCode).to.equal(200);});
            Directory.ProfileUser();
        });
})