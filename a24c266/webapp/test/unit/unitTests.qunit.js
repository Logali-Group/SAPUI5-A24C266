/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"a24c266/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
