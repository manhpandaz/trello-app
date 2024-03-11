import { Avatar, AvatarGroup, Box, Chip, Tooltip } from "@mui/material";
import theme from "../../../theme";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";

const BoardBar = () => {
  const { boardBarHeight } = theme.customStyle;

  const MENU_STYLES = {
    backgroundColor: "white",
    color: "primary.main",
    border: "1px solid #ccc",
    padding: "0px 5px",
    "& .MuiSvgIcon-root": {
      color: "primary.main",
    },
    "&:hover": {
      bgcolor: "primary.50",
    },
  };
  return (
    <Box
      sx={{
        // backgroundColor: "primary.dark",

        width: "100%",
        height: boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        padding: "0px 16px",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip
          sx={MENU_STYLES}
          label="trello 1"
          icon={<DashboardIcon />}
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          label="Public/Private workspace"
          icon={<DashboardIcon />}
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          label="Add to Google Drive"
          icon={<DashboardIcon />}
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          label="Automation"
          icon={<BoltIcon />}
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          label="Filters"
          icon={<FilterListIcon />}
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AvatarGroup max={3}>
          <Tooltip title="Account">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Tooltip title="Account">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Tooltip title="Account">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Account">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Account">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Account">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
