"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage_js = exports.Storage = void 0;
var Storage = /** @class */ (function () {
    function Storage(getStorage) {
        if (getStorage === void 0) { getStorage = function () { return window.localStorage; }; }
        this.storage = getStorage();
    }
    Storage.prototype.get = function (key) {
        return this.storage.getItem(key);
    };
    Storage.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    Storage.prototype.clearItem = function (key) {
        this.storage.removeItem(key);
    };
    return Storage;
}());
exports.Storage = Storage;
// JavaScript
exports.storage_js = {
    set: function (key, object) {
        if (!localStorage)
            return;
        localStorage[key] = typeof object === 'string' ? object : JSON.stringify(object);
    },
    get: function (key) {
        if (!localStorage)
            return null;
        if (!localStorage[key]) {
            return null;
        }
        try {
            var parsed = JSON.parse(localStorage[key]);
            return parsed;
        }
        catch (e) {
            return localStorage[key];
        }
    },
    remove: function (key) {
        if (!localStorage)
            return null;
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
    },
};
