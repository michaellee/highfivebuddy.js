(function(window){
  'use strict';
  function define_highFiveBuddy(){
    let quotes = {
      'A': [
        'Come on!',
        'Ow!'
      ],
      'B': [
        'Be awesome',
        'Stay cool!'
      ]
    }
    
    var HighFiveBuddy = {};
    var randomQuote = function(withAuthor){
      var author = randomAuthor(quotes)
      var quote = quotes[author][randomAuthorQuote(0, author.length-1)];
      if(withAuthor){
        return quote + " -" + author;
      }else{
        return quote;
      }
    }

    var randomAuthorQuote = function(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomAuthor = function (obj) {
      var keys = Object.keys(obj)
      return keys[Math.floor(Math.random()*keys.length)];
    };

    var target = document.getElementById("highFiveBuddy");
    
    HighFiveBuddy.getQuote = function(withAuthor){
      if(typeof(target) != 'undefined' && target != null){
        target.innerHTML = randomQuote(withAuthor);
      }
    }
    
    return HighFiveBuddy;
  }
  
  if(typeof(HighFiveBuddy) === 'undefined'){
    window.HighFiveBuddy = define_highFiveBuddy();
  }else{
    console.log('HighFiveBuddy is already defined.');
  }
})(window);

HighFiveBuddy.getQuote(true);
