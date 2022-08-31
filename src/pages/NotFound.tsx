import { useArticleData } from "hooks/queries/article";
import { FlexButton } from "components/common";

const NotFound = () => {
  const { data, refetch } = useArticleData(1);

  return (
    <>
      404 NotFound
      <FlexButton onClick={() => refetch()}>refetch</FlexButton>
      <div style={{ marginBottom: "3rem" }} />
    </>
  );
};

export default NotFound;
