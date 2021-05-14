import { fade, makeStyles,createStyles,Theme } from '@material-ui/core/styles';

const drawerWidth = 70;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  grow: {
    flexGrow: 1,
  },
    appBar:{
        backgroundColor:'#1a1926',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#2d2b3d',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width:'100%',
      [theme.breakpoints.up('md')]: {
        width:'75%'
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '80%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    bugReport: {

      display:'flex',
      marginRight:"50px"
    },

    
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor:"#1a1926",
     
    },
    drawerIcons:{
      color:'white',
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    
    },
    drawerHeader:{
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    list:{
      textAlign:'center'
    },
    listItems:{
        margin:'20px auto',
      "& :hover":{
        backgroundColor:'#d8b062',
        padding:'10px',
        borderRadius:'5px',
        color:"black",
    }
    },
  }),
);
  export default useStyles;