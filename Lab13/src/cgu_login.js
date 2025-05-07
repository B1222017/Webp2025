import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// 使用可容錯的 makeStyles
const useStyles = makeStyles((theme) => {
  const lightColor = theme?.palette?.grey?.[50] || '#f5f5f5';
  const darkColor = theme?.palette?.grey?.[900] || '#212121';

  return {
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://obs.line-scdn.net/0haTI-X-8JPnt0VCutK6JBLEwCMgpHMiRyVmUjGgFTYBhZeHEsHGdtGAYBN1cKZnwqVDsjGwRXN0xYMX8vSA/w644)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme?.palette?.mode === 'light' ? lightColor : darkColor,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme?.spacing?.(8, 4) || '64px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme?.spacing?.(1) || 8,
      backgroundColor: theme?.palette?.secondary?.main || '#f50057',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme?.spacing?.(1) || 8,
    },
    submit: {
      margin: theme?.spacing?.(3, 0, 2) || '24px 0 16px',
    },
  };
});

function CGU_Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in CISE@CGU
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default CGU_Login;
