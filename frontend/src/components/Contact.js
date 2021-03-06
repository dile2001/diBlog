import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Contact = ()=> {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
        
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
    );

}
