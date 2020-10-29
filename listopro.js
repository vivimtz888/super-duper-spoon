// called parseNumbers with signature (s: string): number[] 
// that takes a string like '1-3,5,7,10,11-14' 
//  returns an array of numbers like [1, 2, 3, 5, 7, 10, 11, 12, 13, 14].

function parseNumbers(str) {
    // split the string
    let arrayOfStrings = str.split('-')
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i] === '-') {

            let range = function (start_num, end_num) {
                start_num = arrayOfStrings[i - 1]
                end_num = arrayOfStrings[i + 1]
                if (end_num - start_num === 2) {
                    return [start_num + 1];
                }
                else {
                    let list = range(start_num, end_num - 1);
                    list.push(end_num - 1);
                    return list;
                }
            }
        }
    }
}
