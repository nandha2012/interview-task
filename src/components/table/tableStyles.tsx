import { TableRow } from '@material-ui/core';
import { makeStyles,Theme, createStyles, withStyles } from '@material-ui/core/styles';

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor:'#f6f6f8',
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableHead:{
        backgroundColor:'#d4d3e0',
        "& .MuiTableCell-head":{
            borderRight:'1px solid rgba(224, 224, 224, 1)',
        }
    }
  })
);
export default useStyles