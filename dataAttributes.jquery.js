/*!
*  jQuery dataAttributes - v1.0.0
*  A fixed jQuery .data() method.
*  https://github.com/marcofugaro/jquery-data-attributes
**/

(function($) {
$.fn.dataAttributes = function(attr, val) {
    if(this.length) {
    	if(val) {
    		return this.attr('data-' + attr, val);
    	} else if(attr) {
    		return this.attr('data-' + attr);
    	} else {
    		var attributes = {}; 
            $.each(this[0].attributes, function(index, attr) {
            	if(attr.name.indexOf('data-') > -1 && attr.value) attributes[ attr.name.slice(5) ] = attr.value;
            }); 
	        return attributes;
        }
    }
};
})(jQuery);