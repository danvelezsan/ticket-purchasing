/**
 * Formats a string with the passed-in arguments.
 * E.g.: format("Hello {0} {1}", "Pepito", "Pérez")
 * @param {string} str - The string to be formated.
 * @param {object|object[]} args - Args to be replaced into the string.
 * @returns {string}
 */
export const format = (str, ...args) => {
    let formatedStr = str;
    args.forEach((value, index) => {
        while (formatedStr.indexOf(`{${index}}`) >= 0) {
            formatedStr = formatedStr.replace(`{${index}}`, value);
        }
    });
    return formatedStr;
};

export const formatUrlParam = (url, ...paramValues) => paramValues.reduce(
    (url, value) => url.replace(/:[a-zA-Z]+/, value),
    url
);
