function assertEquals(expect, actual) {
  // String check
  // Check whether both expect and actual are strings, if true, check if expect is not equal to actual.
  // If they are not the same, throw an error.
  // First attempt
  if (typeof expect === 'string' && typeof actual === 'string') {
      if (expect !== actual) {
          throw new Error(`Expected ${expect} but found ${actual}`);
      }
  }

  // Refactored version for string check
  if (typeof expect === 'string' && expect !== actual) {
      throw new Error(`Expected ${expect} but found ${actual}`);
  }

  // Number check
  if (typeof expect === 'number' && expect !== actual) {
      throw new Error(`Expected ${expect} but found ${actual}`);
  }

  // Type check
  if (typeof expect !== typeof actual) {
      throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`);
  }
}

// Array length check 
// Check whether both expect and actual are arrays.
// If true, then check expect.length and actual.length.
// If the lengths are different, throw an error.
if (Array.isArray(expect) && Array.isArray(actual)) {
  if (expect.length !== actual.length) {
      throw new Error(`Expected array length ${expect.length} but found ${actual.length}`);
  }
}

// Array element check 
// Check whether both are arrays.
// If true, loop through each element.
// If expect[i] is not equal to actual[i], throw an error.
if (Array.isArray(expect) && Array.isArray(actual)) {
  for (let i = 0; i < expect.length; i++) {
      if (expect[i] !== actual[i]) {
          throw new Error(`Expected ${expect[i]} but found ${actual[i]}`);
      }
  }
}

// Check whether both are arrays.
// If true, loop through each element.
// If the type of each expect element is not equal to the type of the actual element, throw an error.
if (Array.isArray(expect) && Array.isArray(actual)) {
  for (let i = 0; i < expect.length; i++) {
      if (typeof expect[i] !== typeof actual[i]) {
          throw new Error(`Expected ${typeof expect[i]} but found ${typeof actual[i]}`);
      }
  }
}

module.exports = assertEquals;
