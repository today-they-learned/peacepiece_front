import { useEffect, useState } from "react";
import { Tab as semanticTab } from "semantic-ui-react";
import COLOR from "constants/color";
import { BannerBox } from "components/common";
import styled from "styled-components";
import { useItemListData } from "hooks/queries/items";
import { BuyableItemType } from "types";
import { Island, Animal, Item, Point } from "./index";

const TabContainer = styled(BannerBox)`
  max-height: 80vh;

  @media only screen and (max-width: 768px) {
    max-height: 70vh;
  }
`;

const TabPane = styled(semanticTab.Pane)`
  height: 42rem;
  margin: 0 !important;
  padding: 0.6rem !important;
  overflow-y: scroll;
  background: ${COLOR.bg.secondary} !important;
  border: none !important;
`;

const Tab = styled(semanticTab)`
  margin: 0 !important;
  background: ${COLOR.bg.nav} !important;
  border: none !important;

  a {
    font-family: "Pr-Bold";
    color: white !important;
  }

  .active {
    background: ${COLOR.bg.secondary} !important;
    border: none !important;
  }
`;

const Tabs = () => {
  const [islandData, setIslandData] = useState([]);
  const [animalData, setAnimalData] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const { data, isFetched } = useItemListData();
  const [panes, setPanes] = useState([]);

  useEffect(() => {
    setPanes([
      {
        menuItem: "상점",
        render: () => (
          <TabPane>
            <Item treeData={treeData} />
            <Island islandData={islandData} />
            <Animal animalData={animalData} />
          </TabPane>
        ),
      },
      {
        menuItem: "포인트 이력",
        render: () => (
          <TabPane>
            <Point />
          </TabPane>
        ),
      },
    ]);
  }, [islandData, animalData, treeData]);

  useEffect(() => {
    if (!data) return;

    setIslandData(
      data.data.filter((item: BuyableItemType) => {
        return item?.category === "map";
      })
    );

    setAnimalData(
      data.data.filter((item: BuyableItemType) => {
        return item?.category === "animal";
      })
    );

    setTreeData(
      data.data.filter((item: BuyableItemType) => {
        return item?.category === "tree";
      })
    );
  }, [data, isFetched]);

  return (
    <TabContainer padding="1.05rem">
      {isFetched && <Tab panes={panes} />}
    </TabContainer>
  );
};

export default Tabs;
