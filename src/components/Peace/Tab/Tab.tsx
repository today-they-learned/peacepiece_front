import { Tab as semanticTab } from "semantic-ui-react";
import COLOR from "constants/color";
import { BannerBox } from "components/common";
import styled from "styled-components";
import { Island, Animal, Item, Point } from "./index";

const TabPane = styled(semanticTab.Pane)`
  height: 42rem;
  margin: 0 !important;
  padding: 0.6rem !important;
  overflow: scroll;
  background: ${COLOR.bg.secondary} !important;
  border: none !important;
`;

const TabLib = styled(semanticTab)`
  width: 17.5rem;
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

const panes = [
  {
    menuItem: "상점",
    render: () => (
      <TabPane>
        <Island />
        <Animal />
        <Item />
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
];

const Tab = () => {
  return (
    <BannerBox padding="1.05rem">
      <TabLib panes={panes} />
    </BannerBox>
  );
};

export default Tab;
