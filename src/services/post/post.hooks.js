import *as feathersAuthentication from '@feathersjs/authentication';
import postFieldValidation from './hooks/post-field-validation.js';
import isLiked from './hooks/isLiked.js';
import isCommented from './hooks/isCommented.js';
import checkPostIdentity from './hooks/checkPostIdentity.js.js';

const {authenticate}=feathersAuthentication.hooks

export default{
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [postFieldValidation()],
    update: [],
    patch: [checkPostIdentity()],
    remove: [checkPostIdentity()]
  },
  after: {
    all: [],
    find: [isLiked(),isCommented()],
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
