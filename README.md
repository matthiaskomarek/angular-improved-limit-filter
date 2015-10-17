# Angular Improved Limit Filter
[![Build Status](https://travis-ci.org/matthiaskomarek/angular-improved-limit-filter.svg)](https://travis-ci.org/matthiaskomarek/angular-improved-limit-filter) [![Code Climate](https://codeclimate.com/github/matthiaskomarek/angular-improved-limit-filter/badges/gpa.svg)](https://codeclimate.com/github/matthiaskomarek/angular-improved-limit-filter)

Limit given string to max chars but keep full words

## Requirements

- AngularJS

## Usage


Download from Github. File is located at the dist folder.


Load the script files in your application:

```html
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="path/to/file/improvedLimitFilter.js"></script>
```

Add the specific module to your dependencies:

```javascript
angular.module('myApp', ['mk.improvedLimitFilter', ...])
```

Use it as filter and specify max chars and an optional suffix

```
<p> {{ stringToLimit | improvedLimit:20:'...'}} </p>
```

