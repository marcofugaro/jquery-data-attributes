# jquery-data-attributes
> A fixed jQuery .data() method.

It works like the jquery [`.data()`](https://api.jquery.com/jquery.data/) method, but this always stores the values in the element attributes instead of the jQuery cache, as this uses the .attr() method.

#Usage
- `.dataAttributes()` to retrieve every data attribute of the element in an object
- `.dataAttributes('example')` to retrieve a specific data attribute
- `.dataAttributes('example', 'value')` to set a data attribute, the element will have an attribute `data-example="value"`

You can require it also with bower
    bower install jquery-data-attributes