/*global describe,it,beforeEach,expect*/

'use strict'

var simplerWords = require('../index')
var longWord = 'additional'
var shortWord = 'more'
var shortWords = ['more', 'extra']

describe('simpler-words', function () {

  describe('a long word', function () {
    it('should have suggestions', function () {
      var results = simplerWords(longWord)
      expect(results.length).toEqual(2)
      expect(results).toEqual(shortWords)
    })
  })

  describe('a short word', function () {
    it('doesn\'t need suggestions', function () {
      var results = simplerWords(shortWord)
      expect(results.length).toEqual(0)
      expect(results).toEqual([])
    })
  })

  describe('bad input', function () {
    it('should be ignored', function () {
      var results = simplerWords('')
      expect(results.length).toEqual(0)
      expect(results).toEqual([])
    })
  })
})
