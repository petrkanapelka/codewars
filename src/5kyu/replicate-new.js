/*
DESCRIPTION:
TL;DR: write a nouveau function that replicates all the behavior of the new operator.

Aside: Operators?
In JavaScript, perhaps no operator is as complicated as new. "Wait; new is an operator?" Yep; an operator is something that operates on one or more operands and evaluates to a result. Binary operators like + and !== operate on two operands:

5 + 5 evaluates to 10
{} !== [] evaluates to true
Whereas unary operators like + and typeof take one operand (hmm, + is both a unary and binary operator, how 'bout that!):

+'5' evaluates to 5
typeof '5' evaluates to 'string'
Ultimately operators are functions with different syntax. They take inputs/operands and return/evaluate to something. In fact, some JS operators can be re-written as functions.
*/
function nouveau (Constructor,...arguments) {
    let newObj = Object.create(Constructor.prototype)
    const resObj = Constructor.call(newObj,...arguments);
    if ((typeof resObj === 'object' || typeof resObj === 'function') && resObj !== null) {
        return resObj;
    }
   return newObj;
}