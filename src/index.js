const reverse = (number) =>
  +number.toString().replace('-', '').split('').reverse().join('');

module.exports = reverse;
