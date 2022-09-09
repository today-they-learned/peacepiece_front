import { useState, useEffect } from "react";
import { FlexBox } from "components/common";
import IslandViewer from "components/Island/IslandViewer";
import Maps from "constants/Island/Maps";
import Tab from "components/Peace/Tab/Tab";

const items = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 94, 93, 0, 0],
    [0, 998, 999, 998, 999, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 0, 200, 0, 0],
    [0, 998, 999, 998, 999, 0, 210, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 0, 0, 0, 0, 94, 93, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 200, 0, 0],
    [0, 0, 0, 0, 0, 0, 210, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 0, 0, 0, 0, 0],
    [0, 998, 999, 998, 999, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 0, 0, 0, 0, 0],
    [0, 998, 999, 998, 999, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 94, 93, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 200, 0, 0],
    [0, 0, 0, 0, 0, 0, 210, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 94, 93, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 200, 0, 0],
    [0, 0, 0, 0, 0, 0, 210, 0, 0],
  ],
];

const Island = () => {
  const [mapState] = useState(Maps[0]);
  const [itemsState, setItemsState] = useState(items[0]);
  const [mapIdx, setMapIdx] = useState(0);

  const handleClick = () => {
    setMapIdx((mapIdx + 1) % 4);
  };

  useEffect(() => {
    setItemsState(items[mapIdx]);
  }, [mapIdx]);

  return (
    <div style={{ display: "flex" }}>
      <FlexBox padding="10rem 0">
        <IslandViewer terrainMap={mapState} items={itemsState} />
      </FlexBox>
      <Tab />
    </div>
  );
};

export default Island;
