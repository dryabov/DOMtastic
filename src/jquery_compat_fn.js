/**
 * @module Array
 */

import { each as _each } from './util';
import { $, matches } from './selector';

var ArrayProto = Array.prototype;

/**
 * Filter the collection by selector or function, and return a new collection with the result.
 *
 * @param {String|Function} selector Selector or function to filter the collection.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} A new wrapped collection
 * @chainable
 * @example
 *     $('.items').filter('.active');
 * @example
 *     $('.items').filter(function(index, element) {
 *         return element.hasAttribute('active')
 *     });
 */

function filter(selector, thisArg) {
    var callback = typeof selector === 'function' ? function(element, index) {
        return selector(index, element);
    } : function(element) {
        return matches(element, selector);
    };
    return $(ArrayProto.filter.call(this, callback, thisArg));
}

/**
 * Execute a function for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').forEach(function(index, element) {
 *         element.style.color = 'evergreen';
 *     );
 */

function each(callback, thisArg) {
    return _each(this, function(element, index) {
        callback(index, element);
    }, thisArg);
}


/**
 * Create a new collection by executing the callback for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Array} Collection with the return value of the executed callback for each element.
 * @example
 *     $('.items').map(function(element) {
 *         return element.getAttribute('name')
 *     });
 *     // ['ever', 'green']
 */

function map(callback, thisArg) {
     ArrayProto.map.call(this, function(element, index) {
         callback(index, element);
     }, thisArg);
}


/*
 * Export interface
 */

export { filter, each, map };
