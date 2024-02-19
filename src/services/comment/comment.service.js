// Initializes the `comment` service on path `/comment`
import { Comment } from './comment.class.js';

import createModel from '../../models/comment.model.js';
import hooks from './comment.hooks.js';
import OnCommentAdded from './events/onCommentAdded.js';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/comment', new Comment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('comment');

  service.on("created",OnCommentAdded)
  service.on("removed",OnCommentAdded)
  service.hooks(hooks);
};
