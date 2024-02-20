// import '@feathersjs/authentication';
import *as feathersAuthentication from '@feathersjs/authentication';
import likeValidation from './hooks/like-validation.js';
import { disallow } from 'feathers-hooks-common';
const {authenticate}=feathersAuthentication.hooks

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [likeValidation()],
    update: [],
    patch: [disallow()],
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
