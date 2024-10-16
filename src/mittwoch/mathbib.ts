// ? math bib ist eine von js/ts vorgefertige kleine bibliothek, die mathematische funktionen/ beinhaltet 
// math.random()
// math.ceil ()
// math.round()
// math.floor()
// math.max()
// math.min()
// math.abs()
// math.pi()
// math.sqrt
// math.pow()
// ? Math.random() --> generiert eine zufallszahl zwischen 0-1 
console.log(Math.random());
// ? Math.ceil() --> rundet immer auf 
console.log(Math.ceil(3.4));
// ? Math.ceil() --> rundet immer auf die nächste ganzzahl ab
// ? math.round() --> rundet immer auf die nächste ganzzahl auf 
console.log(Math.round(3.4));
// ? math.max()--> gibt uns immer die größte zahl zurück 
console.log(Math.max(3,1,7));
// ? math.abs() --> gibt uns immer einen positiven wert zurück 
const age1 = 30; 
const age2 = 40; 
console.log(Math.abs(age1-age2));
// ? math.pi() --> gibt uns die zahl pi aus 
// ? Math.sqrt() --> gibt uns die quadratwurzel zurück 
console.log(Math.sqrt(25));
// ? Math.pow() --> gibt uns die potenz von etwas 
console.log(Math.pow(2,3));
// ? zum formatieren von math.random bietet sich Math.ceil() oder Math.floor() an
// TODO  wenn ich mir ein zufällige zahl aus einem array geben lassen möchte? 
// ? dann sollte ich math.floor() und math.random() in der kombination nutzen, weil ich sonst niemals das erste element im arr bekommen würde 
const numbers: number[] = [1,2,3,4,5]
const randomNumber = Math.floor(Math.random() * numbers.length);
console.log(numbers[randomNumber]);



