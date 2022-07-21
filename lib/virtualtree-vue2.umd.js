(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["virtualtree-vue2"] = factory();
	else
		root["virtualtree-vue2"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 477:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(4160),
    root = __webpack_require__(8503);
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ 9804:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(7877),
    hashDelete = __webpack_require__(925),
    hashGet = __webpack_require__(9738),
    hashHas = __webpack_require__(2974),
    hashSet = __webpack_require__(9115);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ 941:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(52),
    listCacheDelete = __webpack_require__(6675),
    listCacheGet = __webpack_require__(2272),
    listCacheHas = __webpack_require__(5575),
    listCacheSet = __webpack_require__(3786);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ 9271:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(4160),
    root = __webpack_require__(8503);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ 6510:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(8875),
    mapCacheDelete = __webpack_require__(9032),
    mapCacheGet = __webpack_require__(895),
    mapCacheHas = __webpack_require__(167),
    mapCacheSet = __webpack_require__(7510);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ 6636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(4160),
    root = __webpack_require__(8503);
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ 7668:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(4160),
    root = __webpack_require__(8503);
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ 2288:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(941),
    stackClear = __webpack_require__(4370),
    stackDelete = __webpack_require__(7169),
    stackGet = __webpack_require__(8732),
    stackHas = __webpack_require__(7017),
    stackSet = __webpack_require__(7036);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ 6620:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(8503);
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ 7141:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(8503);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ 5731:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(4160),
    root = __webpack_require__(8503);
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ 6569:
/***/ (function(module) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ 5959:
/***/ (function(module) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ 974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(2154),
    isArguments = __webpack_require__(870),
    isArray = __webpack_require__(4003),
    isBuffer = __webpack_require__(8400),
    isIndex = __webpack_require__(4274),
    isTypedArray = __webpack_require__(2071);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ 112:
/***/ (function(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ 9401:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(2408),
    eq = __webpack_require__(8138);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ 2753:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(8138);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ 4960:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(5052),
    keys = __webpack_require__(2512);
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

/***/ }),

/***/ 9512:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(5052),
    keysIn = __webpack_require__(5848);
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

/***/ }),

/***/ 2408:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(4506);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ 3973:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(2288),
    arrayEach = __webpack_require__(6569),
    assignValue = __webpack_require__(9401),
    baseAssign = __webpack_require__(4960),
    baseAssignIn = __webpack_require__(9512),
    cloneBuffer = __webpack_require__(7953),
    copyArray = __webpack_require__(4897),
    copySymbols = __webpack_require__(2957),
    copySymbolsIn = __webpack_require__(103),
    getAllKeys = __webpack_require__(4239),
    getAllKeysIn = __webpack_require__(6583),
    getTag = __webpack_require__(8091),
    initCloneArray = __webpack_require__(1288),
    initCloneByTag = __webpack_require__(4190),
    initCloneObject = __webpack_require__(8725),
    isArray = __webpack_require__(4003),
    isBuffer = __webpack_require__(8400),
    isMap = __webpack_require__(3853),
    isObject = __webpack_require__(2661),
    isSet = __webpack_require__(5581),
    keys = __webpack_require__(2512),
    keysIn = __webpack_require__(5848);
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject(value)) {
    return value;
  }

  var isArr = isArray(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);

      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),

/***/ 4049:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(2661);
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ 4587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(112),
    isArray = __webpack_require__(4003);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ 9411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(6620),
    getRawTag = __webpack_require__(4737),
    objectToString = __webpack_require__(2492);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ 5422:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9411),
    isObjectLike = __webpack_require__(6408);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ 4085:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(8091),
    isObjectLike = __webpack_require__(6408);
/** `Object#toString` result references. */


var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;

/***/ }),

/***/ 5382:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(8326),
    isMasked = __webpack_require__(9817),
    isObject = __webpack_require__(2661),
    toSource = __webpack_require__(2059);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ 3663:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(8091),
    isObjectLike = __webpack_require__(6408);
/** `Object#toString` result references. */


