
describe('Navigate URL', () => {

  it('passes', () => {
    assert(cy.title, 'Qxf2 Services: selenium main')
  })
})

describe('Fill the text', () => {
  it('passes', () => {
    cy.get('#name').type('Ajitava')
    cy.xpath("//input[@type='email']").type('ajitava@deb.com')
    cy.xpath("//input[@id='phone']").type('99999999')
  })
})

describe('Set dropdown', () => {
  it('passes', () => {
    cy.scrollTo('bottom')
    cy.xpath("//button[@type='button']").click({ force: true });
    cy.xpath("//a[text()='Male']").click({ force: true });
  })
})

describe('Set checkbox', () => {
  it('passes', () => {
    cy.scrollTo('bottom')
    cy.xpath("//input[@type='checkbox']").click({ force: true });
  })
})

describe('Click button', () => {
  it('passes', () => {
    cy.get('#name').type('Ajitava')
    cy.xpath("//input[@type='email']").type('ajitava@deb.com')
    cy.xpath("//input[@id='phone']").type('99999999')
    cy.scrollTo('bottom')
    cy.xpath("//button[@type='button']").click({ force: true });
    cy.xpath("//a[text()='Male']").click({ force: true });    
    cy.xpath("//input[@type='checkbox']").click({ force: true });    
    cy.xpath("//button[text()='Click me!']").click({ force: true });
    assert(cy.contains('Selenium for beginners: Practice page 2'))
  })
})
