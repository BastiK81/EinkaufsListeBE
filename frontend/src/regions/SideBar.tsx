import React from "react";
import {Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";
import {Link} from "react-router-dom";


export interface AppProps {

}

const SideBar = (props: AppProps) => {
    return(
        <div>
            <Paper sx={{ width: 320, maxWidth: '100%' }}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut fontSize="small" />
                        </ListItemIcon>
                        <Link to="/">Main</Link>
                        <Typography variant="body2" color="text.secondary">
                            ⌘X
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCopy fontSize="small" />
                        </ListItemIcon>
                        <Link to="/admin">Admin</Link>
                        <Typography variant="body2" color="text.secondary">
                            ⌘C
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentPaste fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Paste</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘V
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
}

export default SideBar