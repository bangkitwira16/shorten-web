describe('Tests for submitting URL', () => {
    it('Visits the page, type url and submit the url', () => {
      const testUrl =
        'localhost:4200';
  
      cy.visit('/');
  
      // Get url input and type the url
      cy.get('[data-cy="url-input"] input').type(testUrl);
  
      // get submit url button and click
      cy.get('[data-cy="button-submit-url"]').click();
  
      // Assert if section below contain url that already inputs
      cy.get('[data-cy="error-text"]').should('be.visible')
    });
  });
  