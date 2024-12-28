export default class Directory {
    static Website(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    static textLogin() {
        return cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title');
    }
    static inputUsername (){
        return cy.get('[name="username"]');
    }  
    static inputPassword (){
        return cy.get('[name="password"]');
    }
    static buttonlogin(){
        return cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button');
    }
    static menuDirectory(){
        return cy.contains('a',"Directory");
    }
    static messages(){
        return cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
    }
    static inputEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }
    static clickJobTitle(){
        return cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').first().click();
    }
    static selectJobTitle(){
        return cy.get('.oxd-select-dropdown');
    }
    static clickLocation(){
        return cy.get('[class="oxd-input-group oxd-input-field-bottom-space"]').first().click();
    }
    static optionLocation(){
        return cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').last().click();
    }
    static selectLocation(){
        return cy.get ('.oxd-select-dropdown').contains('New York Sales Office').last().click();
    }
    static clickSearch(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click();
    }
    static ProfileUser(){
        return cy.get('[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card"]').should('exist').should('be.visible');
    }
}