const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('Translation with text and locale fields', function (done) {
        chai
              .request(server)
              .keepOpen()
              .post('/api/translate')
              .send({locale:'american-to-british', text: "I love the color red"})
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.type,'application/json','Response should be json');
                assert.notExists(res.body.error)
                assert.exists(res.body.translation)
                assert.equal(res.body.translation,'I love the <span class="highlight">colour</span> red');
    
                done();
              });
    })
    test('Translation with text and invalid locale field', function (done) {
        chai
              .request(server)
              .keepOpen()
              .post('/api/translate')
              .send({locale:'american-to-french', text: "I love the french river."})
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.type,'application/json','Response should be json');
                assert.notExists(res.body.translation)
                assert.exists(res.body.error)
                assert.equal(res.body.error,'Invalid value for locale field')
    
                done();
              });
    });
    test('Translation with missing text field', function (done) {
        chai
              .request(server)
              .keepOpen()
              .post('/api/translate')
              .send({locale:'american-to-british'})
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.type,'application/json','Response should be json');
                assert.notExists(res.body.translation)
                assert.exists(res.body.error)
                assert.equal(res.body.error,'Required field(s) missing')
    
                done();
              });
    });
    test('Translation with missing locale field', function (done) {
        chai
              .request(server)
              .keepOpen()
              .post('/api/translate')
              .send({ text: "I hate Mr. Anderson"})
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.type,'application/json','Response should be json');
                assert.notExists(res.body.translation)
                assert.exists(res.body.error)
                assert.equal(res.body.error,'Required field(s) missing')
    
                done();
              });
    });
    test('Translation with empty text', function (done) {
        chai
              .request(server)
              .keepOpen()
              .post('/api/translate')
              .send({locale:'american-to-british',text:""})
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.type,'application/json','Response should be json');
                assert.notExists(res.body.translation)
                assert.exists(res.body.error)
                assert.equal(res.body.error,'No text to translate')
    
                done();
              });
    });
    test('Translation with text that needs no translation', function (done) {
        chai
              .request(server)
              .keepOpen()
              .post('/api/translate')
              .send({locale:'american-to-british',text:"I despise Mr Jake's love for yoghurt"})
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.type,'application/json','Response should be json');
                assert.notExists(res.body.error)
                assert.equal(res.body.translation,'Everything looks good to me!')
    
                done();
              });
    });
});
