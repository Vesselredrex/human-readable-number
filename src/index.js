module.exports = function toReadable(number) {
  // Arrays for number words
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  // Handle special case for zero
  if (number === 0) {
    return 'zero';
  }

  let result = '';
  let num = number; // Use a new variable to avoid reassigning parameter

  // Handle hundreds
  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    result += `${ones[hundreds]} hundred`;
    num %= 100;

    if (num > 0) {
      result += ' ';
    }
  }

  // Handle tens and ones
  if (num >= 20) {
    const tensDigit = Math.floor(num / 10);
    const onesDigit = num % 10;

    result += tens[tensDigit];

    if (onesDigit > 0) {
      result += ` ${ones[onesDigit]}`;
    }
  } else if (num > 0) {
    // Handle numbers from 1-19
    result += ones[num];
  }

  return result;
};
