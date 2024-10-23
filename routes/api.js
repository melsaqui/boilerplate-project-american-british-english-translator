'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;
      console.log(text)
      console.log(locale)
      
      if (locale ==''|| locale ==undefined || locale ==null || text==undefined || text==null)
        return res.json({ error: 'Required field(s) missing' })
      if(text==''|| text==undefined || text==null){
        return res.json({ error: 'No text to translate' })
      }
      else if(locale !='american-to-british' && locale !='british-to-american' ){
        return res.json({ error: 'Invalid value for locale field' })
      }else{
        if (locale ==='american-to-british'){

          let translated=translator.AmericanBritish(text)
          console.log(translated+"\n")
          return (res.json({'text':text,"translation":translated}))
        }
        else{
          let translated=translator.BritishAmerican(text)
          console.log(translated+"\n")
          return (res.json({'text':text,"translation":translated}))
        }
        
      }
      
    });
};
