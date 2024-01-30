const {MarkovMachine} = require('./markov');

describe("MarkoMachine", function(){
    let testMachine ;
    beforeEach(function(){
        testMachine = new MarkovMachine("the cat in the hat");
    })

    test('create chain', function(){
        expect(Array.from(testMachine.chains.keys())).toEqual([ 'the', 'cat', 'in', 'hat' ]);
        
    })
})