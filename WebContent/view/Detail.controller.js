jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");

sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},

	onBeforeRendering:function(){
		this.byId("CategoryForm").bindElement("Categories/value/0");		
		this.byId("SupplierForm").bindElement("Supplier");
		
	},
	
	handleLineItemPress : function(evt){
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	}
	
	
});