export class Vector {
  components: number[];

  constructor(components: number[]) {
    this.components = components;
  }

  add(b: Vector): Vector {
    if (this.components.length !== b.components.length) {
      throw new Error();
    }
    const result = this.components.map((el, i) => el + b.components[i]);
    return new Vector(result);
  }

  subtract(b: Vector): Vector {
    if (this.components.length !== b.components.length) {
      throw new Error();
    }
    const result = this.components.map((el, i) => el - b.components[i]);
    return new Vector(result);
  }

  equals(b: Vector): boolean {
    if (this.components.length !== b.components.length) {
      return false;
    }
    return this.components.every((el, i) => el === b.components[i]);
  }

  dot(b: Vector): number {
    if (this.components.length !== b.components.length) {
      throw new Error();
    }
    return this.components
      .map((el, i) => el * b.components[i])
      .reduce((prev, acc) => prev + acc, 0);
  }

  norm(): number {
    return Math.sqrt(this.components.reduce((prev, acc) => prev + acc ** 2, 0));
  }

  toString(): string {
    return `(${this.components.join(",")})`;
  }
}

/* let a = new Vector([1, 2]);
let b = new Vector([3, 4]);
console.log('result=>',a.equals(b)); */

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
console.log(a.add(b).equals(new Vector([4, 6, 8])));

console.log(new Vector([1, 2, 3]).norm()); //, Math.sqrt(14),  0.1);

let c = new Vector([1, 2, 3]);
let d = new Vector([3, 4, 5]);
console.log(c.dot(d)) //, 26);

let x = new Vector([1, 2, 3]);
console.log(x.toString()) //, "(1,2,3)";

/*
  import { assert } from "chai";
import { Vector } from "./solution";

describe("Tests", () => {
  it("Simple Equality Test", () => {
    let a = new Vector([1,2]);
    let b = new Vector([3,4]);
    assert.isFalse(a.equals(b));
  });

  it("Simple Add Test", function() {
    let a = new Vector([1, 2, 3]);
    let b = new Vector([3, 4, 5]);
    assert.isTrue(a.add(b).equals(new Vector([4,6, 8])));
  })

  it("Simple Norm Test", function () {
    assert.approximately(new Vector([1,2,3]).norm(), Math.sqrt(14),  0.1);
  });

  it("Simple Subtract Test", function() {
    let a = new Vector([1, 2, 3]);
    let b = new Vector([3, 4, 5]);
    assert.isTrue(a.subtract(b).equals(new Vector([-2,-2,-2])));
  });

  it("Simple Dot Test", function() {
    let a = new Vector([1, 2, 3]);
    let b = new Vector([3, 4, 5]);
    assert.strictEqual(a.dot(b), 26);
  })

  it("Simple ToString Test", function() {
    let a = new Vector([1, 2, 3]);
    assert.strictEqual(a.toString(), "(1,2,3)");
  })
});
  */
