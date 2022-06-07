"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._$all = exports._$ = exports.$all = exports.$ = void 0;
// TypeScript
var $ = function (selector) {
    var element = document.querySelector(selector);
    return element;
};
exports.$ = $;
// TypeScript
var $all = function (selector) {
    var elements = document.querySelectorAll(selector);
    return elements;
};
exports.$all = $all;
// JavaScript
var _$ = function (selector) { return document.querySelector(selector); };
exports._$ = _$;
// JavaScript
var _$all = function (selector) { return document.querySelectorAll(selector); };
exports._$all = _$all;
