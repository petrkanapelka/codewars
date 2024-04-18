/*
DESCRIPTION:
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.
*/
function unluckyDays(year){
    let unluckyCount = 0;
    let dateStart = Date.parse(year);
    const dateFinish = Date.parse(year+1);
    while (dateStart<dateFinish) {
        const time = new Date (dateStart);
        const day = time.getDay();
        const date = time.getDate();
        if (date === 13 && day === 5){
            unluckyCount++
        }
        dateStart = dateStart + 86400000;
    }
    return unluckyCount;
}