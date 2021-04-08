"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var data_json_1 = __importDefault(require("./data.json"));
var Animal = /** @class */ (function () {
    function Animal(dataJSON) {
        this.type = dataJSON.type;
        this.weight = dataJSON.weight;
        this.color = dataJSON.color;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Snake;
}(Animal));
var newArray = data_json_1["default"].map(function (eachObj) {
    var animal = (eachObj.type === "dog") ? new Dog(eachObj)
        : (eachObj.type === "cat") ? new Cat(eachObj)
            : new Snake(eachObj);
    return animal;
});
// Sorting by weight & color
function sortByWeight() {
    newArray.sort(function (a, b) {
        return a.weight - b.weight;
    });
}
function sortByColor() {
    newArray.sort(function (a, b) {
        return (a.color < b.color) ? -1
            : (a.color > b.color) ? 1
                : 0;
    });
}
sortByWeight();
sortByColor();
console.log(newArray);
