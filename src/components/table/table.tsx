import {
    TableContainer, Paper, Divider,
    TableHead, TableRow, Table,
    TableCell, TableBody, Checkbox, TableFooter, IconButton
} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import React from "react";
import useStyles, { StyledTableRow } from "./tableStyles";

function EnhancedTableHead(props: any) {
    const classes = useStyles();
    return (
        <TableHead className={classes.tableHead}>
            <TableRow >
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Height</TableCell>
                <TableCell align="center">Mass</TableCell>
                <TableCell align="center">Birth Year</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Hair Color</TableCell>
                <TableCell align="center">Eye Color</TableCell>
                <TableCell align="center" padding="checkbox">
                    <Checkbox
                        indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
                        checked={props.rowCount > 0 && props.numSelected === props.rowCount}
                        onChange={props.handleSelectAll}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default function UserTable(props: any) {

    const isSelected = (name: string) => props.selectedRow.indexOf(name) !== -1;

    return (
        <TableContainer component={Paper}>
            <Table>
                <EnhancedTableHead
                    handleSelectAll={props.handleSelectAll}
                    selected={props.selectedRow}
                    numSelected={props.selectedRow.length}
                    rowCount={props.data.users.length} />

                <TableBody>
                    {props.data.users ? props.data.users.map((user) => {
                        const isItemSelected = isSelected(user.name);
                        return (
                            <StyledTableRow key={user.name} onClick={(event) => {
                                                                props.handleCheck(event, user.name)
                                                            }}
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            selected={isItemSelected}
                            >
                                <TableCell align="center">{user.name}</TableCell>
                                <TableCell align="center">{user.height}</TableCell>
                                <TableCell align="center">{user.mass}</TableCell>
                                <TableCell align="center">{user.birth_year}</TableCell>
                                <TableCell align="center">{user.gender}</TableCell>
                                <TableCell align="center">{user.hair_color}</TableCell>
                                <TableCell align="center">{user.eye_color}</TableCell>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={isItemSelected} />
                                </TableCell>
                            </StyledTableRow>)
                    }) :
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                            <TableCell>Loading...</TableCell>
                            <TableCell padding="checkbox">
                                <Checkbox
                                />
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={6} align="left">
                            <IconButton disabled={props.data.prevUrl === null} onClick={() => { props.changeUrl(props.data.prevUrl) }}>
                                <NavigateBeforeIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell colSpan={6} align="right">
                            <IconButton disabled={props.data.nextUrl === null} onClick={() => { props.changeUrl(props.data.nextUrl) }}>
                                <NavigateNextIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}