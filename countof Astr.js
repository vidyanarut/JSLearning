 
 
 function char_count(str, letter) 
 {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) 
  {
     if (str.charAt(position) == letter) 
       {
       letter_Count += 1;
       }
   }
   return letter_Count;
 }
 
 
 ///////////////////////////////////new//////////////////////////////
 
 function char_count(str, letter) 
 {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) 
  {
     if (str.charAt(position) == letter) 
       {
       letter_Count += 1;
       }
   }
   return letter_Count;
 }
 
 
console.log('A available in string I am Learning javaScript, The language of internet :',char_count('I am Learning javaScript, The language of internet','a'));


 console.log('A available in string My Favourite movie is Lagan:',char_count('My Farout movie is Lagan', 'a'));