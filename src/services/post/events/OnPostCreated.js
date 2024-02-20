const OnPostCreated = async (result, context) => {
    const { user } = result;
    const { app } = context

    const blogCount = await app.service("post").find({
        query: {
            user,
            status: 1
        }
    }).then(
        res => res.total
    );
    // console.log(likeCount, post.toString())

    await app.service("users")._patch(user, { blogCount });

    //errorEncounted error: Unhandled Rejection at: Promise  {"hook":{"data":{"likeCount":1},"id":"65d2073bbc0f6a28ee5b9c82","method":"patch","params":{},"path":"post","type":"before"}}   

    // ==> this is beacuse of wrong noUserUpdate logic checking the user id form the param and validating 
}
export default OnPostCreated