/* jshint node: true */

/*
 * expose
 */

module.exports = heredoc;

/*
 * heredoc
 *
 * @param {Function} fn
 * @param {Object} opts
 * @return {String}
 */

function heredoc(fn, opts) {
  opts = opts || {};

  var str = fn.toString().match(/\/\*(.|\n|\s)+\*\//g)[0]
    .replace(/^\/\*+\n/, '')
    .replace(/\n(\s+)?\*\/$/, '');

  if (opts.stripLeading) {
    str = stripLeading(str, opts.stripLeading);
  }

  return str;
}

/*
 * stripLeading removes leading spaces based on first line offset or by defined number
 *
 * @param {String} str
 * @param {Number} num
 * @return {String}
 */

function stripLeading(str, num) {
  var lines = str.split(/\n/);
  if (lines.length === 0) {
    return str;
  }
  
  var offset;
  if ("number" === typeof num) {
    offset = num;
  } else {
    offset = lines[0].match(/^\s*/)[0].length;
  }

  if (offset === 0) {
    return str;
  }

  var sliced = slice(lines, offset);
  if (sliced.length > 0) {
    return sliced.join("\n");
  }

  return str;
}

/*
 * slice slices each item in the array of byte offset
 *
 * @param {Array} lines (array of strings)
 * @param {Number} offset
 * @return {Array}
 */

function slice(lines, offset) {
  var i = 0;
  var len = lines.length;
  var sliced = [];
  for(; i<len; i++) {
    var line = lines[i];
    sliced.push(line.slice(offset));
  }
  return sliced;
}

