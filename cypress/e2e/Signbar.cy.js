import 'cypress-localstorage-commands'

// Sign in
describe('saveLocalStorage', () => {
	before(() => {
		cy.clearLocalStorageSnapshot()
	})

	beforeEach(() => {
		cy.restoreLocalStorage()
	})

	afterEach(() => {
		cy.saveLocalStorage()
	})

	it('Login', () => {
		const email = 'anything@3ae7depk6evl.mailisk.net'
		cy.visit('https://app.develop.cyber-pass.eu/')

		cy.get('.ant-input').type(email)
		cy.get('.ant-btn-primary').click()

		cy.wait(7000)

		cy.request({
			method: 'GET',
			url: 'https://api.mailisk.com/api/emails/3ae7depk6evl/inbox',
			headers: {
				'X-Api-Key': 'Kvq74Yu_CAY6vQu0ehW4B-sSlPkhfgqv5ocHlnBmLCM',
			},
		}).then((response) => {
			// Access the response here
			const responseBody = response.body
			const text = responseBody.data[0].subject

			const regex = /is (\d+)/
			const match = text.match(regex)
			const code = match ? match[1] : null

			cy.get('.ant-form-item-control-input-content')
				.find('.ant-input')
				.eq(1)
				.type(code)
			cy.get('.ant-btn-primary').click()
			cy.wait(2000)
		})
	})

	// Click on Quick add Panel-> Product
	it('Click on Quick add Panel-> Product', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.ant-menu-submenu-vertical').find('.ant-btn-lg').click()
		cy.get('.ant-menu-item-group-list')
			.find('.nav-sub-menu-item-icon')
			.eq(0)
			.click()
		cy.wait(2000)
	})

	// Click on Quick add Panel-> Opportunity
	it('Click on Quick add Panel-> Opportunity', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.ant-menu-submenu-vertical').find('.ant-btn-lg').click()
		cy.get('.ant-menu-item-group-list')
			.find('.nav-sub-menu-item-icon')
			.eq(1)
			.click()
		cy.wait(3000)
	})
	// Click on Dashboard Panel
	it('Click on Dashboard Panel', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.anticon-dashboard').click()
		cy.wait(2000)
	})

	// Click on My Product Panel
	it('Click on My Product Panel', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.anticon-mobile').click()
		cy.wait(2000)
	})

	// Click on Certified Products Panel
	it('Click on Certified Products Panel', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.anticon-trophy').click()
		cy.wait(2000)
	})

	// Click on Opportunities Panel
	it('Click on Opportunities Panel', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.anticon-star').click()
		cy.wait(2000)
	})

	// Click on My Documents Panel
	it('Click on My Documents Panel', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.anticon-file').click()
		cy.wait(2000)
	})

	// Click on Knowledge Base Panel
	it('Click on Knowledge Base Panel', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.anticon-book').click({ force: true })
		cy.wait(2000)
	})

	// Click on Profile
	it('Click on Profile', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.ant-avatar-image').click()
		cy.wait(2000)
	})
	// Click on by Red Alert Labs button
	it('Click on by Red Alert Labs button', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.about-us').click()
		cy.wait(2000)
	})
	// Click on collapse button
	it('Click on collapse button', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.collapse-button').click()
		cy.wait(2000)
	})
	// Click on expend button
	it('Click on expend button', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.not-collapse-button').click()
		cy.wait(2000)
	})
	// Log out
	it('Check Log out and keep remain in log out stage', () => {
		cy.visit('https://app.develop.cyber-pass.eu/')
		cy.get('.anticon-export').click()
		cy.wait(2000)
		cy.go('back')
	})
})
