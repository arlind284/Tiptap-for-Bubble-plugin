function(instance, properties, context) {

	if (instance.data.active_nodes.includes("Bold")) {
		instance.data.editor.chain().focus().toggleBold().run();
	} else { console.log("tried to Bold, but extension is not active.") };

}