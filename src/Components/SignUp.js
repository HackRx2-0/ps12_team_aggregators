import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import Album from './Dashboard';
import MenuItem from '@material-ui/core/MenuItem';

const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const martialstatus = [
  {
    value: 'Single',
    label: 'Single',
  },
  {
    value: 'Married',
    label: 'Married',
  },
 
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp() {
  const classes = useStyles();

  const [firstname,firstnameReg] = useState("")
  const [lastname,lastnameReg] = useState("")
  const [email,setmailReg] = useState("")
  const [password,passwordReg] = useState("")
  const [active,setActive] = useState(false);
  const [state,setState] = useState([]);
  const [show,setShow] = useState(false);
  const [gender, setGender] = React.useState('Male');
  const [martstatus, setMartstatus] = React.useState('Single');
  const [Age,setAge] = React.useState(1);


  const firstnameHandler = (e)=>{
    firstnameReg(e.target.value)
  }

  const lastnameHandler = (e)=>{
    lastnameReg(e.target.value)
  }
  const emailsaveHandler = (e)=>{
    setmailReg(e.target.value)
  };

  const passsaveHandler = (e)=>{
    passwordReg(e.target.value)
  }
  const handleChange1 = (event) => {
    setGender(event.target.value);
  };
  const handleChange = (event) => {
    setMartstatus(event.target.value);
  };

  const AgeHandler = (event)=>{
      setAge(event.target.value);
  }

  const saveDetails = (e)=>{
    e.preventDefault()
    const obj = {
      "name":firstname+" "+lastname,
      'email':email,
      'password':password,
      'age':Age
    }
    console.log(obj)
    Axios.post('http://localhost:3001/users',obj).then((response)=>{
      console.log(response)
      if(response.status===201){
        //window.location.href="/dashboard"
        Axios.post('http://127.0.0.1:8000/predict/res',{
      
        }).then(function (response){
          
          console.log(response);
          console.log(response.data.response + " " + response.status);
          setState(response.data.response);
          setShow(true);
          
        })
        .catch(function(error){
          console.log(error);
        })
        setActive(true);
      }
    }).catch((e)=>{
      console.log(e)
    })
  }
 

  return (
    <div>

    {!show
      ?
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e)=>{firstnameHandler(e)}}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={lastnameHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              id="filled-select-currency-native"
              select
              label="Martial status select"
              value={martstatus}
              onChange={handleChange}
              SelectProps={{
              native: true,
                       }}
             helperText="Please select your Martial status"
            variant="outlined"
                      >
           {martialstatus.map((option) => (
              <option key={option.value} value={option.value}>
               {option.label}
              </option>
            ))}
          </TextField>
           
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
          id="filled-select-currency-native"
          select
          label="Gender select"
          value={gender}
          onChange={handleChange1}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your gender"
          variant="outlined"
        >
          {genders.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="Age"
                label="Age"
                name="Age"
                autoComplete="Age"
                onChange={(e)=>{AgeHandler(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>{emailsaveHandler(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>{passsaveHandler(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={saveDetails}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    
     :<Album info={state}/>}
    </div>
  );
}