import { useState, useEffect } from "react";
import IslandViewer from "components/Island/IslandViewer";
import Maps from "constants/Island/Maps";
import Tabs from "components/Island/Tab/Tabs";
import styled from "styled-components";
import { useItemStatusData } from "hooks/queries/items";
import { useUser } from "hooks";
import { ItemStatusType } from "types";

const animalPlaceMapper = [
  [
    {
      y: 7,
      x: 7,
      code: 200,
    },
  ],
  [
    {
      y: 7,
      x: 7,
      code: 200,
    },
    {
      y: 7,
      x: 2,
      code: 200,
    },
  ],
];

const treePlaceWrapper = [
  [
    {
      y: 5,
      x: 5,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 5,
      x: 6,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 6,
      x: 5,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 7,
      x: 5,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 5,
      x: 7,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
  ],
  [
    {
      y: 5,
      x: 5,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 5,
      x: 6,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 6,
      x: 5,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 7,
      x: 5,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
    {
      y: 5,
      x: 7,
      code: 300, // TODO: trees 이미지 넣고, 코드 넣기
    },
  ],
  [],
  [],
];

const defaultItems = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 0, 0, 0, 0, 0],
    [0, 998, 999, 998, 999, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 0, 0, 0, 0, 0],
    [0, 998, 999, 998, 999, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 999, 998, 999, 998, 999, 998, 999, 998, 0],
    [0, 998, 999, 998, 999, 998, 999, 998, 999, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 0, 0, 0, 0, 0],
    [0, 998, 999, 998, 999, 0, 0, 0, 0, 0],
    [0, 999, 998, 999, 998, 0, 0, 0, 0, 0],
    [0, 998, 999, 998, 999, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  const [itemsState, setItemsState] = useState([]);
  const [mapIdx, setMapIdx] = useState(0);
  const [animalCount, setAnimalCount] = useState(0);
  const [treeCount, setTreeCount] = useState(0);
  const { user } = useUser();

  const { data: statusData, isFetched } = useItemStatusData(user.id);

  useEffect(() => {
    if (!statusData) return;

    const itemState: ItemStatusType = statusData.data;
    setMapIdx(itemState.map);
    setAnimalCount(itemState.animal);
    setTreeCount(itemState.tree);
  }, [statusData]);

  useEffect(() => {
    const items = [...defaultItems[mapIdx]];

    treePlaceWrapper[mapIdx].slice(0, treeCount).forEach((treePlace) => {
      items[treePlace.y][treePlace.x] = treePlace.code;
    });

    animalPlaceMapper[mapIdx].slice(0, animalCount).forEach((animalPlace) => {
      items[animalPlace.y][animalPlace.x] = animalPlace.code;
    });

    setItemsState(items);
  }, [mapIdx, treeCount, animalCount]);

  return (
    <Wrapper>
      <IslandViewerWrapper>
        {isFetched && <IslandViewer terrainMap={mapState} items={itemsState} />}
      </IslandViewerWrapper>
      <TabWrapper>
        <Tabs />
      </TabWrapper>
    </Wrapper>
  );
};

export default Island;
