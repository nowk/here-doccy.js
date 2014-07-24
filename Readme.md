# here-doccy

[![Build Status](https://travis-ci.org/nowk/here-doccy.js.svg?branch=master)](https://travis-ci.org/nowk/here-doccy.js)
[![Code Climate](https://codeclimate.com/github/nowk/here-doccy.js.png)](https://codeclimate.com/github/nowk/here-doccy.js)
[![David DM](https://david-dm.org/nowk/here-doccy.js.png)](https://david-dm.org/nowk/here-doccy.js)

basic heredoc

## Install

    npm install here-doccy

## Example

    var heredoc = require('here-doccy');
    var str = heredoc(function() {/*
    this:
      is:
        - a
        - yaml
    */});

returns

    this:
      is:
        - a
        - yaml

### License

MIT
