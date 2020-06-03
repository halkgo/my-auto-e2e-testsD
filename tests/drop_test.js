
Feature('dropDown');


Scenario.skip('Выбираем опцию Option 1',  (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption('#dropdown', 'Option 1' );
    I.waitForValue('#dropdown', '1')
});

Scenario('Выбираем опцию Option 2 ',  (I) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption('#dropdown', '2' );
    I.seeTextEquals('Option 2',{ xpath: '//option[@selected]' });
});

