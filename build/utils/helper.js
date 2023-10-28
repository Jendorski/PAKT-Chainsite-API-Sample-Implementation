"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrlWithQuery = void 0;
const parseUrlWithQuery = (url, filter) => {
    let querys = "?";
    Object.keys(filter).map((key) => {
        querys = querys + `${key}=${filter[key]}&`;
    });
    return url + querys;
};
exports.parseUrlWithQuery = parseUrlWithQuery;
