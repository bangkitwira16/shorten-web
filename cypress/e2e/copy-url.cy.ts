describe('Tests for copying URL', () => {
    it('Visits the page, type url and submit the url then copy the URL', () => {
      const testUrl =
        'https://example.comhttps://www.figma.com/file/KU2LKy3MHxkjJ1SsmC2glQ/HRDP-Course-Providers-Design?node-id=504%3A18612&mode=dev';
  
      cy.visit('/');
  
      // Get url input and type the url
      cy.get('[data-cy="url-input"] input').type(testUrl);
  
      // get submit url button and click
      cy.get('[data-cy="button-submit-url"]').click();
  
      // get copy button and click
      cy.get('[data-cy="copy-button"]').click()

      // Assert that button text to be Copied
      cy.get('[data-cy="copy-button"] button').contains('Copied')
    });
  });
  