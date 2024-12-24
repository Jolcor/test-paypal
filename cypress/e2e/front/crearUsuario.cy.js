describe('verificando funcionamiento del login' , () => {

    beforeEach('varidando la pagina de registro', () => {
        cy.visit('/us/welcome/signup/#/country_selection')

        cy.intercept('POST', '/ruta/donde/carga/captcha', { forceNetworkError: true }).as('captchaRequest')
    })

    it('debera crear usuario informacion correcta', () => {
        cy.get('#paypalAccountData_submit').click()

        cy.emailUsuario('NuevoUsuarioValido')
        cy.celUsuario('NuevoUsuarioValido')

        cy.get('.pp-cons-47p392-modal_contents-text_body-modal_content_sheet-modal_content_with_header')
            .should('exist')
            .then(($modal) => $modal.is(':visible') && cy.pause())
        
        
        cy.passwordUsuario('NuevoUsuarioValido')
        cy.nombreUsuario('NuevoUsuarioValido')

        cy.ccFecha('NuevoUsuarioValido')
        cy.direccion('NuevoUsuarioValido')

        cy.get('#paypalAccountData_intentSelectionHeading > .inherit_stylesV2').should('be.visible')
    })

    it('deberia enviar un mensaje de error de correo invalido', () => {
        cy.get('#paypalAccountData_submit').click()
        cy.emailUsuario('NuevoUsuarioInvalido')

        cy.get('li > .inherit_stylesV2').should('have.text' , 'Ingresa una dirección de correo electrónico válida.')
    })
    
    it('deberia redirigirme a iniciar sesion con correo existente', () => {
        cy.get('#paypalAccountData_submit').click()
        cy.emailUsuario('usuarioExistente')
        cy.get('#paypalAccountData_welcomeBackHeading > .inherit_stylesV2').should('have.text', '¡Hola de nuevo!')
    })
    
    it('deberia salir un mensaje de error en el numero de contacto al registrarlo', () => {
        cy.get('#paypalAccountData_submit').click()
        cy.emailUsuario('NuevoUsuarioValido')
        cy.celUsuario('NuevoUsuarioInvalido')
        cy.get('li > .inherit_stylesV2').should('have.text' , 'Revise su número de celular.')
    })

    it.only('deberia enviar un mesaje de error donde me diga que no debo repetir el mismo caracter por 4 veces', () => {
        cy.get('#paypalAccountData_submit').click()

        cy.emailUsuario('NuevoUsuarioValido')
        cy.celUsuario('NuevoUsuarioValido')

        cy.get('.pp-cons-47p392-modal_contents-text_body-modal_content_sheet-modal_content_with_header')
            .should('exist')
            .then(($modal) => $modal.is(':visible') && cy.pause())
        
        cy.passwordUsuario('NuevoUsuarioInvalido')
        cy.get('#message_paypalAccountData_password').should('be.visible')
    })
})

