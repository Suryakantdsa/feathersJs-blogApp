import *as feathersAuthentication from '@feathersjs/authentication';
import *as local from '@feathersjs/authentication-local';

import userValidation from '../users/hooks/user-validation.js';
import noToupdateEmail from './hooks/no-toupdate-email.js';
import checkUserIdentity from './hooks/checkUserIdentity.js';

const {authenticate}=feathersAuthentication.hooks
const {hashPassword,protect}=local.hooks

export default {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [hashPassword('password'), userValidation()],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [hashPassword('password'), authenticate('jwt'), noToupdateEmail(), checkUserIdentity()],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
