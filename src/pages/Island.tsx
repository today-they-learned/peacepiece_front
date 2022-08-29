import { useState } from "react";
import IslandViewer from "components/Island/IslandViewer";

const items = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 93, 0, 94, 0, 0, 0, 0],
  [0, 107, 0, 0, 0, 0, 0, 0],
  [0, 91, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 92, 0, 0, 0, 0, 107, 0],
  [0, 0, 93, 94, 93, 94, 95, 96, 97],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

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

const extraTerrainMap = [
  ["gr", "gr", "gr", "gr", "gr"],
  ["r", "gr", "rb", "rb", "rb"],
  ["r", "gr", "rb", "gr", "rb"],
  ["r", "gr", "rb", "rb", "rb"],
];

const extraItems = [
  [0, 0, 0, 0, 0],
  [0, 93, 0, 94, 0],
  [0, 107, 0, 0, 0],
  [0, 91, 0, 0, 0],
];

const Island = () => {
  const [mapState, setMapState] = useState(terrainMap);
  const [itemsState, setItemsState] = useState(items);
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log("click!");
    setMapState(extraTerrainMap);
    setItemsState(extraItems);
  };
  return (
    <div>
      내소개
      <button onClick={handleClick} style={{ color: "white" }}>
        이거 누르면 맵 바뀜
      </button>
      <IslandViewer terrainMap={mapState} items={itemsState} />
    </div>
  );
};

export default Island;
