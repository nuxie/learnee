import React from "react";
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

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            description: ""
        }
    }

    handleChange = (e) => {
        const {id , value} = e.target
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    saveHandler = async (e) => {
        const cookies = new Cookies();
        e.preventDefault();
        console.log(this.state.description)
        await Axios.post("http://localhost:9000/profile/update", {
            description: this.state.description
        }, {
            mode: 'cors',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': cookies.get('tkn')
            }}).then((res) => {
            console.log(res.data)
            if (res.status === 200) {
                return window.location = "http://learnee.com:3000/userprofile"
            }
        }).catch(() => {
            console.log("err while editing profile")
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
                        Edit Description
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            type="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.saveHandler}
                        >
                            Save
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
        <EditProfile classes={classes} />
    )
}
