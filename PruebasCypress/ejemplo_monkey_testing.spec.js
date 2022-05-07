describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    })
})

function randomEvent(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    var expresion = getRandomInt(0, 5);
    console.log(expresion);
    if(monkeysLeft > 0) {
        switch (expresion) {
            case 1:
                //Hacer click en un link al azar
                randomClick();
                break;
            case 2:
                randomText();
                //Llenar un campo de texto al azar
                break;
            case 3:
                //Seleccionar un combo al azar
                randomSelect();
                break;
            case 4:
                //Hacer click en un botón al azar
                randombutton()
                break;
            default:
                //Default
                break;
          }
        monkeysLeft = monkeysLeft - 1;
        randomEvent(monkeysLeft);
    }

    function randomClick() {
    
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
            }
            cy.wait(1000);
        });
      
    }

    function randomText() {
        cy.get('input').then($texts => {
            var randomText = $texts.get(getRandomInt(0, $texts.length));
            cy.wrap(randomText).type('Hello, World', {force: true});
            cy.wait(1000);
        });
    }

    function randomSelect() {
        cy.get('select').then($selects => {
            var randomSelect = $selects.get(getRandomInt(0, $selects.length));            
            cy.wrap(randomSelect).select(randomSelect.options[getRandomInt(1, randomSelect.options.length)].value);
            cy.wait(1000);
        });
        
    }

    function randombutton() {
    
        cy.get('button').then($buttons => {
            var randombutton = $buttons.get(getRandomInt(0, $buttons.length));
            if(!Cypress.dom.isHidden(randombutton)) {
                cy.wrap(randombutton).click({force: true});
            }
            cy.wait(1000);
        });
      
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    
}