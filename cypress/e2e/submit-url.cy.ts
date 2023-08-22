describe('Tests for submitting URL', () => {
  it('Visits the page, type url and submit the url', () => {
    const testUrl =
      'https://example.comhttps://www.figma.com/file/KU2LKy3MHxkjJ1SsmC2glQ/HRDP-Course-Providers-Design?node-id=504%3A18612&mode=dev';

    cy.visit('/');

    // Get url input and type the url
    cy.get('[data-cy="url-input"] input').type(testUrl);

    // get submit url button and click
    cy.get('[data-cy="button-submit-url"]').click();

    // Assert if section below contain url that already inputs
    cy.get('[data-cy="shorten-result"]').should('contain', testUrl);
  });
});
