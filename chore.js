/*:
	@module-configuration:
		{
			"fileName": "chore.js",
			"moduleName": "chore",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:
		This chore function is a simple command execution engine
			with the following features:
			1. Execute command.
			2. Return on error.
			3. Do not listen to output stream.

		This is a global function and I hope that the word "chore",
			will not be used anywhere in the vscode environment.
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