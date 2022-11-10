/// <reference types="cypress" />

describe('Basic Practice', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  describe('Adding a new item', () => {
    it('should put a new item on the page after clicking on "Add Item"', () => {
      const text = 'Good Attitude';
      cy.get('[data-test="new-item-input"]').type(text);
      cy.get('[data-test="add-item"]').click()
      cy.contains(text)
    });

    it('should put a new item in the "Unpacked Items" list', () => {
      const text = 'Good Attitude';
      cy.get('[data-test="new-item-input"]').type(text);
      cy.get('[data-test="add-item"]').click();

      cy.get('[data-test="items-unpacked"]').contains(text);
    });

    it('should put a new item as the last item in the "Unpacked Items" list', () => {});
  });

  describe('Filtering items', () => {
    it('should show items that match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('Tooth');

      // cy.contains('Tooth brush');
      // cy.contains('Tooth paste');

      // different way of checking
      cy.get('[data-test="items li"]').each(($item) => {
        expect($item.text()).to.include('Tooth');
      })
    });

    it('should hide items that do not match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('Tooth');

      cy.contains('Hoodie').should('not.exist');
    });
  });

  describe('Removing items', () => {
    describe('Remove all', () => {
      it('should remove all of the items', () => {
        cy.get('[data-test="remove-all"]').click();
        cy.get('[data-test="items li"]').should('not.exist');
      });
    });

    describe('Remove individual items', () => {
      it('should have a remove button on an item', () => {});

      it('should remove an item from the page', () => {
        cy.get('[data-test="items"] li').each($li => {
          cy.wrap($li).find('[data-test="remove"]').click();
          cy.wrap($li).should('not.exist');
        })
      });
    });
  });

  describe('Mark all as unpacked', () => {
    it('should empty out the "Packed" list', () => {});

    it('should empty have all of the items in the "Unpacked" list', () => {});
  });

  describe('Mark individual item as packed', () => {
    it('should move an individual item from "Unpacked" to "Packed"', () => {});
  });
});
