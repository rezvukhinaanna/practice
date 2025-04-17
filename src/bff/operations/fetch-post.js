import { getPost, getComments, getUsers } from "../api";

export const fetchPost = async (postId) => {
  const post = await getPost(postId);
  console.log('fetch-post',post)
  const comments = await getComments(postId);
  console.log('fetch-post1',post)
  const users = await getUsers();

  const commentsWithAuthor = comments.map((comment) => {
    const user = users.find(({ id }) => id === comment.authorId);
    return {
      ...comment,
      author: user?.login,
    };
  });
  console.log('fetch-post',postId)
  return {
    error: null,
    res: {
      ...post,
      comments: commentsWithAuthor,
    },
  };
};
