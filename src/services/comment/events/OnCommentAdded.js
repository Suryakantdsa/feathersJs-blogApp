const OnCommentAdded = async (result, context) => {
    const { post } = result;
    const { app } = context
    console.log(result)
    const commentCount = await app.service("comment").find({
        query: {
            post,
            status: 1
        }
    }).then(
        res => res.total
    );
    // console.log(commentCount, post.toString()) 
    // errorEncounted:here commentCOunt was zero because is not able to find the any data match status by default not 1

    await app.service("post").patch(post, { commentCount });



}
export default OnCommentAdded