import users from './users/users.service.js';
import post from './post/post.service.js';
import like from './like/like.service.js';
import comment from './comment/comment.service.js';

// eslint-disable-next-line no-unused-vars
export default function (app) {
  app.configure(users);
  app.configure(post);
  app.configure(like);
  app.configure(comment);
};
