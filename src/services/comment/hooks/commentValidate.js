// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html


import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app } = context
    const {user,post,comment}=data
    // console.log(data)
    
    if (!post) {
      throw new BadRequest("PostId is required")
    }
    if (!data.user) {
      throw new BadRequest("userId is required")
    }
    if (!comment) {
      throw new BadRequest("comment field is required")
    }
    await app.service('users').get(user).catch(() => {
      throw new BadRequest("user is invaild")
    })
    await app.service('post').get(post).catch(() => {
      throw new BadRequest("Post is invaild")
    })
    // console.log(user,post)

    // await app.service("comment").find(
    //   {
    //     query: {
    //       user,
    //       post,
    //       status:1
    //     }
    //   }
    // ).then(
    //   (res)=>{
    //     if(res.total){
    //       throw new BadRequest("You have already like the post")
    //       // it was not working beacause im passing status as 1 but in like modole i hav nt set status as 1
    //     }
    //   }
    // )

    // app.service("like").find(param)
    // app.service("like").create(data,param)
    // app.service("like").get(id,param)
    // app.service("like").patch(id,data,param)
    // app.service("like").remove(id,param)
   

    return context;
  };
};
