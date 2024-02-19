// Initializes the `post` service on path `/post`
import { Post } from './post.class.js';

import createModel from '../../models/post.model.js';
import hooks from './post.hooks.js';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/post', new Post(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('post');

  service.hooks(hooks);
};
