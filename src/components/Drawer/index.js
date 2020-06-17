import React from "react";
import { Grid, Typography, TextField, InputAdornment, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Search, Category } from "@material-ui/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function Drawer({ classes, bucket, handleMenuOnClick }) {
  return (
    <Grid item xs={2} style={{ backgroundColor: "#0F2F3D", height: "100vh" }}>
      <Grid item className={classes.drawHeader}>
        <Typography variant="h6" className={classes.headerText}>
          To Do Web App
        </Typography>
        <TextField
          className={classes.searchBar}
          placeholder="Search category..."
          InputProps={{
            classes: {
              input: classes.input,
            },
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: "#7E8E96" }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <List style={{ paddingTop: 20 }}>
        {bucket.map((value, i) => (
          <ListItem key={i + "menu"} button onClick={handleMenuOnClick(i)}>
            <ListItemIcon>
              <Category style={{ color: "#7E8E96" }} />
            </ListItemIcon>
            <ListItemText style={{ color: "#C9D0D3" }}>{value.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
