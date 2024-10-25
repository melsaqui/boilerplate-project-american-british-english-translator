const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    suite('to British English', () => {
        test("Mangoes are my favorite fruit.",function(){
            let result= translator.AmericanBritish("Mangoes are my favorite fruit.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'Mangoes are my <span class="highlight">favourite</span> fruit.')
        });
        test("I ate yogurt for breakfast.",function(){
            let result= translator.AmericanBritish("I ate yogurt for breakfast.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'I ate <span class="highlight">yoghurt</span> for breakfast.')
        });
        test("We had a party at my friend's condo.",function(){
            let result= translator.AmericanBritish("We had a party at my friend's condo.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'We had a party at my friend\'s <span class="highlight">flat</span>.')
        });
        test("Can you toss this in the trashcan for me?",function(){
            let result= translator.AmericanBritish("Can you toss this in the trashcan for me?")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'Can you toss this in the <span class="highlight">bin</span> for me?')
        });
        test("The parking lot was full.",function(){
            let result= translator.AmericanBritish("The parking lot was full.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'The <span class="highlight">car park</span> was full.')
        });

        test("Like a high tech Rube Goldberg machine.",function(){
            let result= translator.AmericanBritish("Like a high tech Rube Goldberg machine.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'Like a high tech <span class="highlight">Heath Robinson device</span>.')
        });

        test("To play hooky means to skip class or work.",function(){
            let result= translator.AmericanBritish("To play hooky means to skip class or work.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'To <span class="highlight">bunk off</span> means to skip class or work.')
        });

        test("No Mr. Bond, I expect you to die.",function(){
            let result= translator.AmericanBritish("No Mr. Bond, I expect you to die.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'No <span class="highlight">Mr</span> Bond, I expect you to die.')
        });

        test("Dr. Grosh will see you now.",function(){
            let result= translator.AmericanBritish("Dr. Grosh will see you now.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'<span class="highlight">Dr</span> Grosh will see you now.')
        });

        test("Lunch is at 12:15 today.",function(){
            let result= translator.AmericanBritish("Lunch is at 12:15 today.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'Lunch is at <span class="highlight">12.15</span> today.')
        });


    })
    suite('to American English', () => {
        test("We watched the footie match for a while.",function(){
            let result= translator.BritishAmerican("We watched the footie match for a while.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'We watched the <span class="highlight">soccer</span> match for a while.')
        });
        test("Paracetamol takes up to an hour to work.",function(){
            let result= translator.BritishAmerican("Paracetamol takes up to an hour to work.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'<span class="highlight">Tylenol</span> takes up to an hour to work.')
        });
        test("First, caramelise the onions.",function(){
            let result= translator.BritishAmerican("First, caramelise the onions.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'First, <span class="highlight">caramelize</span> the onions.')
        });
        test("I spent the bank holiday at the funfair.",function(){
            let result= translator.BritishAmerican("I spent the bank holiday at the funfair.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.')
        });
        test("I had a bicky then went to the chippy.",function(){
            let result= translator.BritishAmerican("I had a bicky then went to the chippy.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.')
        });
        test("I've just got bits and bobs in my bum bag.",function(){
            let result= translator.BritishAmerican("I've just got bits and bobs in my bum bag.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.')
        });
        test("The car boot sale at Boxted Airfield was called off.",function(){
            let result= translator.BritishAmerican("The car boot sale at Boxted Airfield was called off.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.')
        });
        test("Have you met Mrs Kalyani?",function(){
            let result= translator.BritishAmerican("Have you met Mrs Kalyani?")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'Have you met <span class="highlight">Mrs.</span> Kalyani?')
        });
        test("Prof Joyner of King's College, London.",function(){
            let result= translator.BritishAmerican("Prof Joyner of King's College, London.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'<span class="highlight">Prof.</span> Joyner of King\'s College, London.')
        });
        test("Tea time is usually around 4 or 4.30.",function(){
            let result= translator.BritishAmerican("Tea time is usually around 4 or 4.30.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.equal(result,'Tea time is usually around 4 or <span class="highlight">4:30</span>.')
        });

    })
    suite('Highlights', () => {
        test("Mangoes are my favorite fruit.",function(){
            let result= translator.AmericanBritish("Mangoes are my favorite fruit.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.include(result,'<span class="highlight">favourite</span>')
            assert.equal(result,'Mangoes are my <span class="highlight">favourite</span> fruit.')
        });
        test("I ate yogurt for breakfast.",function(){
            let result= translator.AmericanBritish("I ate yogurt for breakfast.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.include(result,'<span class="highlight">yoghurt</span>')
            assert.equal(result,'I ate <span class="highlight">yoghurt</span> for breakfast.')
        });
        test("We watched the footie match for a while.",function(){
            let result= translator.BritishAmerican("We watched the footie match for a while.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.include(result,'<span class="highlight">soccer</span>')
            assert.equal(result,'We watched the <span class="highlight">soccer</span> match for a while.')
        });
        test("Paracetamol takes up to an hour to work.",function(){
            let result= translator.BritishAmerican("Paracetamol takes up to an hour to work.")
            assert.isString(result)
            assert.isNotNull(result)
            assert.include(result,'<span class="highlight">Tylenol</span>')
            assert.equal(result,'<span class="highlight">Tylenol</span> takes up to an hour to work.')
        });
    })
    
});
