// import '@feathersjs/authentication';
import *as feathersAuthentication from '@feathersjs/authentication';
import likeValidation from './hooks/like-validation.js';

const {authenticate}=feathersAuthentication.hooks

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [likeValidation()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
