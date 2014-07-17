var addEvent = function(el, evtType, fn) {
	//test for browser compatibility using feature detection
	if (typeof addEventListener !== "undefined") {
		el.addEventListener(evtType, fn, false); //false indicates bubbling rather than capturing
	} else if (typeof attachEvent !== "undefined") {
		el.attachEvent("on" + evtType, fn);
	} else {
		el["on" + evtType] = fn;
	}
};

var removeEvent = function(el, evtType, fn) {
	//test for browser compatibility using feature detection
	if (typeof removeEventListener !== "undefined") {
		el.removeEventListener(evtType, fn, false); //false indicates bubbling rather than capturing
	} else if (typeof detachEvent !== "undefined") {
		el.detachEvent("on" + evtType, fn);
	} else {
		el["on" + evtType] = null;
	}
};

var getTarget = function(evt) {
	if (typeof evt.target !== "undefined") {
		return ent.target;
	} else {
		return evt.srcElement;
	}
};

var preventDefault = function(evt) {
	if (typeof evt.preventDefault !== "undefined") {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
};