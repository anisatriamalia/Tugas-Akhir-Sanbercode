/// <reference types="cypress"/>
import ForgotPassword from "../../../POM/orangeHRM/Export/ExportForgotPassword";

describe('Forgot Your Password Feature', () => {
        beforeEach(() => {
          ForgotPassword.website();
        });
        it('User berhasil reset password dengan username benar', () => {
          ForgotPassword.forgotyourPassword().should('be.visible');
          ForgotPassword.forgotyourPassword().click();
          ForgotPassword.url().should('include', '/requestPasswordResetCode'); 
          ForgotPassword.h6().should('contain.text', 'Reset Password');
          ForgotPassword.inputUsername().type('Admin');
          cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
          ForgotPassword.buttonforgotPassword().click();
          cy.wait('@requestResetPassword').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(302)}
    );
          ForgotPassword.messages().should('have.text','Reset Password link sent successfully')
        });
        it('User berhasil reset password dengan username berbeda', () => {
          ForgotPassword.forgotyourPassword().should('be.visible');
          ForgotPassword.forgotyourPassword().click();
          ForgotPassword.url().should('include', '/requestPasswordResetCode'); 
          ForgotPassword.h6().should('contain.text', 'Reset Password'); 
          ForgotPassword.inputUsername().type('AdminB');
          cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
          ForgotPassword.buttonforgotPassword().click();
          cy.wait('@requestResetPassword').then((intercept)=>{
              expect(intercept.response.statusCode).to.equal(302)}
      );
          ForgotPassword.messages().should('have.text','Reset Password link sent successfully')
        });
      it('Users tidak berhasil Reset Password tanpa Username', () => {
          ForgotPassword.forgotyourPassword().should('be.visible');
          ForgotPassword.forgotyourPassword().click();
          ForgotPassword.url().should('include', '/requestPasswordResetCode');
          ForgotPassword.h6().should('contain.text', 'Reset Password');
          ForgotPassword.inputUsername();
          ForgotPassword.buttonforgotPassword().click();
          ForgotPassword.required().should('have.text','Required'); 
        })
})
            