var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;

/***/ }),

/***/ 8782:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9411),
    isLength = __webpack_require__(1759),
    isObjectLike = __webpack_require__(6408);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ 7000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(7168),
    nativeKeys = __webpack_require__(4710);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ 4651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(2661),
    isPrototype = __webpack_require__(7168),
    nativeKeysIn = __webpack_require__(4859);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ 2154:
/***/ (function(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ 7300:
/***/ (function(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ 4585:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Uint8Array = __webpack_require__(7141);
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ 7953:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(8503);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/***/ }),

/***/ 9894:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(4585);
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */


function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

/***/ }),

/***/ 4891:
/***/ (function(module) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

/***/ }),

/***/ 2941:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(6620);
/** Used to convert symbols to primitives and strings. */


var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

/***/ }),

/***/ 8500:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(4585);
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ 4897:
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ 5052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(9401),
    baseAssignValue = __webpack_require__(2408);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ 2957:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(5052),
    getSymbols = __webpack_require__(2762);
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

/***/ }),

/***/ 103:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(5052),
    getSymbolsIn = __webpack_require__(8920);
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

/***/ }),

/***/ 3234:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(8503);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 4506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(4160);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ 6419:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ 4239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(4587),
    getSymbols = __webpack_require__(2762),
    keys = __webpack_require__(2512);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ 6583:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(4587),
    getSymbolsIn = __webpack_require__(8920),
    keysIn = __webpack_require__(5848);
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

/***/ }),

/***/ 6022:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(2727);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ 4160:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(5382),
    getValue = __webpack_require__(503);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ 9127:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(1165);
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ 4737:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(6620);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ 2762:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(5959),
    stubArray = __webpack_require__(3179);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ 8920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(112),
    getPrototype = __webpack_require__(9127),
    getSymbols = __webpack_require__(2762),
    stubArray = __webpack_require__(3179);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];

  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }

  return result;
};
module.exports = getSymbolsIn;

/***/ }),

/***/ 8091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(477),
    Map = __webpack_require__(9271),
    Promise = __webpack_require__(6636),
    Set = __webpack_require__(7668),
    WeakMap = __webpack_require__(5731),
    baseGetTag = __webpack_require__(9411),
    toSource = __webpack_require__(2059);
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ 503:
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ 7877:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(5175);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ 925:
/***/ (function(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ 9738:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(5175);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ 2974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(5175);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ 9115:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(5175);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ 1288:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

module.exports = initCloneArray;

/***/ }),

/***/ 4190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(4585),
    cloneDataView = __webpack_require__(9894),
    cloneRegExp = __webpack_require__(4891),
    cloneSymbol = __webpack_require__(2941),
    cloneTypedArray = __webpack_require__(8500);
/** `Object#toString` result references. */


var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

/***/ }),

/***/ 8725:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(4049),
    getPrototype = __webpack_require__(9127),
    isPrototype = __webpack_require__(7168);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ 4274:
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ 2727:
/***/ (function(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ 9817:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(3234);
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ 7168:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ 52:
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ 6675:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2753);
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ 2272:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2753);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ 5575:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2753);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ 3786:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2753);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ 8875:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(9804),
    ListCache = __webpack_require__(941),
    Map = __webpack_require__(9271);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ 9032:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(6022);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ 895:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(6022);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ 167:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(6022);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ 7510:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(6022);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ 5175:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(4160);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ 4710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(1165);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 4859:
