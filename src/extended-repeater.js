const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = str + '';
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|'
  let addition = ''
  if(options.additionRepeatTimes > 1 && options.addition !== undefined){
      options.addition = options.addition + options.additionSeparator;
      addition = options.addition.repeat(options.additionRepeatTimes);
      addition = addition.slice(0, addition.length-options.additionSeparator.length);
  }
  else if (options.addition){
      addition = options.addition;
  }
  if(options.repeatTimes){
      string = string + addition + options.separator;
      string = string.repeat(options.repeatTimes);
      string = string.slice(0, string.length - options.separator.length);
  }
  else {
      string = string + addition;
  }
  return string;
}

module.exports = {
  repeater
};
