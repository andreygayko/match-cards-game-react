import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

import { useActions } from './hooks/useActions';
import { useStyles } from './themes/theme';

const User = () => {

  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { setUser } = useActions();

  const handleSubmit = () => {
    if (name.trim() && email.trim()) {
      sessionStorage.setItem('userName', name);
      sessionStorage.setItem('userEmail', email);
      setUser(name, email);
    };
  }

  return (
    <div className={classes.authForm}>
      <Grid container direction='column'>
        <Typography className={classes.m1}>Enter your name, please. We shoul be able to add you to the leaderbord. Wish you lots of success!</Typography>
        <TextField className={classes.inputField} variant='outlined' placeholder='username' value={name} onChange={(event) => setName(event.target.value.toLowerCase())}/>
        <TextField className={classes.inputField} variant='outlined' placeholder='email' value={email} onChange={(event) => setEmail(event.target.value.toLowerCase())}/>
        <Button className={[classes.marginCenter, classes.mv1].join(' ')} disabled={!(name && email)} variant='outlined' onClick={handleSubmit}>ok</Button>
      </Grid>
    </div>
  )
};

export default User;