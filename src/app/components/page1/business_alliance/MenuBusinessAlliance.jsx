import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MenuBusinessAlliance({
  editando,
  adicionandoInternal,
  adicionandoExternal,
  managePermission,
  permissionType,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        disabled={(permissionType === "Viewer") ? true : false}
        // onBlur={handleClickBlur}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={editando}>Update</MenuItem>

        <MenuItem onClick={adicionandoInternal}>
          Add Internal Collaboration
        </MenuItem>
        <MenuItem onClick={adicionandoExternal}>
          Add External Collaboration
        </MenuItem>
        <MenuItem onClick={managePermission}>Manage Permission</MenuItem>
      </Menu>
    </div>
  );
}
