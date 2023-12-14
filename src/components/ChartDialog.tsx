import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChartDialog = ({ open, handleClose }: Props) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: "20px",
          borderBottom: "2px solid #111",
          direction: "rtl",
        }}
      >
        <Typography variant="h6" component="div">
          نمودار تست
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <img
            src="./icons/close-square-svgrepo-com.svg"
            alt="close-icon"
            style={{ height: "40px" }}
          />
        </IconButton>
      </Box>
      <DialogContent
        sx={{
          width: "100%",
          height: "calc(100% - 70px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "60%" }}></Box>
      </DialogContent>
    </Dialog>
  );
};

export default ChartDialog;
