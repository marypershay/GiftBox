function inherit(C, P){
	var F = function(){};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.prototype.constructor = C;
    C.uber = P.prototype
}

exports.inherit = inherit;