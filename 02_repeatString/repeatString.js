const repeatString = function(text,num) {

    let string = "";

    // this string allows the user to set the text

    if (num < 0) {
        return "ERROR";
    };

    // this gives an error if the number is less than zero


    for (i = 0; i < num; i++ ) {
        string = string + text;
    };

    // this repeats the text 

    return string;
};

// Do not edit below this line
module.exports = repeatString;
