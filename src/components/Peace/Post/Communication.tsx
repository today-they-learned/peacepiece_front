import { BannerBox } from "components/common";
import Post from "./PostContainer";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";

const Communication = () => {
  return (
    <BannerBox width="52.25rem">
      <Post />
      <CommentInput />
      <CommentContainer />
    </BannerBox>
  );
};

export default Communication;
