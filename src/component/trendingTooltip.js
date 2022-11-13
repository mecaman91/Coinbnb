import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
)) (({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    backgroundColor: theme.palette.common.black,
  },[`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  }
}));

export default function TrendingTooltip(props) {
  return (
    <div style={props.toolTipStyle}>
      <CustomWidthTooltip title={props.tooltipMSG} placement="right">
        <ErrorOutlineIcon></ErrorOutlineIcon>
      </CustomWidthTooltip>
    </div>
  );
}