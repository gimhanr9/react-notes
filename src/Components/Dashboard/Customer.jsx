import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

function Customer (){
    const numberOfCustomers=40;
    return(
        <React.Fragment>
            <List>
                <ListItem>
                    <ListItemText primary="Customers"/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="info">
                            <ErrorOutlineIcon />


                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>

            </List>
            <Typography variant="h4">
                    {numberOfCustomers}
            </Typography>
            

        </React.Fragment>
    );

}

export default Customer;