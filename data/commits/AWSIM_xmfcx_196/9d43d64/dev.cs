using System;
        struct MyTransform
        {
            public Vector3 position;
            public Quaternion rotation;
        }
        
        private MyTransform originalTransform;
        private MyTransform savedTransform;

        private void Start()
        {
            if (vehicle == null)
                vehicle = GetComponent<Vehicle>();
            originalTransform = new MyTransform();
            originalTransform.position = vehicle.transform.position;
            originalTransform.rotation = vehicle.transform.rotation;
            savedTransform = new MyTransform();
            savedTransform.position = vehicle.transform.position;
            savedTransform.rotation = vehicle.transform.rotation;
        }


            // Save the current transform when F7 is pressed
            if (Input.GetKeyDown(KeyCode.F7))
            {
                savedTransform.position = vehicle.transform.position;
                savedTransform.rotation = vehicle.transform.rotation;
            }

            // Set the vehicle's transform to the saved transform when F5 is pressed
            if (Input.GetKeyDown(KeyCode.F5))
            {
                vehicle.transform.position = originalTransform.position;
                vehicle.transform.rotation = originalTransform.rotation;
            }

            if (Input.GetKeyDown(KeyCode.F6))
            {
                vehicle.transform.position = savedTransform.position;
                vehicle.transform.rotation = savedTransform.rotation;
            }