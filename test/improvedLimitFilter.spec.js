'use strict';

describe('filter words by count', function() {

	var stringToLimit;

	beforeEach(module('mk.improvedLimitFilter'));

	beforeEach(inject(function() {

		stringToLimit = 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

	}));

	it('should have an improvedLimit filter', inject(function ($filter) {
		expect($filter('improvedLimit')).not.toBeNull();
	}));

	it('string should not return more characters as specified', inject(function (improvedLimitFilter) {
		expect(improvedLimitFilter(stringToLimit, 20).length).toBeLessThan(21);
	}));

	it('string should return only complete words', inject(function (improvedLimitFilter) {
		expect(improvedLimitFilter(stringToLimit, 20)).toBe('At vero eos et');
	}));

	it('string should return substring with suffix', inject(function (improvedLimitFilter) {
		expect(improvedLimitFilter(stringToLimit, 20, '...')).toBe('At vero eos et...');
	}));

	it('string should return substring without suffix if full length', inject(function (improvedLimitFilter) {
		expect(improvedLimitFilter(stringToLimit, 1000, '...')).toBe(stringToLimit);
	}));

});
