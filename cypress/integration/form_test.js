describe('Lambda Eats app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity check to make sure our tests work', () => {
        expect( 1 + 1 ).to.equal(2)
        expect( 1 + 1 ).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    const submitButton = () => cy.get('#submitOrder')
    const nameInput = () => cy.get('input[name=name]');
    const sizeDropdown = () => cy.get('select[name=size]')
    const toppings = ['pepperoni', 'sausage', 'mushroom',
        'olive', 'greenPepper', 'bacon', 'chicken', 
        'anchovy'].map(topping => {
            return () => cy.get(`input[name=${topping}]`)
        })
    const instructionInput = () => cy.get('input[name=instructions]')
    
    


    describe('mvp tests', () => {
        it('can type a name', () => {
            nameInput()
                .type("Test U. Ser")
                .should('have.value', 'Test U. Ser')
        })

        it('can select and unselect multiple toppings', () => {
            toppings.forEach(topping => topping().click())
            toppings.forEach(topping => topping().click())
        })

        it('can fill form and submit', () => {
            submitButton().should('be.disabled')
            nameInput()
                .type("Test U. Ser")
                .should('have.value', 'Test U. Ser')
            sizeDropdown()
                .select('XL')
                .should('have.value', 'XL')
            toppings.forEach(topping => topping().click())
            instructionInput().type('Good Job on these tests!')
            submitButton()
                .should('be.enabled')
                .click()
            cy.contains('Order Summary')
        })
    })
})