//Exercise One
var greeting = "Enter a Number!";

var person= prompt(greeting);


var total= 0;

for (var i = 0; i <= person; i++){
  total = total + i;}


console.log(total);


//Exercise Two

var play= "Do you want to play?";

var enter= "Enter a word";

var again= "Do you want to play again?";

var statement = ""

var hello= prompt (play);

if (hello === "yes") {
  var hey = prompt (enter);
  statement= statement + hey;
}

var hola = prompt (again)


do {
  hey = prompt (enter);
  hola= prompt(again);
  statement += " " + hey;
}
while (hola == "yes");

console.log(statement)

//Exercise Three

var name= "Would you like to print your name?";

var onemore= "Would you like to print your name again?"

var indiv= "Hello my name is Hart";

var ex= "!";

var p= prompt (name);

if (p == "yes") {
  console.log(indiv);
}

var b = prompt (onemore);

while(b == "yes") {
  console.log(indiv += ex);
  b = prompt (onemore);
}




//Exercise Four


var inq= "What time of day is it (Morning, Noon, or Evening)?"

var resp= prompt (inq);

var morn= "morning";

var n= "noon";

var eve= "evening";

var resp1= "Since it is morning, you should be eating breakfast. We suggest eggs and toast";

var resp2= "Since it is noon, you should be eating lunch. We suggest a salad.";

var resp3= "Since it is evening, you should be eating dinner. We suggest chicken and rice.";

var resp4= "Answer not appropriate";

if (resp === morn) {
  console.log (resp1);
}else if (resp === n) {
  console.log (resp2);
}else if (resp === eve) {
  console.log (resp3);
}else {
  console.log(resp4);
}
