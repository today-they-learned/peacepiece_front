import IslandViewer from "components/Island/IslandViewer";

const terrainMap = [
  ["gr", "gr", "gr", "gr", "gr", "gr", "rb", "gr", "gr"],
  ["r", "gr", "rb", "rb", "rb", "rb", "rb", "gr", "gr"],
  ["r", "gr", "rb", "gr", "gr", "gr", "gr", "gr", "gr"],
  ["r", "gr", "rb", "rb", "rb", "w", "w", "w", "gr"],
  ["r", "r", "r", "gr", "rb", "w", "w", "w", "gr"],
  ["r", "gr", "r", "gr", "rb", "gr", "gr", "gr", "gr"],
  ["r", "gr", "r", "r", "r", "r", "r", "r", "r"],
  ["r", "gr", "r", "gr", "rb", "b", "b", "b", "gr"],
  ["r", "gr", "r", "gr", "rb", "b", "b", "b", "gr"],
  ["r", "gr", "r", "gr", "rb", "b", "b", "b", "gr"],
];

const Island = () => {
  return (
    <div>
      내소개
      <IslandViewer terrainMap={terrainMap} />
    </div>
  );
};

export default Island;
