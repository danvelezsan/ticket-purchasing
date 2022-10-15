/**
 * Checks if tow dates are in the same day
 * @param {Date} first
 * @param {Date} second
 * @returns {bool}
 */
export const datesAreOnSameDay = (first, second) => first.getFullYear() === second.getFullYear()
        && first.getMonth() === second.getMonth()
        && first.getDate() === second.getDate();
