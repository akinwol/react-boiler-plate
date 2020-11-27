/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../../assets/jss/material-dashboard-react/components/footerStyle.js";
import { yipahURL } from "../../../utils";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href={yipahURL()}
                className={classes.block}
                target="_blank"
                rel="noopener"
              >
                Menu 1
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href={yipahURL("")}
                className={classes.block}
                target="_blank"
                rel="noopener"
              >
                Menu 2
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href={yipahURL("")}
                className={classes.block}
                target="_blank"
                rel="noopener"
              >
                Menu 3
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href={yipahURL()}
              className={classes.a}
              target="_blank"
              rel="noopener"
            >
              Menu 4
            </a>
            ...{" "}
          </span>
        </p>
      </div>
    </footer>
  );
}
