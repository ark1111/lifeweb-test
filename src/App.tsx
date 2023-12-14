import { Button } from "@mui/material";
import Box from "@mui/system/Box";
import ChartDialog from "./components/ChartDialog";
import { useState } from "react";

function App() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const openDialog = () => {
    setDialogIsOpen(true);
  };

  const closeDialog = () => {
    setDialogIsOpen(false);
  };
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#11111130",
      }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={openDialog}
        sx={{ backgroundColor: "#111", color: "#fff" }}
      >
        نمایش نمودار
      </Button>
      <ChartDialog open={dialogIsOpen} handleClose={closeDialog} />
    </Box>
  );
}

export default App;
