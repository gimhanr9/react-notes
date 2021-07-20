import {Typography,Button,Container,makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    btn:{
        fontSize:60,
        backgroundColor:'violet',
        '&:hover':{
            backgroundColor:'blue'
        }
    }
});

function Create (){
    const classes=useStyles();
    return(
        <div>
            <p>Hello</p>
        </div>
    );
}

export default Create;