/**
 * General functions, not all of which are utilities,
 * but I don't want to use the word "miscellaneous" either because it is meaningless, and
 * "TBD" is even worse, so ... here are some utilities and what not.
 *
 */
"use strict";
/**
 * Sometimes we just need to know what a thing is.
 * There seems to be a bit of confusion here!
 * We can use either typeof or instanceof.
 * References:
 *   typeof - Javascript: The Good Parts, Ch. 3 Reflection
 *   instanceof - Principles of OO JS, Ch. 1 Identifying Reference Types, Identifying Arrays
 *   classof - JS The Definitive Guide, Ch. 6, The class Attribute
 */
function whatItIs( it ) {
	var typeofIt = typeof( it );
//	console.log( "\twhatItIs: typeof it = \"" + typeof it + "\"" );
	if ( typeofIt === "object" || typeofIt === "Object" ) {
		if ( it === null ) {
			typeofIt = "null";
		}
		else if ( it instanceof Array ) {
			typeofIt = "Array";
		}
	//	else if ( it instanceof Function ) {
	//		typeofIt = "Function";  // not needed(?) (typeof should return "function")
	//	}
		else {
			typeofIt = Object.prototype.toString.call(it).slice(8,-1);  // "classof"
		}
	}
//	console.log( "\twhatItIs: returning \"" + typeofIt + "\"" );
	return typeofIt;
}
