/* eslint-disable react/jsx-props-no-spreading */
import { useState, SyntheticEvent, ReactNode } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";
import COLOR from "constants/color";
import { NotiList } from "components/Navbar/Noti";
import { NotiType } from "types";

interface TabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}

const TabsLib = styled(Tabs)`
  .css-heg063-MuiTabs-flexContainer {
    color: "#ffffff";
  }
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: ${COLOR.font.primary} !important;
    font-size: 0.9rem;
    font-family: "Pr-SemiBold";
  }
  .css-1aquho2-MuiTabs-indicator {
    background-color: ${COLOR.font.primary} !important;
  }
  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    color: white;
    font-size: 0.9rem;
    font-family: "Pr-SemiBold";
  }
`;

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2, padding: 0, marginTop: 1.5 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Props {
  notis: NotiType[];
  isFetched: boolean;
}

const NotiTab = ({ notis, isFetched }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabsLib
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ textColor: COLOR.font.primary }}
        >
          <Tab label="새로운 알림" {...a11yProps(0)} />
          <Tab label="전체 알림" {...a11yProps(1)} />
        </TabsLib>
      </Box>
      <TabPanel value={value} index={0}>
        {isFetched && <NotiList newNoti notis={notis} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isFetched && <NotiList notis={notis} />}
      </TabPanel>
    </Box>
  );
};
export default NotiTab;
