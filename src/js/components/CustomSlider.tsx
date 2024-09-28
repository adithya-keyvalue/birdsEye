import { Slider } from "@mui/material";
import React from "react";

const CustomSlider = ({
  min,
  max,
  level,
  handleChange,
}: {
  min: number;
  max: number;
  level: number;
  handleChange: (event: any) => void;
}) => {
  return (
    <Slider
      aria-label="Small steps"
      defaultValue={1}
      step={1}
      marks
      min={min}
      max={max}
      sx={{
        width: '640px',
        "& .MuiSlider-track": {
          border: "none",
          backgroundColor: "#F1EEE8",
          height: "8px",
        },
        "& .MuiSlider-thumb": {
          height: 16,
          width: 16,
          backgroundColor: "#E5B951",
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
          },
          "&::before": {
            display: "none",
          },
        },
        "& .MuiSlider-rail": {
          backgroundColor: "#F1EEE8",
          opacity: 1,
          height: "8px",
        },
        "& .MuiSlider-mark": {
          backgroundColor: "#D9D9D9",
          width: "4px",
          height: "4px",
        },
      }}
      onChange={handleChange}
      valueLabelDisplay="off"
    />
  );
};

export default CustomSlider;
