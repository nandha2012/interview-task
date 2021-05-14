import { makeStyles,createStyles,Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperCard:{
        marginBottom:'10px',
    },
    cells:{
        border:"none"
    },
    footer:{
        "& > :first-child": {
            marginRight:'35%'
        },
        
    },
  })
);
export default useStyles