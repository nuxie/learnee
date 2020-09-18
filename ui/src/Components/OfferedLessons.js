import React from "react";
import Header from "../Include/Header";
import Footer from "../Include/Footer";
import Axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class OfferedLessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutors: {}
        }
    }

    getLessons = async (e) => {
        await Axios.get("http://localhost:9000/tutors", {
            mode: 'cors',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json; charset=utf-8',
            }
        }).then((res) => {
            console.log(res.data.tutors)
            console.log(typeof (res.data.tutors))
            console.log(Object.values(res.data.tutors))
            console.log(Object.keys(res.data.tutors))
            console.log(Object.entries(res.data.tutors))
            this.setState({
                tutors: Object.entries(res.data.tutors)
            })
            // return window.location = "http://learnee.com:3000"
            console.log(this.state.tutors)
        }).catch(() => {
            console.log("err while retrieving details")
            //return window.location = "http://learnee.com:3000/error"
        })
        // console.log(this.state.email)
    };

    componentDidMount() {
        this.getLessons().then(r => console.log(r)).catch(() => console.log("wtf"));
        console.log(this.state.tutors)
    }

    descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => this.descendingComparator(a, b, orderBy)
            : (a, b) => -this.descendingComparator(a, b, orderBy);
    }

    stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }


    render() {

        let table = []
        console.log("Render")
        // console.log(this.state.tutors)
        // console.log(typeof(this.state.tutors))
        Object.entries(this.state.tutors).forEach(entry => {
            const [key, value] = entry;
            console.log(value[1]["name"]);
            const n = value[1]["name"];
            const d = value[1]["description"];
            Object.entries(value).forEach(entry2 => {
                const [key2, value2] = entry2;
                // console.log("nest 2");
                // console.log(key2, value2);
                // console.log(key2, value2["name"]);
                Object.entries(value2).forEach(entry3 => {
                    const [key3, value3] = entry3;
                    // console.log(key3, value3);
                    if (key3 === "lessons" && value3.length > 0) {
                        console.log("Hey ho")
                        // console.log(value3)
                        Object.entries(value3).forEach(entry4 => {
                            const [key4, value4] = entry4;
                            console.log(key4, value4["subject"]);
                            if (value4["subject"] !== undefined) {
                                table.push(
                                    <TableRow>
                                        <TableCell> {n} </TableCell>
                                        <TableCell> {d}</TableCell>
                                        <TableCell> {value4["subject"]}</TableCell>
                                        <TableCell> {value4["price"]}</TableCell>
                                    </TableRow>)
                            }
                        })
                    }
                })
            })
        });
        // this.state.tutors.forEach(([key, value]) => {
        //     console.log(key); // 'one'
        //     console.log(value); // 1
        // });
        // Object.keys(this.state.tutors).forEach(function (key){
        //     console.log(this.state.tutors[key]);
        // });
        return (
            <div>
                <header className="header_section user_pro_head">
                    <Header/>
                <div className="row"/>
                <div className="container mtb_50" >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>E-mail</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Subject</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {table}
                        </TableBody>
                    </Table>
                </div>
                </header>
                <Footer/>
            </div>
        )
    }
}