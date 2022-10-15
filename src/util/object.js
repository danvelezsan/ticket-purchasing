// @packages
import _ from 'lodash';

/**
 * Makes a copy of an object including a list of properties.
 * @param {Object} source - The object to be copied.
 * @param {string[]} includedProperties - The properties to be included.
 * @returns {Object}
 */
export const copyObjIncludingProps = (source, includedProperties) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Object.keys(source).reduce((copy, propName) => {
        if (includedProperties.includes(propName)) {
            copy[propName] = source[propName];
        }
        return copy;
    }, {});

/**
 * Makes a copy of an object excluding a list of properties.
 * @param {Object} source - The object to be copied.
 * @param {string[]} excludedProperties - The properties to be excluded.
 * @returns {Object}
 */
export const copyObjExludingProps = (source, excludedProperties) =>
    Object.keys(source).reduce((copy, propName) => {
        if (!excludedProperties.includes(propName)) {
            copy[propName] = source[propName];
        }
        return copy;
    }, {});

/**
 * Makes a copy of an object converting all its props to camelCase recursively.
 * @param {Object} source - The object to be copied.
 * @returns {Object}
 */
export const copyObjInCamelCase = (source) => {
    if (Array.isArray(source)) {
        return source.map(item => copyObjInCamelCase(item));
    }
    if (source !== null && source.constructor === Object) {
        return Object.keys(source).reduce((result, key) => ({
            ...result,
            [_.lowerFirst(key)]: copyObjInCamelCase(source[key])
        }), {});
    }
    return source;
};

/**
 * Makes a copy of an object converting all its props to PascalCase recursively.
 * @param {Object} source - The object to be copied.
 * @returns {Object}
 */
export const copyObjInPascalCase = (source) => {
    if (Array.isArray(source)) {
        return source.map(item => copyObjInPascalCase(item));
    }
    if (source !== null && source.constructor === Object) {
        return Object.keys(source).reduce((result, key) => ({
            ...result,
            [_.upperFirst(key)]: copyObjInPascalCase(source[key])
        }), {});
    }
    return source;
};

/**
 * Converts the passed-in object to a editable object. This is useful
 * when you are editing/adding in a form and need to track if all props
 * are valid while the user is editing.
 * E.g: {a: 1} is converted to {a: {valid: true, value: 1}}
 * @param {Object} source - The object to be converted.
 * @param {boolean} isValid - The default value for isValid.
 * @returns {Object}
 */
export const toEditableObject = (source, isValid = true) => {
    const editableObject = {};
    if (source) {
        Object.keys(source).forEach((key) => {
            editableObject[key] = {
                isValid,
                value: source[key]
            };
        });
    }
    return editableObject;
};
