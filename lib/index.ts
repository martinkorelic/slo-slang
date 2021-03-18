import { config } from './regexpressions';

/**
 * Function to check whether the match is fully uppercase or just first char capitalized
 * @param str string to check
 * @returns number to indicate case
 */
const checkCases = (str : String): number => {
    if (str == str.toUpperCase())
        return 0;
    else if (str.charAt(0) === str.charAt(0).toUpperCase())
        return 1;
    return 2;
}

/**
 * Function to return a random element.
 * @param arr 
 * @returns random element from given array.
 */
const sample = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Function to deslangify text using regex.
 * @param text Given text.
 * @returns Deslangified text.
 * TODO add more options
 */
function deslangify(text : String): String {

    for (var i in config) {
        let reg = new RegExp(`\\b${config[i].rgx}(\\b|\W)`, config[i].flg);
        text = text.replace(reg, function(match) {
            let p = checkCases(match);
            let r = match.replace(reg, config[i].d_sub);
            return p == 0 ? r.toUpperCase() : (p == 1 ? r.charAt(0).toUpperCase()+r.slice(1) : r);
        });
    }

    return text;
}

/**
 * Function to slangify text using regex.
 * @param text Given text.
 * @returns Slangified text.
 * TODO add more options
 */
function slangify(text : String): String {

    for (var i in config) {
        let reg = new RegExp(`\\b${config[i].d_sub}(\\b|\W)`, config[i].flg);
        text = text.replace(reg, function(match) {
            let p = checkCases(match);
            let r = match.replace(reg, sample(config[i].s_sub));
            return p == 0 ? r.toUpperCase() : (p == 1 ? r.charAt(0).toUpperCase()+r.slice(1) : r);
        });
    }

    return text;
}

export {
    deslangify,
    slangify
}