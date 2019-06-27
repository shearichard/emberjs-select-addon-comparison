# Ember.js Select Add-on Comparison

A comparision of ember.js addons to provide and manage a SELECT element in your templates

## Implemented

* [ember-select-light](https://www.emberobserver.com/addons/ember-select-light)
* [ember-power-select](https://ember-power-select.com/)

## Yet To Be Implemented

* [emberx-select](https://www.emberobserver.com/addons/emberx-select)
* [ember-select-box](https://www.emberobserver.com/addons/ember-select-box)
* [ember-advanced-combobox](https://www.emberobserver.com/addons/ember-advanced-combobox)

## Scope

The intention is to allow the user to add an instance of the  `Guest` model through five different forms, one for each of the add-ons to be covered. 

The `nationality` property of `Guest` will be associated with the select element. 

The result of using the form will be a row in the Data-Store, no attempt is made to write to a backend beyond that. 

### Filter/Search

Where supported by the add-on the form will, within the select element,  support a filter/search of the potential values for the `nationality` property. 

## Credits

Credit is due to the authors of each of the five add-ons listed above.

The starting point for the project is a fork of the ['YoEmber' project](https://yoember.com/).

The API endpoint used by for the 'Search' facility is courtesy of ['restcountries.eu'](https://restcountries.eu) .


