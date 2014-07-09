jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");

sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	handleListItemSelect: function (evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("Detail", context);
	},
	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	}
});