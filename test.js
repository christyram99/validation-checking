const test = require('ava')
const ValidationChecking = require('./index')

const testVariable = 'ram'
const testUndefinedVariable = undefined
const testNullVariable = null
const emptyObject = {}
const testObject = { a: 1 }
const arrayWithNullValues = [ 1, 2, null, 4 ]
const arrayWithFullNullValues = [ null, null ]
const array = [1, 2, 3, 4]
const emptyArray = []

test('undefined checking', t => {
  t.true(ValidationChecking.isUndefined(testUndefinedVariable))
  t.false(ValidationChecking.isUndefined(testVariable))
})

test('null checking', t => {
  t.true(ValidationChecking.isNull(testNullVariable))
  t.false(ValidationChecking.isNull(testVariable))
})

test('undefined or null checking', t => {
  t.true(ValidationChecking.isUndefinedOrNull(testNullVariable))
  t.false(ValidationChecking.isUndefinedOrNull(testVariable))
})

test('object checking', t => {
  t.true(ValidationChecking.isObjectEmpty(emptyObject))
  t.true(ValidationChecking.isObjectUndefinedOrNullOrEmpty(testNullVariable))
  t.false(ValidationChecking.isNull(testObject))
})

test('array checking', t => {
  t.true(ValidationChecking.isAnyElementUndefinedOrNull(arrayWithNullValues))
  t.true(ValidationChecking.isAllElementsUndefinedOrNull(arrayWithFullNullValues))
  t.true(ValidationChecking.isAllElementsNonUndefinedAndNull(array))
  t.false(ValidationChecking.isAllElementsNonUndefinedAndNull(arrayWithNullValues))
  t.false(ValidationChecking.isArrayEmpty(array))
  t.true(ValidationChecking.isArrayEmpty(emptyArray))
})