/***/ (function(module) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ 6862:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(6419);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ 2492:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ 1165:
/***/ (function(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ 8503:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(6419);
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 4370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(941);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ 7169:
/***/ (function(module) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ 8732:
/***/ (function(module) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ 7017:
/***/ (function(module) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ 7036:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(941),
    Map = __webpack_require__(9271),
    MapCache = __webpack_require__(6510);
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ 2059:
/***/ (function(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ 6647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClone = __webpack_require__(3973);
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */

function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;

/***/ }),

/***/ 8138:
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ 870:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(5422),
    isObjectLike = __webpack_require__(6408);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ 4003:
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ 1589:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(8326),
    isLength = __webpack_require__(1759);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ 8400:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(8503),
    stubFalse = __webpack_require__(7769);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ 8326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9411),
    isObject = __webpack_require__(2661);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ 1759:
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ 3853:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMap = __webpack_require__(4085),
    baseUnary = __webpack_require__(7300),
    nodeUtil = __webpack_require__(6862);
/* Node.js helper references. */


var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;

/***/ }),

/***/ 2661:
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ 6408:
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ 5581:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsSet = __webpack_require__(3663),
    baseUnary = __webpack_require__(7300),
    nodeUtil = __webpack_require__(6862);
/* Node.js helper references. */


var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;

/***/ }),

/***/ 2071:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(8782),
    baseUnary = __webpack_require__(7300),
    nodeUtil = __webpack_require__(6862);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ 2512:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(974),
    baseKeys = __webpack_require__(7000),
    isArrayLike = __webpack_require__(1589);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ 5848:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(974),
    baseKeysIn = __webpack_require__(4651),
    isArrayLike = __webpack_require__(1589);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ 3179:
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ 7769:
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualTree.vue?vue&type=template&id=497f0d22&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "VirtualTree"
  }, [_c('virtual-tree-item', {
    attrs: {
      "props": _vm.props,
      "data": _vm.list,
      "itemSize": 22
    },
    on: {
      "checked": _vm.handleChecked,
      "expanded": _vm.handleExpanded,
      "node-click": _vm.handleNodeClick
    },
    scopedSlots: _vm._u([_vm._l(_vm.$scopedSlots, function (_, slot) {
      return {
        key: slot,
        fn: function (scope) {
          return [_vm._t(slot, null, null, scope)];
        }
      };
    })], null, true)
  })], 1);
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualTreeItem.vue?vue&type=template&id=6e9b3c32&scoped=true&
var VirtualTreeItemvue_type_template_id_6e9b3c32_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    ref: "list",
    staticClass: "virtual-tree-item pointer",
    on: {
      "scroll": function ($event) {
        return _vm.scrollEvent($event);
      }
    }
  }, [_c('div', {
    staticClass: "infinite-list-phantom",
    style: {
      height: _vm.listHeight + 'px'
    }
  }), _c('div', {
    staticClass: "infinite-list",
    style: {
      transform: _vm.getTransform
    }
  }, _vm._l(_vm.visibleData, function (root) {
    return _c('div', {
      key: root[_vm.props.key],
      ref: "items",
      refInFor: true,
      staticClass: "infinite-list-item e-treeitem",
      style: {
        height: _vm.itemSize + 'px',
        lineHeight: _vm.itemSize + 'px'
      }
    }, [_c('div', {
      staticClass: "e-treeitem_content",
      style: {
        'padding-left': (root.level - 1) * _vm.indent + 'px'
      }
    }, [_c('span', {
      staticClass: "treeitem_content_icon pointer",
      class: [root.hasChildren ? '' : 'is-leaf']
    }, [_c('i', {
      staticClass: "iconfont",
      class: [root.expanded ? 'icon-icon-test12' : 'icon-icon-test101'],
      on: {
        "click": function ($event) {
          return _vm.handleExpandIconClick(root, !root.expanded);
        }
      }
    }), root.loadStatus ? _c('i', {
      staticClass: "icon-e-loading"
    }) : _vm._e()]), _c('span', {
      staticClass: "treeitem_checkbox"
    }, [_c('e-checkbox', {
      style: {
        visibility: root.isCheckbox ? 'hidden' : 'visible'
      },
      attrs: {
        "value": root.checked,
        "indeterminate": root.indeterminate
      },
      on: {
        "input": function ($event) {
          return _vm.handleChecked(root, $event);
        }
      }
    })], 1), _c('div', {
      staticClass: "treeitem_content_label",
      class: {
        active: _vm.active === root[_vm.props.key],
        disabled: root.disabled
      },
      attrs: {
        "title": root.text
      },
      on: {
        "click": function ($event) {
          return _vm.handleNodeClick(root);
        }
      }
    }, [_vm._t("default", function () {
      return [_vm._v(" " + _vm._s(root.text) + " ")];
    }, null, root)], 2)])]);
  }), 0)]);
};

