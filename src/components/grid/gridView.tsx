import React from "react"
import {
    TableContainer, Paper, Grid,
    TableHead, TableRow, Table,
    TableCell, TableBody, Checkbox,
    TableFooter, IconButton, Box, Button
} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import useStyles from './gridViewStyles';


const GridView = (props: any) => {
    const classes = useStyles();
    const isSelected = (name: string) => props.selectedRow.indexOf(name) !== -1;
    return (
        <div>
            {props.data.users ? props.data.users.map((user) => {

                const isItemSelected = isSelected(user.name);

                return (
                    <Paper key={user.name} className={classes.paperCard}>
                        <Table>
                            <TableRow key={user.name} onClick={(event) => {
                                props.handleCheck(event, user.name)
                            }}
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                selected={isItemSelected}
                            >
                                <TableCell className={classes.cells}>Name</TableCell>
                                <TableCell className={classes.cells}>{user.name}</TableCell>
                                <TableCell className={classes.cells} align="right">
                                    <Checkbox checked={isItemSelected} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.cells}>Height</TableCell>
                                <TableCell className={classes.cells}>{user.height}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.cells}>Mass</TableCell>
                                <TableCell className={classes.cells}>{user.mass}</TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.cells}>Birth Year	</TableCell>
                                <TableCell className={classes.cells}>{user.birth_year}</TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.cells}>Gender</TableCell>
                                <TableCell className={classes.cells}>{user.gender}</TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.cells}>Hair Color	</TableCell>
                                <TableCell className={classes.cells}>{user.hair_color}</TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.cells}>Eye Color</TableCell>
                                <TableCell className={classes.cells}>{user.eye_color}</TableCell>
                            </TableRow>
                        </Table>
                    </Paper>
                )
            }) : <div>Loading...</div>}
            <Table>
                <TableRow className={classes.footer}>
                    <TableCell> <Button disabled={props.data.prevUrl === null} onClick={() => { props.changeUrl(props.data.prevUrl) }}>
                        <NavigateBeforeIcon />Previous
                </Button>
                    </TableCell>
                    <TableCell>
                        <Button disabled={props.data.nextUrl === null} onClick={() => { props.changeUrl(props.data.nextUrl) }}> Next
                    <NavigateNextIcon />
                        </Button>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    )
}
export default GridView
