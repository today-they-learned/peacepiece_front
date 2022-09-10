import { useParams } from "react-router-dom";
import { useArticleData } from "hooks/queries/article";
import PostCard from "components/Peace/Post/PostCard";

const PieceDetail = () => {
  const { id } = useParams();
  const { data } = useArticleData(id);
  return <PostCard article={data.data} />;
};

export default PieceDetail;
