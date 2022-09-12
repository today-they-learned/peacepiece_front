/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import COLOR from "constants/color";
import NoticeNew from "./NoticeNew";
import NoticeAll from "./NoticeAll";

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabsLib = styled(Tabs)`
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: ${COLOR.font.primary} !important;
  }
  .css-1aquho2-MuiTabs-indicator {
    background-color: ${COLOR.font.primary} !important;
  }
  font-family: "Pr-Regular";
  color: white;
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
        <Box sx={{ p: 2, padding: 0, marginTop: 2 }}>
          <Typography>{children}</Typography>
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

const NoticeTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
        <NoticeNew />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NoticeAll />
      </TabPanel>
    </Box>
  );
};
export default NoticeTab;
