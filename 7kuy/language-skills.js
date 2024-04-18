/*
DESCRIPTION:
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)
*/

function myLanguages(results) {
    const stack=[];
    let i = 0;
    for (let key in results){
        if (results[key]>=60){
            stack.push([]);
            stack[i].push(key);
            stack[i].push(results[key]);
            i++;
        }
    }
    stack.sort((a,b)=>{
        return b[1]-a[1];
    })
    let final = [];
    stack.forEach((el)=>final.push(el[0]));
    return final;
}