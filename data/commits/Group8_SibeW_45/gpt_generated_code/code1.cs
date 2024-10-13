using Unity.LEGO.Minifig;

// Instantiate the minifigure controller
OneButtonMinifigController minifigController = new OneButtonMinifigController();

// Set up movement and rotation settings
minifigController.startMovementType = OneButtonMinifigController.StartMovementType.Continuously;
minifigController.startRotationType = OneButtonMinifigController.StartRotationType.Angle;

// Update the controller
minifigController.Start();
minifigController.Update();