type Smartphone = {
    size: string, 
    material: string, 
    color: string, 
    display: string[],
    ram: number, 
    hardDrive: number
}
const iphone: Smartphone = {
    size: "6 inch",
    material: "metal",
    color: "black",
    display: ["4k", "glas", "retina"],
    ram: 3, 
    hardDrive: 256, 
}
console.log(iphone); 
let value: keyof Smartphone; 
for (let value in iphone)


