const assertEquals = require('./assert-equals')


  describe('when expected and actual are the same string', () => {
    it('throws an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    });
  });

  describe('when expected and actual are different strings', () => {
    it('throws an error', () => {
      expect(() => assertEquals('abcdef', 'abc')).toThrow('Expected "abcdef" but found "abc"');
    });
  });

  describe('when expected and actual are the same number', () => {
    it('returns without throwing an error ', () => {
      expect(() => assertEquals(1, 1)).not.toThrow()
    });
  });

  describe('when expected and actual are the different number', () => {
    it('throws an error ', () => {
      expect(() => assertEquals(1, 2)).toThrow('Expected "1" but found "2"')
    });
  });

  describe('when expected and actual are the different type', () => {
    it('throws an error ', () => {
      expect(() => assertEquals(1, '1')).toThrow('Expected type number but found type string')
    });
  });

  describe('when expected and actual are the same length', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(['a', 'b', 'c'], ['a', 'b', 'c'])).not.toThrow()
    });
  });

  describe('when expected and actual are the different length', () => {
    it('throws an error ', () => {
      expect(() => assertEquals(['a', 'b', 'c'], ['a', 'b'])).toThrow('Expected array length 2 but found 3')
    });
  });

  describe('when expected and actual are the different element', () => {
    it('throws an error ', () => {
      expect(() => assertEquals(['a', 'b'], ['a', 'd'])).toThrow('Expected "b" but found "d"')
    });
  });

  describe('when expected and actual are the same element', () => {
    it('throws an error ', () => {
      expect(() => assertEquals(['a', 'b', '1'], ['a', 'b', '1'])).not.toThrow()
    });
  });

  describe('when expected and actual are the different element type', () => {
    it('throws an error ', () => {
      expect(() => assertEquals(['a', 'b', 1], ['a', 'b', '1'])).toThrow('Expected 1 but found "1"')
    });
  });




