/* jshint node: true */

/*
 * expose
 */

module.exports = heredoc;

/*
 * heredoc
 *
 * @param {Function} fn
 * @return {String}
 */

function heredoc(fn) {
  return fn.toString().match(/\/\*(.|\n|\s)+\*\//g)[0]
    .replace(/^\/\*+/, '')
    .replace(/\*\/$/, '');
}

