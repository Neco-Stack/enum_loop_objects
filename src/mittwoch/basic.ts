for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log("hallo");
// wird erst nachdem loop gelesen 
// ? arr/ strings mit einem foor loop 
const numArr: number [] = [2,4,6,8,10];
for (let i= 0; i< numArr.length; i++){
    console.log(numArr[i]*2);
}
const textArr = "typescript";
fpr (let i= 0; i < textArr.length; i++){
    console.log(textArr.charAt(i).toUpperCase());   
}
// loops level 2 
const inputElement= document.querySelector('#inputNumber') as HTMLInputElement;
const buttonElement= document.querySelector('#loopBtn') as HTMLButtonElement;

buttonElement?.addEventListener('click', () =>{
    if(inputElement){
        const convertInput= Number (inputElement.value);
        let charO = "";
        for (let o= 0; o< convertInput; o++){
            charO += "o";
    }
}