import React, { useState, useContext } from "react";
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

class RemoveLesson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: ''
        }
    }

    handleChange = (e) => {
        const {id , value} = e.target
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    removeHandler = async (e) => {
        const cookies = new Cookies();
        e.preventDefault();
        console.log(this.state.subject)
        await Axios.delete("http://localhost:9000/profile/removeLesson", {
            mode: 'cors',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': cookies.get('tkn')
            },
            params: {
                subject: this.state.subject
            }
        }).then((res) => {
            console.log(res.data)
            console.log(this.state.subject)
            if (res.status === 200) {
                console.log("ok")
                return window.location = "http://learnee.com:3000/userprofile"
            }
        }).catch(() => {
            console.log("err while adding a lesson")
            return window.location = "http://learnee.com:3000/error"
        })
    };

    render() {
        const classes = this.props.classes;
        return (

            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Remove Lesson
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="subject"
                            label="Subject"
                            type="subject"
                            id="subject"
                            value={this.state.subject}
                            onChange={this.handleChange}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.removeHandler}
                        >
                            Delete
                        </Button>
                    </form>
                </div>
                <Box mt={8}/>
            </Container>
        );
    }
}

export default () => {
    const classes = useStyles();
    return (
        <RemoveLesson classes={classes} />
    )
}