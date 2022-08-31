import { useArticleData } from "hooks/queries/article";

const NotFound = () => {
  const { data, refetch } = useArticleData(1);

  return (
    <>
      404 NotFound
      <button onClick={() => refetch()}>refetch</button>
      <div style={{ marginBottom: "3rem" }} />
    </>
  );
};

export default NotFound;
