sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("a24c266.controller.App", {
            
            onInit: function () {

            },

            onShowMessage: function () {
                MessageBox.information("¿Desea continuar la operación?",{
                    actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                    emphasizedAction: MessageBox.Action.YES,
                    onClose: this._action.bind(this)
                })
            },

            _action: function () {
                MessageToast.show("Hello");
            }
        });
    });
