export default class ForgotPassword {
    static website(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static forgotyourPassword(){
        return cy.contains('Forgot your password?')
    }
    static url(){
        return cy.url()
    }
    static h6 (){
        return  cy.get('h6')
    }
    static buttonforgotPassword (){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]')
    }
    static messages(){
        return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]')
    }
    static required(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
    }
}