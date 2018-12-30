import React from "react";
import {withStyles} from "@material-ui/core";

import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";

const gifStyles = theme => ({
    root: {
        'background-color': theme.palette.tertiary.main,
        width: 'fit-content',
        'min-height': '100px',
        height: 'fit-content',
        margin: '4px'
    },
    text: {

    }
});

const GifCard = ({gif, text, classes,...props}) => (
    <Card className={classes.root} {...props}>
        <CardContent>
            <Typography color="textSecondary">{text}</Typography>
            <img src={`https://web.archive.org/web/${gif}`}/>
        </CardContent>
    </Card>
);

export default withStyles(gifStyles)(GifCard);
