// import '@feathersjs/authentication';
import *as feathersAuthentication from '@feathersjs/authentication';
const {authenticate}=feathersAuthentication.hooks
import commentValidate from "./hooks/commentValidate.js"


export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [commentValidate()],
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
