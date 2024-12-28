/// <reference types="cypress"/>
import loginPage from "../../../POM/orangeHRM/Export/ExportLoginPage";

describe('Login Feature',() => {
  it('User Login dengan username dan password yang benar',() => {
      loginPage.website();
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername().type('Admin'); // Username yang benar
      loginPage.inputPassword().type('admin123'); //Password yang benar
      cy.intercept("GET","**/employees/action-summary").as("actionSummary"); // Action Summary
      loginPage.buttonLogin().click();
      cy.wait('@actionSummary').then((intercept)=>{
          expect(intercept.response.statusCode).to.equal(200)}
      );
      loginPage.menuDashboard().should('have.text','Dashboard')
  });
            //   it('User Login dengan username dan password yang benar',() => {
            //     loginPage.website();
            //     loginPage.textLogin().should('have.text','Login');
            //     loginPage.inputUsername().type('Admin'); // Username yang benar
            //     loginPage.inputPassword().type('admin123'); //Password yang benar
            //     cy.intercept("GET","**/dashboard/shortcuts").as("shortcuts"); // Shortcuts
            //     loginPage.buttonLogin().click();
            //     cy.wait('@shortcuts').then((intercept)=>{
            //       expect(intercept.response.statusCode).to.equal(200)}
            //       );
            //     loginPage.menuDashboard().should('have.text','Dashboard')
            //   }); 
            //   it('User Login dengan username dan password yang benar',() => {
            //     loginPage.website();
            //     loginPage.textLogin().should('have.text','Login');
            //     loginPage.inputUsername().type('Admin'); // Username yang benar
            //     loginPage.inputPassword().type('admin123'); //Password yang benar
            //     cy.intercept("GET","**/employees/subunit").as("subunit"); // Subunit
            //     loginPage.buttonLogin().click();
            //     cy.wait('@subunit').then((intercept)=>{
            //        expect(intercept.response.statusCode).to.equal(200)}
            //        );
            //     loginPage.menuDashboard().should('have.text','Dashboard')
            //   }); 
            //   it('User Login dengan username dan password yang benar',() => {
            //     loginPage.website();
            //     loginPage.textLogin().should('have.text','Login');
            //     loginPage.inputUsername().type('Admin'); // Username yang benar
            //     loginPage.inputPassword().type('admin123'); //Password yang benar
            //     cy.intercept("GET","**/employees/locations").as("locations"); // Locations
            //     loginPage.buttonLogin().click();
            //     cy.wait('@locations').then((intercept)=>{
            //        expect(intercept.response.statusCode).to.equal(200)}
            //        );
            //     loginPage.menuDashboard().should('have.text','Dashboard')
            //   }); 
  it('User Login dengan Username and Password yang salah', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername().type('AdminB');  // Username yang salah
      loginPage.inputPassword().type('admin113');  // Password yang salah
      cy.intercept("GET","**/i18n/messages").as("messages");
      loginPage.buttonLogin().click();
      cy.wait('@messages').then((intercept)=>{
        expect(intercept.response.statusCode).to.equal(304)}
        );
      loginPage.invalidcredentials().should('have.text','Invalid credentials'); 
  });
  it('User Login dengan Password yang salah', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername().type('Admin');  // Username yang benar
      loginPage.inputPassword().type('admin113');  // Password yang salah
      cy.intercept("GET","**/i18n/messages").as("messages");
      loginPage.buttonLogin().click();
      cy.wait('@messages').then((intercept)=>{
        expect(intercept.response.statusCode).to.equal(304)}
        );
      loginPage.invalidcredentials().should('have.text','Invalid credentials'); 
  });
  it('User Login dengan Username yang salah', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername().type('AdminB');  // Username yang salah
      loginPage.inputPassword().type('admin123');  // Password yang benar
      cy.intercept("GET","**/i18n/messages").as("messages");
      loginPage.buttonLogin().click();
      cy.wait('@messages').then((intercept)=>{
        expect(intercept.response.statusCode).to.equal(304)}
        );
      loginPage.invalidcredentials().should('have.text','Invalid credentials');
  });
  it('User Login tanpa memasukkan username and password', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername(); // Biarkan kolom username kosong
      loginPage.inputPassword(); // Biarkan kolom password kosong
      loginPage.buttonLogin().click();
      loginPage.required().should('have.text','RequiredRequired');
  });
  it('User Login dengan username kosong dan password benar', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername(); // Biarkan kolom username kosong
      loginPage.inputPassword().type('admin123');  // password yang benar
      loginPage.buttonLogin().click();
      loginPage.required().should('have.text','Required'); 
  });
  it('User Login dengan username benar dan password kosong', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername().type('Admin');  // Username yang benar
      loginPage.inputPassword(); // Biarkan kolom password kosong
      loginPage.buttonLogin().click();
      loginPage.required().should('have.text','Required');
  });
  it('User Login dengan username salah dan password kosong', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername().type('AdminB');  // Username yang salah
      loginPage.inputPassword(); // Biarkan kolom password kosong
      loginPage.buttonLogin().click();
      loginPage.required().should('have.text','Required');
  });
  it('User Login dengan username kosong dan password salah', () => {
      loginPage.website();
      loginPage.textLogin().should('be.visible');
      loginPage.inputUsername(); // Biarkan kolom username kosong
      loginPage.inputPassword().type('admin113');  // password yang salah
      loginPage.buttonLogin().click();
      loginPage.required().should('have.text','Required'); 
  });
})