describe('HelloWorld Component', () => {
    it('renders the correct message', () => {
      cy.visit('/')
      cy.contains('new message')
    })
  })
  