var VirtualTreeItemvue_type_template_id_6e9b3c32_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CheckBox.vue?vue&type=template&id=0a4fb506&scoped=true&
var CheckBoxvue_type_template_id_0a4fb506_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('label', {
    staticClass: "e-checkbox",
    class: [_vm.model ? 'e-checkbox-checked' : '', _vm.disabled ? 'e-checkbox-disabled' : '', _vm.indeterminate ? 'e-checkbox-indeterminate' : '']
  }, [_c('span', {
    staticClass: "e-checkbox__input"
  }, [_c('span', {
    staticClass: "e-checkbox__inner"
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.model,
      expression: "model"
    }],
    ref: "checkbox",
    staticClass: "e-checkbox-original",
    attrs: {
      "type": "checkbox",
      "aria-hidden": "true",
      "tabindex": "-1",
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value,
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.value) > -1 : _vm.model
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.model,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = _vm.value,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.model = $$c;
        }
      }
    }
  })]), _c('span', {
    staticClass: "e-checkbox__label"
  }, [_vm._t("default", function () {
    return [_vm._v(_vm._s(_vm.getLabel))];
  })], 2)]);
};

var CheckBoxvue_type_template_id_0a4fb506_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CheckBox.vue?vue&type=script&lang=js&
/* harmony default export */ var CheckBoxvue_type_script_lang_js_ = ({
  name: "ECheckbox",
  props: {
    value: Boolean,
    label: [String, Number, Boolean],
    disabled: Boolean,
    indeterminate: Boolean
  },
  computed: {
    model: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit("input", val);
      }

    },

    getLabel() {
      return this.label ? this.label : "";
    }

  }
});
;// CONCATENATED MODULE: ./src/components/CheckBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CheckBoxvue_type_script_lang_js_ = (CheckBoxvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CheckBox.vue?vue&type=style&index=0&id=0a4fb506&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/CheckBox.vue?vue&type=style&index=0&id=0a4fb506&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/CheckBox.vue



;


/* normalize component */

var component = normalizeComponent(
  components_CheckBoxvue_type_script_lang_js_,
  CheckBoxvue_type_template_id_0a4fb506_scoped_true_render,
  CheckBoxvue_type_template_id_0a4fb506_scoped_true_staticRenderFns,
  false,
  null,
  "0a4fb506",
  null
  
)

/* harmony default export */ var CheckBox = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualTreeItem.vue?vue&type=script&lang=js&

