//Hoisting
//Hoisting fungerer sådan at hvis man som fx her
//kalder en funktion som først opstår senere så virker det ikke

console.log(hoisting);

var hoisting = "virker";

//functioner bliver hoisted automatisk så de kan bruges tidligere i koden


//This
//this kan bruges både ligesom i java og for sig selv inde i functioner
//for eksempel

var tal = {
    1 : "tallet et",
    2 : "tallet to",
    showThis : function (){
        console.log(this.2);
    }
}
//i denne sammenhæng ville this så tænke indenfor functionen og bruge 1 og ikke det globale this
tal.showThis();


//Closures
//closures er når man gemmer en function i et andet navn

function plus(a){
 return a+5;
}

// her er et exempel på en closure

var plus5 = plus(5);


//Prototyping
// objecter i javascript har en prototype som er et over objekt
// hvis man laver et object og putter noget i prootypen har alle det

function Proto(navn,test){
    this.navn = navn;
    this.test = test;
}

//så hvis man skal adde noget nyt som er gældende for alle proto objecter
//skal man adde det til prototypen ligesom forneden
Proto.prototype.newthing = "hej";



//Callbacks
//callbacks er når du giver en function ind som en af dine parametre
//det gør det muligt at lave noget meget funktionelt programmering

//fx en function som map gør brug af en callback

var tal = [1,2,3];

var størretal = tal.map(Math.exp);

// her har vi så brugt en function som Math.exp som vores parametre til
// map functionen da den tager en function som parameter og bruger den på hvad en der skal mappes



//Map, Filter og Reduce
//Map har jeg allerede forklaret men hvis vi kigger på de andre

//filter er en function som filtrere udfra den function man putter ind
var filtredetal = tal.filter(tal<1);

//reduce er en lidt anden sag

var members = [
    {navn : "Kæmpe læske", pris : 20},
    {navn : "Filur", pris : 8},
    {navn : "Kungfu", pris : 16},
    {navn : "Magnum", pris : 22},
    {navn : "Slurp", pris : 13}
]
//her er et eksempel på en reduce funktion jeg selv har lavet
var reducer = function(x, y, z, arr){
    var temp = x + z.pris
    if(index = arr.length -1) return temp / arr.length;
    return temp;n
}
var result = members.reduce(reducer,0);
console.log(result);

//som vi kan se bruger den virker den med callbacks


//Arrow Functions
//arrow functions fungerer lidt ligesom lambda i java
//man kan forkorte måden man skriver functioner

function gammel(){
    //gør noget her
}

()=>({})

//de to ovenstående funktioner gør det samme men skrevet på forskellige
//måder altså kan man forkorte sine funktioner med arrow function


//Let
// let er en måde at lave variabler i javascript der 
// fungerer ligesom lokale variabler i java

function showoff(x){
    let lokal = 10;
    return x + lokal;
}

console.log(lokal);

//siden let er en lokal variabel kan man derfor ikke bruge den udenfor
// functioner hvor variablen er defineret

