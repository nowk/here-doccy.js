# here-doccy

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

