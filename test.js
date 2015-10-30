import test from 'ava'
import singleTrailingNewline from './'

const strings = [
  'foo\nbar',
  'foo\nbar\n',
  'foo\nbar\n\n',
  'foo\nbar\n\r\n',
  'foo\nbar\n\n\n\r\n\r\n'
]

const carriageReturnStrings = [
  'foo\r\nbar',
  'foo\r\nbar\r\n',
  'foo\r\nbar\r\n\r\n',
  'foo\r\nbar\n\r\n',
  'foo\r\nbar\r\n\r\n'
]

test('single-trailing-newline detects \\n strings and ensures only one trailing newline', t => {
  t.plan(strings.length)

  strings.forEach(str => {
    t.same(singleTrailingNewline(str), 'foo\nbar\n')
  })
})

test('single-trailing-newline detects \\r\\n strings and ensures only one trailing newline', t => {
  t.plan(carriageReturnStrings.length)

  carriageReturnStrings.forEach(str => {
    t.same(singleTrailingNewline(str), 'foo\r\nbar\r\n')
  })
})
