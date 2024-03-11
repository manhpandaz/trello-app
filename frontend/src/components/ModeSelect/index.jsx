import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import { FullscreenExit } from "@mui/icons-material";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();

  const handleChangeTheme = (e) => {
    let theme = e.target.value;
    setMode(theme);
  };
  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <InputLabel id="demo-simple-select-label">Mode</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        sx={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        value={mode}
        label="Mode"
        onChange={handleChangeTheme}
      >
        <MenuItem
          value="light"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <LightModeIcon />
          Light
        </MenuItem>
        <MenuItem
          value="dark"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <NightlightRoundIcon />
          Dark
        </MenuItem>
        <MenuItem
          value="system"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <SettingsSystemDaydreamIcon />
          System
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ModeSelect;
