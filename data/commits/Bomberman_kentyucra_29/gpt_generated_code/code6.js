   import pino from 'pino';

   const logger = pino({
     level: 'info',
   });

   // Usage
   logger.info('Info level log');
   logger.error('Error level log');