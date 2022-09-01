import { useState } from "react";
import IslandViewer from "components/Island/IslandViewer";
import Maps from "constants/Island/Maps";

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

const extraItems = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const Island = () => {
  const [mapState, setMapState] = useState(Maps[0]);
  const [itemsState, setItemsState] = useState(extraItems);
  const [mapIdx, setMapIdx] = useState(0);

  const handleClick = () => {
    setMapIdx((mapIdx + 1) % 4);
    setMapState(Maps[mapIdx]);
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
