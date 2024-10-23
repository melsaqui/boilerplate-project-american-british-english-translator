const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    AmericanBritish(str){
        let strCopy = str.toLowerCase()

       // console.log('her')
       let same =true
        let validTime = /^\d{1,2}:\d{2}$/

        let words = str.split(' ')
        let wordsCopy = strCopy.split(' ')
        let newString=''; 
        let bInjson = false;
        //console.log(Object.keys(americanOnly)[0])
        
         for (let i=0;i<wordsCopy.length;i++){
            if (Object.keys(americanOnly).includes(wordsCopy[i])){
                newString = str.replace((words[i]),'<span class="highlight">'+americanOnly[wordsCopy[i]]+"</span>")
                same=false
            }
            else if(Object.keys(americanToBritishSpelling).includes(wordsCopy[i])){
                newString = str.replace((words[i]),'<span class="highlight">'+americanToBritishSpelling[wordsCopy[i]]+"</span>")
                same=false
            }
            else if(Object.keys(americanToBritishTitles).includes(wordsCopy[i])){
                let title = americanToBritishTitles[wordsCopy[i]];
                if (words[i][0].toUpperCase()==words[i][0]){
                    //start=this.getKeyByValue(americanToBritishTitles, wordsCopy[i])
                    title = title.replace(title.charAt(0),title.charAt(0).toUpperCase())
                }
                newString = str.replace((words[i]),'<span class="highlight">'+ title +"</span>")
                same=false
            }
            else if (words[i].match(validTime)){
                newString = str.replace((words[i]),'<span class="highlight">'+ words[i].replace(":",'.')+"</span>")
                same=false
            }
            //else
            // newString+=words[i]+" "
         }
        if (same)
            newString="Everything looks good to me!"
         return newString;
    
    }
    getKeyByValue(object, value) {
        for (let prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (object[prop] === value)
                    return prop;
            }
        }
    }
    
    BritishAmerican(str){
        let strCopy = str.toLowerCase()

        // console.log('her')
        let same =true
         let validTime = /^\d{1,2}.\d{2}$/
 
         let words = str.split(' ')
         let wordsCopy = strCopy.split(' ')
 
         
         let newString=''; 
         
          for (let i=0;i<words.length;i++){
             if (Object.values(britishOnly).includes(wordsCopy[i])){
                  newString = str.replace((words[i]),'<span class="highlight">'+ britishOnly[wordsCopy[i]] + "</span>")
                 same= false
                 
             }
             else if(Object.values(americanToBritishSpelling).includes(wordsCopy[i])){
                 newString = str.replace((words[i]),'<span class="highlight">'+ this.getKeyByValue(americanToBritishSpelling, wordsCopy[i])+"</span>")
                same =false
             }
             else if(Object.values(americanToBritishTitles).includes(wordsCopy[i])){
                let title = this.getKeyByValue(americanToBritishTitles, wordsCopy[i]);
                if (words[i][0].toUpperCase()==words[i][0]){
                    //start=this.getKeyByValue(americanToBritishTitles, wordsCopy[i])
                    title = title.replace(title.charAt(0),title.charAt(0).toUpperCase())
                }
                 newString = str.replace((words[i]),'<span class="highlight">'+ title +"</span>")
                same=false
             }
             else if (words[i].match(validTime)){
                 newString = str.replace((words[i]),'<span class="highlight">'+ words[i].replace(".",':')+"</span>")
                same=false
             }
             //else 
             //   newString+=words[i]+" "
          }
           if (same)
            newString="Everything looks good to me!"
          //console.log(str.toLowerCase() === newString.toLowerCase())
          return newString;
     
     }
}

module.exports = Translator;