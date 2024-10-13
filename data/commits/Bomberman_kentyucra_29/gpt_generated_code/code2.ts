   class Logger {
     static isDebugMode = true; // Set this based on environment or other conditions

     static log(message: any) {
       if (Logger.isDebugMode) {
         console.log(message);
       }
     }

     static error(message: any) {
       if (Logger.isDebugMode) {
         console.error(message);
       }
     }

     static warn(message: any) {
       if (Logger.isDebugMode) {
         console.warn(message);
       }
     }
   }

   // Usage
   Logger.log("This will only show if debug mode is true");