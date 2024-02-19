import mongoose from 'mongoose';
import logger from './logger.js';

export default function (app) {
  mongoose.connect(
    app.get('mongodb')
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  app.set('mongooseClient', mongoose);
};
