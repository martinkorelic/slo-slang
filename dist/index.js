"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slangify = exports.deslangify = void 0;
var regexpressions_1 = require("./regexpressions");
/**
 * Function to check whether the match is fully uppercase or just first char capitalized
 * @param str string to check
 * @returns number to indicate case
 */
var checkCases = function (str) {
    if (str == str.toUpperCase())
        return 0;
    else if (str.charAt(0) === str.charAt(0).toUpperCase())
        return 1;
    return 2;
};
/**
 * Function to return a random element.
 * @param arr
 * @returns random element from given array.
 */
var sample = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
/**
 * Function to deslangify text using regex.
 * @param text Given text.
 * @returns Deslangified text.
 * TODO add more options
 */
function deslangify(text) {
    var _loop_1 = function () {
        var reg = new RegExp("\\b" + regexpressions_1.config[i].rgx + "(\\b|W)", regexpressions_1.config[i].flg);
        text = text.replace(reg, function (match) {
            var p = checkCases(match);
            var r = match.replace(reg, regexpressions_1.config[i].d_sub);
            return p == 0 ? r.toUpperCase() : (p == 1 ? r.charAt(0).toUpperCase() + r.slice(1) : r);
        });
    };
    for (var i in regexpressions_1.config) {
        _loop_1();
    }
    return text;
}
exports.deslangify = deslangify;
/**
 * Function to slangify text using regex.
 * @param text Given text.
 * @returns Slangified text.
 * TODO add more options
 */
function slangify(text) {
    var _loop_2 = function () {
        var reg = new RegExp("\\b" + regexpressions_1.config[i].d_sub + "(\\b|W)", regexpressions_1.config[i].flg);
        text = text.replace(reg, function (match) {
            var p = checkCases(match);
            var r = match.replace(reg, sample(regexpressions_1.config[i].s_sub));
            return p == 0 ? r.toUpperCase() : (p == 1 ? r.charAt(0).toUpperCase() + r.slice(1) : r);
        });
    };
    for (var i in regexpressions_1.config) {
        _loop_2();
    }
    return text;
}
exports.slangify = slangify;
