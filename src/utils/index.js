/**
 * @description Utility function for rounding decimals. Rounding issues are avoided by using numbers represented in exponential notation.
 * @function formatAmount
 * @param {number} value
 * @param {number} decimals - number of decimal places
 * @returns rounded value with specified number of decimal places
 */
export const formatAmount = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

/**
 * @function formatDate
 * @param {*} timestamp - timestamp to be transformed
 * @returns {Date} transformed date in format 'Day Mon DD, YYYY'
 */
export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toDateString();
};
