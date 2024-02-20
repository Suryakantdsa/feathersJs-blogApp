// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html


import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app,params } = context
    const {post}=data
    const {_id:userId}=params?.params
    // getting user id from accessToken
    data.user=userId
    data.status=1

    if (!post) {
      throw new BadRequest("PostId is required")
    }
    await app.service('post')._get(post).catch(() => {
      throw new BadRequest("Post is invaild")
    })
    await app.service("like")._find(
      {
        query: {
          user:userId,
          post,
          status:1
        }
      }
    ).then(
      (res)=>{
        console.log(res)
        if(res.total){
          throw new BadRequest("You have already like the post")
        }
      }
    )
    return context;
  };
};
