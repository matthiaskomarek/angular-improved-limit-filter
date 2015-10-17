(function() {
	'use strict';

    angular
        .module('mk.improvedLimitFilter', [])
        .filter('improvedLimit', improvedLimit);

    function improvedLimit() {
        return improvedLimitFilter;

        ////////////////

        function improvedLimitFilter(inputString, limit, suffix) {

        	var elements = inputString.split(' ');
        	var limitedElements = [];
        	var count = 0;

        	for (var i = 0; i < elements.length; i++) {
        		var stringLen = elements[i].length;
        		if(count + stringLen >= limit) {
					break;
        		} else {
					limitedElements.push(elements[i]);
        			count += stringLen;

					if(elements.length > 2) {
						count += 1;
					}
        		}
        	}

			var limitedString = limitedElements.join(' ');

			if(limitedString.length < inputString.length && suffix) {
				return limitedString + suffix;
			} else {
				return limitedString;
			}

        }
    }

})();
