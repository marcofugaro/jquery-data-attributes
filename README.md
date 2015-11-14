# jquery-data-attributes
> A fixed jQuery .data() method.

It works like the jquery [`.data()`](https://api.jquery.com/jquery.data/) method, but this always stores the values in the element attributes instead of the jQuery cache, as this uses the .attr() method.

#Usage

`<div id="foo" data-example="value">…</div>`

    $('#foo').dataAttributes() // { example: 'value' }
    $('#foo').dataAttributes('example') // 'value'
    $('#foo').dataAttributes('bar', 'another value') // sets the attribute and returns the jquery element

You can also require it with bower

    bower install jquery-data-attributes
