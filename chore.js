/*:
	@module-configuration:
		{
			"packageName": "chore",
			"fileName": "chore.js",
			"moduleName": "chore",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/chore.git",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"child_process": "childprocess"
		}
	@end-include
*/
var chore = function chore( command, callback ){
	/*:
		@meta-configuration:
			{
				"command:required": "string",
				"callback:optional": "Callback"
			}
		@end-meta-configuration
	*/

	var task = childprocess.exec( command,
		function onResult( error, output, errorOutput ){
			if( typeof errorOutput != undefined ||
				errorOutput !== null )
			{
				errorOutput = errorOutput.toString( ).trim( );
			}

			if( error || errorOutput ){
				error = error || errorOutput && new Error( errorOutput );
			}

			callback( error, !!error );
		} );
};

var childprocess = require( "child_process" );
( module || { } ).exports = chore;