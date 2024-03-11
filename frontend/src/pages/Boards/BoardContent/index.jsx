import { Box } from "@mui/material";
import theme from "~/theme";

const BoardContent = () => {
  const { headerHeight, boardBarHeight } = theme.customStyle;
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: `calc(100vh - ${headerHeight} - ${boardBarHeight})`,
      }}
    >
      Content
    </Box>
  );
};

export default BoardContent;
