/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import COLOR from "constants/color";
import { NoticeNew, NoticeAll } from "./index";

const dummyNotices = [
  {
    id: 1,
    contributor: {
      id: 1,
      username: "김신건",
    },
    article: {
      id: 1,
      content: "플로깅 하러가자 일상 속 작은 습관이 모여 환경을 블라블라~",
      category: "플로깅",
      created_at: "2022-09-12T12:10:53.265788+09:00",
    },
    is_viewed: true,
    category: "challenge",
  },

  {
    id: 1,
    contributor: {
      id: 1,
      username: "김신건",
    },
    article: {
      id: 1,
      content: "텀블러에 음료담기",
      category: "텀블러_쓰자",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_viewed: true,
    category: "category",
  },
  {
    id: 1,
    contributor: {
      id: 1,
      username: "김신건",
    },
    article: {
      id: 1,
      content: "텀블러에 음료담기",
      category: "친환경_물건_사자",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_viewed: false,
    category: "category",
  },
  {
    id: 1,
    contributor: {
      id: 1,
      username: "권소예",
    },
    article: {
      id: 1,
      content: "평소에 재활용을 실천하자",
      category: "재활용",
      created_at: "2022-09-12T12:10:53.265788+09:00",
    },
    is_viewed: true,
    category: "challenge",
  },
  {
    id: 1,
    contributor: {
      id: 1,
      username: "SoyE",
    },
    article: {
      id: 1,
      content: "재활용 실천하자!!",
      category: "재활용",
      created_at: "2022-09-12T12:10:53.265788+09:00",
    },
    is_viewed: false,
    category: "challenge",
  },
];

type Notice = {
  id: number;
  contributor: {
    id: number;
    username: string;
  };
  article: {
    id: number;
    content: string;
    category: string;
    created_at: string;
  };
  is_viewed: boolean;
  category: string;
};

const apartData = (dummyNotices: Notice[]) => {
  // 새로운 알림만 골라서 넣어주는
  const newNotifications: Notice[] = [];
  for (let i = 0; i < dummyNotices.length; i += 1) {
    if (dummyNotices[i].is_viewed === false) {
      newNotifications.push(dummyNotices[i]);
    }
  }
  return newNotifications;
};

interface TabPanelProps {
  children: React.ReactNode;
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
        <NoticeNew dummyNotices={apartData(dummyNotices)} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NoticeAll dummyNotices={dummyNotices} />
      </TabPanel>
    </Box>
  );
};
export default NoticeTab;
