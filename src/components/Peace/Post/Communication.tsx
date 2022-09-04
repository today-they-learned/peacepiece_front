import { BannerBox } from "components/common";
import Post from "./Post";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";

const Communication = () => {
  return (
    <BannerBox>
      <Post />
      <CommentInput />
      <CommentContainer />
    </BannerBox>
  );
};

export default Communication;
