/***********RISK *******

 Please note: These are just to give a glimpse of my adaptibility of framework. So consider it very basic.
 I am commenting on each test case for bit of explaination

 *///created by Shoaib rehman

//Data generation should be auto and iterative and should be moved out in fixtures

var data = {

    fullname: "Shoaib Rehman",
    email: "fakeEmail@fake.com",
    username: "fakeUser",
    password: "fakePassword"
};


describe('Jumpcut enrolment', () => {

    before(() => {

        cy.visit('https://jumpcut.com/enroll/gd5vbvp');


    });

///More assertions to be added

    it('Verify that the correct enrolment page is rendered', () => {

        cy.title()
            .should('include', 'Jumpcut')
    });

    it('Verify that on enrolment page Countdown counter should be visible', () => {

        cy.get("#countdown-container > div")
            .should('be.visible')

    });

    /***********RISK *******

    Please note: This is not recommended to use Prod env for testing purposes.
     for example below testcase will result in polluting Prod DB and will eventually create fake user and return
     as already exists however we can still continue testing via auto generating user data and keep on adding it. I have already
     ran it once so this user is already exist - please change the user details in Data object above prior running it

    */


    it('Verify that the enrolment page form contains Full name, Username, Email and Password and user able to successfully submit', () => {

// This should be moved out in Support and handled with promises and callbacks and should contains more assertions

        cy.get("#signup-block").find("#n_name").type(data.fullname, {delay: 100});

        cy.get("#signup-block").find('#n_email').type(data.email, {delay: 100});

        cy.get("#signup-block").find('#n_username').type(data.username, {delay: 100});

        cy.get("#signup-block").find('#n_password').type(data.password, {delay: 100});

        cy.get("#signup-block").find("button")
            .should('contain', 'CREATE YOUR ACCOUNT').click();

        cy.get('#success-block > div').should('contain', 'Congratulations');


    })
});

// This is how we can create a stub and create a db but since we don't have any test env. this is absolutely not recommended o


/*describe.skip('The Login Page', function () {
    beforeEach(function () {
        // reset and seed the database prior to every test
        cy.exec('npm run db:reset && npm run db:seed');

        // seed a user in the DB that we can control from our tests
        // assuming it generates a random password for us
        cy.request('POST', '/test/seed/user', { username: 'Shoaib.rehman' })
            .its('body')
            .as('currentUser')
    });

    it.skip('sets auth cookie when logging in via form submission', function () {
        // destructuring assignment of the this.currentUser object
        const { username, password } = this.data.username;

        cy.visit('/login');

        cy.get('input[name=username]').type(username);

        // {enter} causes the form to submit;
        cy.get('input[name=password]').type(`${password}{enter}`);

        // we should be redirected to /dashboard
        cy.url().should('include', '/dashboard');


        //cy.setCookie can be used to set the cookie initial and check if user exited out he/she should land on same page.
        // Cypress always deletes all cookies before running test so this is ideally to be tested manually


        // our auth cookie should be present
        cy.getCookie('your-session-cookie').should('exist');

        // UI should reflect this user being logged in
        cy.get('h1').should('contain', 'shoaib.rehman')
    })
});*/
