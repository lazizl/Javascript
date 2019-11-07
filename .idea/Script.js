
//first problem
function sleep_in (weekday,weekend){
    var noSchool = !weekday || weekend;
    return noSchool;
}


//second problem
function monkey_trouble(a_smile, b_smile){
    var smile = a_smile && b_smile || !a_smile && !b_smile;
    return smile;
}

//third problem
function string_times (str, n){
    var nString = "";
    for(var i = 0; i < n; i++){
        nString += str
    }
    return nString;
}
//fourth problem
function front_times (str, n){
    var threeString = "";
    for (var i = 0; i < n; i++){
        threeString += str.substring(0,3);
    }
    return threeString;
}
//fifth problem
function string_bits (hello){
    var smallString = "";
        for ( var i = 0; i < hello.length; i++) {
            if (i % 2 == 0) {
                smallString += hello.substring(i, i + 1);
            }
        }
    return smallString;
}
//sixth problem
function caughtSpeeding(speed, birthday) {
    if(birthday == true){
        var speed = speed - 5;
    }
    if(speed <= 60) {
        return 0;
    }
    if(80 >= speed && speed >60) {
        return 1;
    }
    if(speed > 80) {
        return 2;
    }
}
// seventh problem
function fizz_buzz(num){
    var z = "Buzz";
    var x = "FizzBuzz";
    var t = "Fizz";

    if (num % 3 == 0 && num % 5 == 0) {
        return x;
    }
    if (num % 5 == 0 ) {
        return z;
    }
    if (num % 3 == 0) {
        return t;

    }
    if (num % 5 != 0 && num % 3 != 0){
        return num + "!";
    }
    return value;
}
// 8th problem
function teaParty(tea, candy) {
    if (tea < 5 || candy < 5) {
    return 0;
    }
    if ( tea >= 2 * candy || candy >= 2 * tea){
        return 2;
    }
    if (tea >= 5 && candy >= 5){
        return 1;
    }
}
// 9th problem
function blackjack(cardOne, cardTwo){
    if (cardOne > 21 && cardTwo > 21 ){
        return 0;
    }
    if (( cardOne < cardTwo || cardOne > 21) && cardTwo <= 21){
        return cardTwo;
    }
    if ((cardTwo < cardOne || cardTwo > 21) && cardOne <= 21){
        return cardOne;
    }
}
// tenth problem
function loneSum (a,b,c){
    if ( a == b && a == c && b == c){
        return 0;
    }

    if ( a == b){
        return c;
    }
    if ( a == c){
        return b;
    }
    if ( b == c){
        return a;
    }

    var sum = a + b + c;

    return sum;
}









//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
}
