import React, { FunctionComponent, useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import clsx from "clsx";
import Axios from "axios";

import NavigationBar from "../components/navigation/navigationBar";
import GridView from "../components/grid/gridView"
import UserTable from "../components/table/table";
import useStyles from "./dashboardStyles";
import { useTheme } from '@material-ui/core/styles';


const Dashboard: FunctionComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [openDialog, setDialog] = React.useState(false)
    const [url, seturl] = React.useState("https://swapi.dev/api/people/")
    const [open, setOpen] = React.useState(false);
    const [details, SetDetails] = useState({
        nextUrl: "",
        prevUrl: "",
        users: [],
    })
    const [selected, setSelected] = useState<any[]>([])
    const [display, setDisplay] = useState(window.innerWidth);
    const handleResize = () => {
        setDisplay(window.innerWidth);
    }
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds: any = details.users.map((user: any) => user.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: any = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };
    useEffect(() => {
        async function fetchData() {
            try {
                setDialog(true);
                const response = await Axios.get(url)
                setDialog(false);
                SetDetails((details) => ({
                    ...details,
                    nextUrl: response.data.next,
                    prevUrl: response.data.previous,
                    users: response.data.results
                }));
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
        window.addEventListener("resize", handleResize);
    }, [url])


    const ChangeUrl = (newUrl) => {
        console.log(newUrl);
        seturl(newUrl)
    }
    return (
        <div>
            <NavigationBar drawerState={open} togleDrawer={setOpen} />
            <div className={classes.toolbar} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                {display >= 640 ?
                    <UserTable data={details}
                        changeUrl={ChangeUrl}
                        selectedRow={selected}
                        handleCheck={handleClick}
                        handleSelectAll={handleSelectAllClick}
                    /> :
                    <GridView data={details}
                        changeUrl={ChangeUrl}
                        selectedRow={selected}
                        handleCheck={handleClick}
                        handleSelectAll={handleSelectAllClick}
                    />
                }
            </main>
            <Backdrop className={classes.backdrop} open={openDialog} >
                <CircularProgress style={{ color: "white" }} />
            </Backdrop>
        </div>
    )
}
export default Dashboard