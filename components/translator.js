const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    AmericanBritish(str){
        let strCopy = str.toLowerCase()
        let same =true
        let validTime = /^\d{1,2}:\d{2}$/
        let newString= ''; 

        
        for(const [key, value] of Object.entries(americanOnly)){  
            if (strCopy.includes(key+" " ) || strCopy.includes(key+"."))
                strCopy = strCopy.replace(new RegExp(`\\b${key}\\b`, 'g'), `<span class="highlight">${value}</span>`);

        }
        for(const [key, value] of Object.entries(americanToBritishSpelling)){  
            if (strCopy.includes(key+" " ) || strCopy.includes(key+"."))
                strCopy = strCopy.replace(new RegExp(`\\b${key}\\b`, 'g'), `<span class="highlight">${value}</span>`);

        }
        let words = str.split(' ')
        let wordsCopy = strCopy.split(' ')
        for (let i=0;i<wordsCopy.length;i++){
            if (wordsCopy[i].match(validTime)){
                let time =wordsCopy[i] 
                if (wordsCopy[i][wordsCopy[i].length-1] =='.'||wordsCopy[i][wordsCopy[i].length-1] ==','||wordsCopy[i][wordsCopy[i].length-1] =='?'){
                    time= wordsCopy[i].slice(0,wordsCopy[i].length-1)
                }
                strCopy = strCopy.replace(time,'<span class="highlight">'+ time.replace(":",'.')+"</span>")
            }
            if(Object.keys(americanToBritishTitles).includes(wordsCopy[i])){
                let title = americanToBritishTitles[wordsCopy[i]];
                if (words[i][0] && words[i][0].toUpperCase() === wordsCopy[i][0].toUpperCase()) {
                    title = title.charAt(0).toUpperCase() + title.slice(1);
                }
                strCopy = strCopy.replace(wordsCopy[i], '<span class="highlight">'.toLowerCase()+title+'</span>');
            }
         
            
        
        }
        wordsCopy = strCopy.split(' ')
        words = str.split(" ")

        let k=0;
        for (let j=0; j<words.length ;j++){
            if(wordsCopy.indexOf(words[j].toLowerCase())!=-1){
                strCopy=strCopy.replace(wordsCopy[wordsCopy.indexOf(words[j].toLowerCase())]+" ",words[j]+" ")
                
            }
        }
        newString=strCopy
        
        if (newString==str)
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
        let validTime = /^\d{1,2}.\d{2}/
        let newString= ''; 


        for(const [key, value] of Object.entries(britishOnly)){  
            if (strCopy.includes(key+" " ) || strCopy.includes(key+"."))
                strCopy = strCopy.replace(key, '<span class="highlight">'+value+'</span>');

        }
        for(const [key, value] of Object.entries(americanToBritishSpelling)){  
            if (strCopy.includes(value+" " ) || strCopy.includes(value+"."))
                strCopy = strCopy.replace(value, '<span class="highlight">'+key+'</span>');

        }
        let words = str.split(' ')
        let wordsCopy = strCopy.split(' ')
        for (let i=0;i<wordsCopy.length;i++){
            if (wordsCopy[i].match(validTime)){
                let time =wordsCopy[i] 
                if (wordsCopy[i][wordsCopy[i].length-1] =='.'||wordsCopy[i][wordsCopy[i].length-1] ==','||wordsCopy[i][wordsCopy[i].length-1] =='?'){
                    time= wordsCopy[i].slice(0,wordsCopy[i].length-1)
                }
                strCopy = strCopy.replace(time,'<span class="highlight">'+ time.replace(".",':')+"</span>")
            }
            else if(Object.values(americanToBritishTitles).includes(wordsCopy[i].toLowerCase())){
                let title = this.getKeyByValue(americanToBritishTitles, wordsCopy[i]);
                if (words[i][0].toUpperCase()==words[i][0]){
                    title = title.replace(title.charAt(0),title.charAt(0).toUpperCase())
                }
                 strCopy= strCopy.replace((wordsCopy[i]),'<span class="highlight">'+ title +"</span>")
            }
         
            
        
        }
        wordsCopy = strCopy.split(' ')
        words = str.split(" ")

        let k=0;

        for (let j=0; j<words.length ;j++){
            if(wordsCopy.indexOf(words[j].toLowerCase())!=-1){
                strCopy=strCopy.replace(wordsCopy[wordsCopy.indexOf(words[j].toLowerCase())],words[j])
                
            }
        }
            newString=strCopy
          
        //console.log(newString)
        if (newString===str)
            newString="Everything looks good to me!"
         return newString;
    
       /* let strCopy = str.toLowerCase()

        // console.log('her')
        let same =true
         let validTime = /^\d{1,2}.\d{2}$/
 
         let words = str.split(' ')
         let wordsCopy = strCopy.split(' ')
 
        
         let newString=str; 
         
          for (let i=0;i<words.length;i++){
             if (Object.values(britishOnly).includes(wordsCopy[i])){
                  newString = newString.replace((words[i]),'<span class="highlight">'+ britishOnly[wordsCopy[i]] + "</span>")
                 same= false
                 
             }
             else if(Object.values(americanToBritishSpelling).includes(wordsCopy[i])){
                 newString = newString.replace((words[i]),'<span class="highlight">'+ this.getKeyByValue(americanToBritishSpelling, wordsCopy[i])+"</span>")
                same =false
             }
             else if(Object.values(americanToBritishTitles).includes(wordsCopy[i])){
                let title = this.getKeyByValue(americanToBritishTitles, wordsCopy[i]);
                if (words[i][0].toUpperCase()==words[i][0]){
                    //start=this.getKeyByValue(americanToBritishTitles, wordsCopy[i])
                    title = title.replace(title.charAt(0),title.charAt(0).toUpperCase())
                }
                 newString = newString.replace((words[i]),'<span class="highlight">'+ title +"</span>")
                same=false
             }
             else if (words[i].match(validTime)){
                 newString = newString.replace((words[i]),'<span class="highlight">'+ words[i].replace(".",':')+"</span>")
                same=false
             }
             //else 
             //   newString+=words[i]+" "
          }
           if (same)
            newString="Everything looks good to me!"
          //console.log(str.toLowerCase() === newString.toLowerCase())
          return newString;
     
    */}
}

module.exports = Translator;