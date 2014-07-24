/* jshint node: true */

var assert = require("chai").assert;
var heredoc = require("..");

describe("--", function() {
  it("returns the comment as a string block", function() {
    var str = heredoc(function() {/*
      # Hello World!

      * one
      * two
    */});

    assert.equal(str, "      # Hello World!\n\n      * one\n      * two");
  });

  it("strips the leading spacing based on the first line", function() {
    var str = heredoc(function() {/*
      # Hello World!

          * one
          * two
    */}, {stripLeading: true});

    assert.equal(str, "# Hello World!\n\n    * one\n    * two");
  });

  it("strips the leading spacing based on defined number", function() {
    var str = heredoc(function() {/*
      # Hello World!

          * one
          * two
    */}, {stripLeading: 4});

    assert.equal(str, "  # Hello World!\n\n      * one\n      * two");
  });
});
