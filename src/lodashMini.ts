/**
* lodashMini.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Imports a subset of lodash library needed for SimpleRestClient
*/

import clone = require('lodash/clone');
import isString = require('lodash/isString');
import defaults = require('lodash/defaults');
import remove = require('lodash/remove');
import findIndex = require('lodash/findIndex');
import attempt = require('lodash/attempt');
import forEach = require('lodash/forEach');
import map = require('lodash/map');
import isObject = require('lodash/isObject');
import pull = require('lodash/pull');

export interface Dictionary<T> {
    [index: string]: T;
}

export {
    clone,
    isString,
    defaults,
    remove,
    findIndex,
    attempt,
    forEach,
    map,
    isObject,
    pull
};
