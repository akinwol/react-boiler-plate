import React from "react";
import {Paper, Tab, Tabs} from '@material-ui/core'

export default function Footer() {
  return (
    <Paper>
      <Tabs indicatorColor="primary" textColor="primary" centered value={1}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item 3" />
      </Tabs>
    </Paper>
  );
}
