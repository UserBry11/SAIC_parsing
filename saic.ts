/**
 *  Organization: SAIC
 *  Author: Bryan Fernandez
 *  Date: April 8th, 2021
 * 
 *  Description: A goal of parsing through a sample JSON array into a type and instance in my preferred language (TypeScript).
 *  The parsed item would then be placed inside a heterogeneous array/list/collection.
 *  This heterogeneous would then be sorted based on 'weight' and/or 'color'.
 * 
 */

import {default as jsonObject} from "./data.json";

class Animal {
    type: string
    weight: number
    color: string

    constructor(dataJSON: any){
        this.type = dataJSON.type;
        this.weight = dataJSON.weight;
        this.color = dataJSON.color;
    }
}

class Dog extends Animal {}
class Cat extends Animal {}
class Snake extends Animal {}

let newArray = jsonObject.map(eachObj => {

    let animal = (eachObj.type === "dog") ? new Dog(eachObj)
                : (eachObj.type === "cat") ? new Cat(eachObj)
                : new Snake(eachObj);
    return animal;
});

// Sorting by weight & color
function sortByWeight(){
    newArray.sort((a, b) => {
        return a.weight - b.weight;
    })
}

function sortByColor(){
    newArray.sort((a,b) => {
        return (a.color < b.color) ? -1
                : (a.color > b.color) ? 1
                : 0;
    })
}

sortByWeight();
sortByColor();
console.log(newArray)
