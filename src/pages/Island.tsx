import { useState, useEffect } from "react";
import IslandViewer from "components/Island/IslandViewer";
import Maps from "constants/Island/Maps";
import Tabs from "components/Peace/Tab/Tabs";
import styled from "styled-components";

const items = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 94, 93, 0, 0],
    [0, 998, 999, 998, 999, 0, 220, 230, 0],
    [0, 999, 998, 999, 998, 0, 200, 240, 0],
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const IslandViewerWrapper = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: 1;
  }
`;

const TabWrapper = styled.div`
  flex: 1;
`;

const Island = () => {
  const [mapState] = useState(Maps[0]);
  const [itemsState, setItemsState] = useState(items[0]);
  const [mapIdx, setMapIdx] = useState(0);

  // const handleClick = () => {
  //   setMapIdx((mapIdx + 1) % 4);
  // };

  useEffect(() => {
    setMapIdx(3);
    setItemsState(items[mapIdx]);
  }, [mapIdx]);

  return (
    <Wrapper>
      <IslandViewerWrapper>
        <IslandViewer terrainMap={mapState} items={itemsState} />
      </IslandViewerWrapper>
      <TabWrapper>
        <Tabs />
      </TabWrapper>
    </Wrapper>
  );
};

export default Island;
