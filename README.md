# Simple-JavaScript-sprintf
This function extend String prototype to create PHP sprintf-like functionality

##Use
```javascript
var text = "Hello %s And %s";
text =  text.sprintf( 'Ahmed' , 'Ali' );
alert(text); // Hello Ahmed And Ali
```
This method will handle the difference between number of search placeholders and number of replacement arguments properly.

##Use
```javascript
var text = "Hello %s And %s";
text.sprintf(); // Hello   And 
text.sprintf( 'Ahmed' ); // Hello Ahmed And 
text.sprintf( 'Ahmed', 'Ali', 'Samer' ); // The third argument ignored
```