/* harmony default export */ var VirtualTreeItemvue_type_script_lang_js_ = ({
  name: "VirtualTreeItem",
  components: {
    ECheckbox: CheckBox
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    itemSize: {
      type: Number,
      default: 33
    },
    indent: {
      type: Number,
      default: 18
    },
    nodeKey: String,
    props: {
      type: Object,

      default() {
        return {
          children: "children",
          label: "label",
          key: "uuid"
        };
      }

    }
  },

  data() {
    return {
      screenHeight: 0,
      startOffset: 0,
      start: 0,
      end: null,
      active: null
    };
  },

  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },

  computed: {
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },

    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`;
    },

    listHeight() {
      return this.data.length * this.itemSize;
    },

    visibleData() {
      return this.data.slice(this.start, Math.min(this.end, this.data.length));
    }

  },
  methods: {
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop;
      this.start = Math.floor(scrollTop / this.itemSize);
      this.end = this.start + this.visibleCount;
      this.startOffset = scrollTop - scrollTop % this.itemSize;
    },

    handleNodeClick(root) {
      if (root[this.props.disabled]) {
        return;
      }

      this.active = root[this.props.key];
      this.$emit("node-click", root);
    },

    handleChecked(root, evt) {
      this.$emit("checked", root, evt);
    },

    handleExpandIconClick(root, evt) {
      this.$emit("expanded", root, evt);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/VirtualTreeItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VirtualTreeItemvue_type_script_lang_js_ = (VirtualTreeItemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualTreeItem.vue?vue&type=style&index=0&id=6e9b3c32&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/VirtualTreeItem.vue?vue&type=style&index=0&id=6e9b3c32&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/VirtualTreeItem.vue



;


/* normalize component */

var VirtualTreeItem_component = normalizeComponent(
  components_VirtualTreeItemvue_type_script_lang_js_,
  VirtualTreeItemvue_type_template_id_6e9b3c32_scoped_true_render,
  VirtualTreeItemvue_type_template_id_6e9b3c32_scoped_true_staticRenderFns,
  false,
  null,
  "6e9b3c32",
  null
  
)

/* harmony default export */ var VirtualTreeItem = (VirtualTreeItem_component.exports);
;// CONCATENATED MODULE: ./src/components/VirtualTreeStore.js
class Store {
  constructor(options) {
    this.data = options.data;
    this.props = options.props;
    this.defaultExpandAll = options.defaultExpandAll;
    this.map = {};
    this.setData(this.data);
    this.index = false;
    this.indexData = [];
  }

  setData(data) {
    this.data = data;
    this.transformData(this.data, 0);
    this.indexData = Object.values(this.data);
  }
  /**
   * 更改属性值
   */


  setValue(id, key, value) {
    this.map[id][key] = value;
  }
  /**
   * 关闭id所有的子节点
   * @param id
   */


  closeAllChildren(id) {
    const node = this.map[id];
    const children = this.props.children;

    const eventDown = arr => {
      arr.forEach(row => {
        row.expanded = false;
        row.childrenCount = 0;

        if (row[children] && row[children].length > 0) {
          eventDown(row[children]);
        }
      });
    };

    eventDown(node[children]);
  }
  /**
   * 通过id获取被勾选的子节点数量
   */


  getCheckedChildrenById(id) {
    const n = this.map[id][this.props.children];
    return n.filter(v => v.checked);
  }
  /**
   * 勾选节点
   * @param ids
   * @param bool
   * @returns 参与勾选的节点id
   */


  setCheckedByKey(ids, bool) {
    const arrid = ids.map(v => this.map[v]);
    ids.forEach(id => {
      const node = this.map[id];
      const children = this.props.children; // 模拟事件循环向下

      const eventDown = arr => {
        arr.forEach(row => {
          arrid.push(row);
          row.checked = bool;

          if (!bool) {
            row.indeterminate = false;
          }

          if (row[children] && row[children].length > 0) {
            eventDown(row[children]);
          }
        });
      }; // 模拟事件循环向上


      const eventUp = (data, indeterminate) => {
        const children = data[this.props.children].length;
        const checkedArr = this.getCheckedChildrenById(data[this.props.key]).length;

        if (checkedArr === 0 && children === 0) {
          data.checked = bool;
        }

        if (checkedArr === 0 && children !== 0) {
          data.checked = false;
        }

        if (children === checkedArr && checkedArr !== 0) {
          data.checked = true;
        }

        if (indeterminate) {
          data.indeterminate = true;
          data.checked = false;
        } else {
          if (checkedArr > 0 && checkedArr < children) {
            data.indeterminate = true;
            data.checked = false;
          } else {
            data.indeterminate = false;
          }
        }

        if (data.parent) {
          eventUp(this.map[data.parent], data.indeterminate || indeterminate);
        }
      };

      eventDown(node[children]);
      eventUp(node);
    });
    return arrid;
  }

  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c === "x" ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }

  setChildrenCount(id, count) {
    const node = this.map[id];

    const eventUp = data => {
      if (!data.childrenCount) data.childrenCount = 0;
      data.childrenCount += count;

      if (data.parent) {
        eventUp(this.map[data.parent]);
      }
    };

    if (this.map[node.parent]) {
      eventUp(this.map[node.parent]);
    }

    if (count > 0) {
      node.childrenCount = count;
    }

    if (count <= 0) {
      node.childrenCount = 0;
    }
  }

  transformData(data, n, parent, parentName) {
    let level = n || 0;
    level++;

    if (data.length > 0) {
      data.forEach(item => {
        item[this.props.key] = item[this.props.key] || this.uuid();
        item.parent = parent;
        item.parentName = parentName ? parentName + " > " + item[this.props.label] : item[this.props.label];
        this.map[item[this.props.key]] = item;
        item.data = JSON.parse(JSON.stringify(item));
        item.checked = typeof item[this.props.checked] !== "undefined" ? item[this.props.checked] : true;
        item.expanded = item.expanded ? item.expanded : false;
        item.indeterminate = typeof item.indeterminate === "undefined" ? false : item.indeterminate;
        item.isCheckbox = item[this.props.isCheckbox] ? item[this.props.isCheckbox] : false;
        item.visible = true;
        item.level = level;
        item.text = item[this.props.label];
        item.load = false;
        item.loadStatus = false;
        item.hasChildren = !!(item[this.props.children] && item[this.props.children].length > 0);
        item.childrenCount = 0;

        if (typeof item[this.props.children] === "undefined") {
          item[this.props.children] = [];
        }

        if (item[this.props.children] && item[this.props.children].length > 0) {
          this.transformData(item[this.props.children], level, item[this.props.key], item.parentName || "");
        }
      });
    }
  }

}


// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(6647);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualTree.vue?vue&type=script&lang=js&



/* harmony default export */ var VirtualTreevue_type_script_lang_js_ = ({
  components: {
    VirtualTreeItem: VirtualTreeItem
  },
  name: "VirtualTree",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,

      default() {
        return {
          children: "children",
          label: "label",
          key: "uuid"
        };
      }

    }
  },

  data() {
    return {
      list: []
    };
  },

  watch: {
    data() {
      this.computedData();
    }

  },

  created() {
    this.computedData();
  },

  methods: {
    computedData() {
      const store = new Store({
        data: cloneDeep_default()(this.data),
        props: this.props
      });
      this.store = store;
      this.list = store.data;
    },

    handleChecked(obj, e) {
      const arr = this.store.setCheckedByKey([obj[this.props.key]], e);
      this.$emit("checked", arr, e);
    },

    handleExpanded(root, e) {
      this.store.setValue(root[this.props.key], "expanded", e);
      const index = this.list.findIndex(v => v[this.props.key] === root[this.props.key]); // 向下展开

      if (e) {
        root[this.props.children].forEach((row, i) => {
          this.list.splice(index + i + 1, 0, row);
        });
        this.store.setChildrenCount(root[this.props.key], root[this.props.children].length);
      } else {
        const length = root.childrenCount;
        this.list.splice(index + 1, length);
        this.store.setChildrenCount(root[this.props.key], -root[this.props.children].length); // 子节点全部关闭

        this.store.closeAllChildren(root[this.props.key]);
      }
    },

    handleNodeClick(root) {
      this.$emit("node-click", root);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/VirtualTree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VirtualTreevue_type_script_lang_js_ = (VirtualTreevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualTree.vue?vue&type=style&index=0&id=497f0d22&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/VirtualTree.vue?vue&type=style&index=0&id=497f0d22&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/VirtualTree.vue



;


/* normalize component */

var VirtualTree_component = normalizeComponent(
  components_VirtualTreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "497f0d22",
  null
  
)

/* harmony default export */ var VirtualTree = (VirtualTree_component.exports);
;// CONCATENATED MODULE: ./src/components/index.js


const install = function (Vue) {
  Vue.component('virtual-tree', VirtualTree);
};

/* harmony default export */ var components = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=virtualtree-vue2.umd.js.map