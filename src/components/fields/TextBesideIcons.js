import React from "react";
import { Typography } from "@material-ui/core";
// import {
//     createMuiTheme,
//     responsiveFontSizes,
// } from "@material-ui/core/styles";

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

export default function TextBesideIcons({
    variant = 'body2',
    color = 'textPrimary',
    text = 'Not Available'
}) {
    return (
        <Typography
            variant={variant}
            color={color}
            style={{
                display: 'inline',
                verticalAlign: 'top',
                marginLeft: '10px'
            }} >
            {text}
        </Typography>
    );
}
