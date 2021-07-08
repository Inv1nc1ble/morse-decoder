const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let result = '';
    while (expr.length > 0) {
      let str = expr.slice(0 , 10);
      expr = expr.slice(10, expr.length);
      arr.push(str);
    }
  
    for (let i = 0; i < arr.length;i ++) {
      result += decodeDigitsToMorse(arr[i]);
    }
    return result;
}

function decodeDigitsToMorse(array) {
    let morse = '';
  
    if (array == '**********') {
      return ' ';
    } else {
  
      let code = Number(array).toString();
  
      while (code.length > 0) {
        code.slice(0, 2) == '10' ? morse += '.' : morse += '-';
        code = code.slice(2, code.length);
      }
    }
    return MORSE_TABLE[morse];
  }

module.exports = {
    decode
}