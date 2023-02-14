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
  let splitArr = expr.match(/(.{1,10})/gim) || ''
  let result = []
  console.log(splitArr)
  for (let i = 0; i < splitArr.length; i++){
    if (splitArr[i] == '**********'){
      result.push(' ')
    } else {
        splitArr[i] = splitArr[i].replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
        result.push(MORSE_TABLE[splitArr[i]])
    }
  }
  return result.join('')
}
module.exports = {
  decode
}