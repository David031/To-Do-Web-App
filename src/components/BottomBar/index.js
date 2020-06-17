import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { DropdownToggle, DropdownItem, Dropdown, DropdownMenu } from "shards-react";
import { Add, Close } from "@material-ui/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
export default function BottomBar({ classes, isOpenMenu, handleOnClickFab, handleOpenCreateBucket, handleOpenCreateTask, bucket }) {
  return (
    <Grid item container direction="row-reverse" className={classes.bodyBottomBar}>
      <Dropdown open={isOpenMenu} toggle={handleOnClickFab} dropup style={{ width: 50 }}>
        <DropdownToggle pill theme="info" className={classes.fab} style={{ width: 50 }}>
          {isOpenMenu ? <Close /> : <Add />}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={handleOpenCreateBucket}>
            <Typography variant="body1">Add new category</Typography>
          </DropdownItem>
          {bucket.length > 0 ? (
            <DropdownItem onClick={handleOpenCreateTask}>
              <Typography variant="body1">Add new task</Typography>
            </DropdownItem>
          ) : (
            <div />
          )}
        </DropdownMenu>
      </Dropdown>
    </Grid>
  );
}
