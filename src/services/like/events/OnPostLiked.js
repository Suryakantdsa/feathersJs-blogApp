const OnPostLiked = async (result, context) => {
    const { post } = result;
    const { app } = context

    const likeCount = await app.service("like").find({
        query: {
            post,
            status: 1
        }
    }).then(
        res => res.total
    );
    // console.log(likeCount, post.toString())

    await app.service("post")._patch(post, { likeCount });
    //errorEncounted error: Unhandled Rejection at: Promise  {"hook":{"data":{"likeCount":1},"id":"65d2073bbc0f6a28ee5b9c82","method":"patch","params":{},"path":"post","type":"before"}}    
    // ==> this is beacuse of wrong noUserUpdate logic checking the user id form the param and validating 
}
export default OnPostLiked