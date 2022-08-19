/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Paper, Button } from "@mui/material";

interface Props {
  title: string;
  content: string;
}

const Slider = () => {
  return (
    <Carousel
      NextIcon={<ArrowCircleRightIcon />}
      PrevIcon={<ArrowCircleRightIcon />}
    ></Carousel>
  );
};

export default Slider;
