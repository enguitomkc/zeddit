

export const getSubData = (rawData) => {
    const rawPosts = rawData.data.children;
    const posts = rawPosts.map((rawPost)=>{
        const post = {
            id: rawPost.data.id,
            title: rawPost.data.title,
            body: rawPost.data.selftext,
            numComments: rawPost.data.num_comments,
            ups: rawPost.data.ups,
            downs: rawPost.data.downs,
        }

        return post;
    })

    return posts;
}