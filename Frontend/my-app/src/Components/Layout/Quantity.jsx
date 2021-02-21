import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles,InputBase,makeStyles, TextField, Button } from '@material-ui/core';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme)=>({
      margin: {
        margin: theme.spacing(1),
      },
      quantityInput:{
        marginRight:"15px",
        "& input":{
          height:"4px",
          width:"40px",
          
        }
      }
}))

function Quantity({quantity,updateCartQuantity}) {
    const classes = useStyles();
   
    const [qty, setQty] = React.useState(quantity);
   const [qtyBig,setQtyBig] = React.useState(quantity);
    
    const [open,setOpen] = useState( quantity > 10 ? true : false)
  
    const handleChange = (event) => {
      

      if(event.target.value === "+10"){
        setOpen(true)
        setQtyBig(10)
        updateCartQuantity(10)
      }
      else{
        setQty(event.target.value);
        updateCartQuantity(Number(event.target.value))
      }
      
    };

    const handleChangeQuantity = ()=>{
      
      if(qtyBig < 10){
        setOpen(false)
        setQty(+qtyBig)
        updateCartQuantity(+qtyBig)
      }
      else{
        
        updateCartQuantity(+qtyBig)
      }
    }

    return (
        <div style={{display:'flex',alignItems:'center'}}>
              <label style={{marginRight:"10px"}} htmlFor="">
                Quantity :
              </label>
            {
              open ? 
              
              <div style={{display:"flex",alignItems:"center"}}>
                <TextField onChange={(e)=>setQtyBig(e.target.value)} value={qtyBig} type="number" InputProps={{ inputProps: { min: 1} }}  className={classes.quantityInput} variant={'outlined'} style={{}} />
                <Button  onClick={()=>handleChangeQuantity()} style={{marginRight:"15px"}}>Update</Button> 
              </div> 
              : <>
            
            <FormControl className={classes.margin}>    
                    <NativeSelect
                    id="demo-customized-select-native"
                    value={qty}
                    onChange={(e)=>handleChange(e)}
                    input={<BootstrapInput />}
                   
                    >
                            
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={"+10"}>+10</option>
                    </NativeSelect>
            </FormControl>
              </> 
            }
            
        </div>
    );
}

export default Quantity;