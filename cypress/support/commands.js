Cypress.Commands.add('singUp', (tipoUsuario) => {
    cy.fixture('usuario').then((data) => {
        const usuario = data[tipoUsuario]
        cy.get('#paypalAccountData_email').type(usuario.email);
        cy.get('#paypalAccountData_email').type(usuario.phoneNumber);
        cy.get('#paypalAccountData_email').type(usuario.firstname);
        cy.get('#paypalAccountData_email').type(usuario.lastName);
        cy.get('#paypalAccountData_email').type(usuario.password);
        cy.get('#paypalAccountData_email').type(usuario.confirmPassword);
        cy.get('#paypalAccountData_emailPassword').click()
    })
 })

 Cypress.Commands.add('nombreUsuario', (tipoUsuario) => {
    cy.fixture('usuario').then((data) => {
        const usuario = data[tipoUsuario]
        cy.get('#paypalAccountData_firstName').type(usuario.firstName)
        cy.get('#paypalAccountData_middleName').type(usuario.middleName)
        cy.get('#paypalAccountData_lastName').type(usuario.lastName)
        cy.get('[data-automation-id="page_submit"]').click()
        cy.get('[data-automation-id="page_submit"]').click()
    })
 })
 
 Cypress.Commands.add('celUsuario', (tipoUsuario) => {
    cy.fixture('usuario').then((data) => {
        const usuario = data[tipoUsuario]
        cy.get('#paypalAccountData_phone').type(usuario.phoneNumber)
        cy.get('#paypalAccountData_submit').click()
    })
 })
 
 Cypress.Commands.add('emailUsuario', (tipoUsuario) => {
    cy.fixture('usuario').then((data) => {
        const usuario = data[tipoUsuario]
        cy.get('#paypalAccountData_email').type(usuario.email)
        cy.get('#paypalAccountData_submit').click()
    })
 })

 Cypress.Commands.add('passwordUsuario', (tipoUsuario) => {
    cy.fixture('usuario').then((data) => {
        const usuario = data[tipoUsuario]
        cy.get('#paypalAccountData_password').type(usuario.password)
        cy.get('#paypalAccountData_submit').click()
    })
 }) 
 
 Cypress.Commands.add('ccFecha', (tipoUsuario) => {
    cy.fixture('usuario').then((data) => {
        const usuario = data[tipoUsuario]
        cy.get('#paypalAccountData_identificationNum').type(usuario.cc)
        cy.get('#paypalAccountData_dob').type(usuario.fecha)
        cy.get('[data-automation-id="page_submit"]').click()
    })
 })
 
 Cypress.Commands.add('direccion', (tipoUsuario) => {
    cy.fixture('usuario').then((data) => {
        const usuario = data[tipoUsuario]
        cy.get('#paypalAccountData_address1_0').type(usuario.direccion1)
        cy.wait(2000)
        cy.get('#paypalAccountData_address1_0').type('{enter}')

        cy.get('#paypalAccountData_address2_0').type(`${usuario.direccion2}{enter}`)
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check({ force: true }) // Marca el checkbox aunque esté oculto
        cy.get('[data-automation-id="page_submit"]').click()
    })
 })


