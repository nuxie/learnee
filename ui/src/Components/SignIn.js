import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Cookies from 'universal-cookie';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#ffa62b",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#ffa62b",
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const cookies = new Cookies();

    const [state , setState] = useState({
        email : "",
        password : "",
        isSignedIn: false
    })

    const handleChange = (e) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:9000/signin", {
            username: state.email,
            password: state.password
        }, {
            mode: 'cors',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json; charset=utf-8',
            }}).then((res) => {
            console.log(res.data)
            if (res.status === 200) {
                state.isSignedIn = true;
                cookies.set('tkn', res.data.token, { path: '/' });
                return window.location = "http://learnee.com:3000"
            }
        }).catch(() => {
            console.log("err while signing in")
            return window.location = "http://learnee.com:3000/error"
        })
        console.log(cookies.get('tkn'))
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
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
                        autoFocus
                        value={state.email}
                        onChange={handleChange}
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
                        value={state.password}
                        onChange={handleChange}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={loginHandler}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
            <Box mt={8}/>
        </Container>
    );
}
