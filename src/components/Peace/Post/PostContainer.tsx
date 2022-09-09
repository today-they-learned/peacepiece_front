import { BannerBox } from "components/common";
import { ArticleType } from "types";
import Post from "./Post";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";

interface Props {
  article: ArticleType;
}

const PostContainer = (props: Props) => {
  const { article } = props;
  return (
    <BannerBox width="52.25rem" padding="1.5rem 2rem 2rem 2rem">
      <Post article={article} />
      <CommentInput />
      <CommentContainer />
    </BannerBox>
  );
};

export default PostContainer;
