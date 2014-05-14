var expect = require('chai').expect;
var Card = require('../../src/card');

describe('Card object tests', function() {
    var card;

    beforeEach(function() {
        card = new Card('spade', 7);
    });

    describe('constructor', function() {

        it('card should have suit of spade', function() {
            expect(card.suit).to.equal('spade');
        });

        it('card should have rank of 7', function() {
            expect(card.rank).to.equal(7);
        });

    });


});