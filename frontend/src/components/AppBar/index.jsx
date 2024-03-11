import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import TrelloIcon from "~/components/images/TrelloIcon";
// import TrelloIcon from "~/assets/trello.svg";

import theme from "~/theme";
import ModeSelect from "../ModeSelect";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const AppBar = () => {
  const { headerHeight } = theme.customStyle;
  return (
    <div>
      {" "}
      <Box
        px={2}
        sx={{
          width: "100%",
          height: headerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          overflowX: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <AppsIcon
            sx={{
              color: "primary.main",
              height: "24px",
              width: "24px",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <TrelloIcon
              sx={{
                color: "green",
                height: "24px",
                width: "24px",
              }}
            />

            <Typography
              variant="span"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "primary.main",
              }}
            >
              Trello
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Workspaces></Workspaces>
              <Recent></Recent>
              <Starred></Starred>
              <Templates></Templates>
              <Button variant="outlined">Create</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Input
            placeholder="Search"
            sx={{ height: "32px", minWidth: "120px" }}
          ></Input>
          <ModeSelect />

          <Tooltip title="Notifications">
            <IconButton sx={{ width: "24px", height: "24px" }}>
              <Badge badgeContent={4} color="primary">
                <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="information">
            <IconButton sx={{ width: "24px", height: "24px" }}>
              <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Account">
            <IconButton sx={{ width: "24px", height: "24px" }}>
              <Avatar alt="Account" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
};

export default AppBar;
