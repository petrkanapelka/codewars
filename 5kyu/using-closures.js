/*
In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.
*/

var Cat = (function () {
    let numOfCats = [];
    return class Cat {
        constructor(name, weight) {
            if (name === undefined || weight === undefined) {
                throw new Error()
            } 
            Object.defineProperty(this, "weight", {
                get: function () {
                    return this._weight
                },
                set: function (value) {
                    this._weight = value
                }
            })
            this.name = name;
            this.weight = weight;
            numOfCats.push(this);
        }

        static averageWeight() {
            let averageCatsWeight = numOfCats.map ((cat)=>{
                return cat.weight
            })
            .reduce((a,b) => a+b) / numOfCats.length;
            return averageCatsWeight;
        }
    }
}());