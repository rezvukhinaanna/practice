import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Comments, PostContent } from "./components";
import { useServerRequest } from "../../hooks";
import styled from "styled-components";
import { loadPostAsync } from "../../actions/load-post-async";
import { selectPost } from "../../selectors";

const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.postId));
  }, [dispatch, requestServer, params.postId]);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id}/>
    </div>
  );
};

export const Post = styled(PostContainer)`
  margin: 0px 0;
  padding: 10px 80px;
`;
