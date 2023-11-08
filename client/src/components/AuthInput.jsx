import { styled } from '@mui/material/styles';
import {Button, FormControl, TextField, InputAdornment, IconButton} from '@mui/material'
const AuthInput =  ({ icon, ...props }) => {
    return (
      <TextField
        {...props}
        fullWidth
        InputProps={{
            sx : ({
                color:'white',
                backgroundColor:'#36393c',
                borderRadius:'10px',
                fontFamily:'oswald',
                fontSize:'15px',
                fontWeight:300, 
                letterSpacing:'1px'
        })
        }}
      />
    );
  };

  export default AuthInput;
