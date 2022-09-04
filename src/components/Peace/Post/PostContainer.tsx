import { BannerBox } from "components/common";
import Post from "./Post";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";

const PostContainer = () => {
  return (
    <BannerBox width="52.25rem" padding="2rem">
      <Post />
      <CommentInput />
      <CommentContainer />
    </BannerBox>
  );
};

export default PostContainer;
