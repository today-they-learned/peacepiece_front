import { useParams } from "react-router-dom";
import { useArticleData } from "hooks/queries/article";
import PostContainer from "components/Peace/Post/PostContainer";

const PieceDetail = () => {
  const { id } = useParams();
  const { data } = useArticleData(id);
  return <PostContainer article={data.data} />;
};

export default PieceDetail;
