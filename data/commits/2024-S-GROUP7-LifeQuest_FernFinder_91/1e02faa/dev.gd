	var maininstance = Main.new()# Create an instance of the main script
	maininstance.name = "test_displayHide"
	options.name = "options"
	menu.name = "menu"
	add_child(maininstance)
	maininstance.add_child(menu)
	maininstance.add_child(options)
	maininstance.displayHide(menu, options) #runs the function displayHide 
	maininstance.displayHide(options, menu)
	maininstance.name = "button_press_test"
	add_child(maininstance)
	options.name = "options"
	menu.name = "menu"
	audio.name = "audio"
	video.name = "video"
	maininstance.add_child(menu)
	maininstance.add_child(options)
	maininstance.add_child(audio)
	maininstance.add_child(video)
