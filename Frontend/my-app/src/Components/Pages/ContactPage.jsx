import { Container, Button, IconButton,Snackbar, TextareaAutosize, TextField, Typography,makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from "@material-ui/icons/Close";

import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

// const BootstrapInput = withStyles((theme) => ({
//     root: {
//       'label + &': {
//         marginTop: theme.spacing(3),
//       },
//     },
//     input: {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
      
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }))(InputBase);

  const useStyles = makeStyles((theme)=>({
      margin: {
        margin: theme.spacing(1),
      },
      input:{
          width:"100%",
          margin:"10px 0px"
      }
}))

function ContactPage(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [loading,setIsLoading] = useState(false);
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [description,setDescription] = useState("");
    const [mobileNum,setMobileNum] = useState("");
   
    const [snackBarOpen,setSnackBarOpen] = useState(false)
    const [message,setMessage] = useState("")
   
    
  

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true)
        makeSendRequest({name,email,description,mobileNum})
        setName("");
        setEmail("");
        setMobileNum("");
        setDescription("");
    }

    const makeSendRequest = ({name,email,description,mobileNum})=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/sendEmail`,{
            name,
            email,
            description,
            mobileNum
        }).then((res)=>{
            setIsLoading(false)
            setMessage("Message sent succesfully")
            setSnackBarOpen(true)
        }).catch(()=>{
            setIsLoading(false)
            setMessage("Message could not been sent")
            setSnackBarOpen(true)
        })
    }
    
    return (
        <Container maxWidth={'md'}>
            <Typography variant="h1" style={{textAlign:"center"}}>
               Contact page 
            </Typography>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Name:</label>
                    <TextField required value={name} onChange={(e)=>setName(e.target.value)} className={classes.input}  variant="outlined"  />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Email:</label>
                    <TextField required value={email} onChange={(e)=>setEmail(e.target.value)} className={classes.input}  variant="outlined"  />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Contact Number:</label>
                    <TextField required value={mobileNum} onChange={(e)=>setMobileNum(e.target.value)} className={classes.input}  variant="outlined"  />
                </div>
                {/* <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Order Id</label>
                    <TextField required value={order} onChange={(e)=>setOrder(e.target.value)} className={classes.input}  variant="outlined"  />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Product name</label>
                    <TextField required value={product} onChange={(e)=>setProduct(e.target.value)} className={classes.input}  variant="outlined"  />
                </div> */}
                {/* <div>
                    <label style={{display:'block',fontWeight:'bold'}} htmlFor="">
                        Reason for returning the product
                    </label>
                    <FormControl className={classes.input}>    
                    <NativeSelect
                    id="demo-customized-select-native"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    input={<BootstrapInput />}
                    >
                            
                            
                                   <option>Product is Damaged</option>
                                   <option>Not satisfied with the product</option>
                                   <option>Other reasons</option>
                            
                    </NativeSelect>
                </FormControl>
                </div> */}
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>How may we help you?</label>
                    <TextareaAutosize
                    className={classes.input}
                    style={{minHeight:"200px"}}
                    rowsMax={4}
                    aria-label="Description"
                    placeholder=""
                    value={description} onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                
                
               
                <Button disabled={loading}  type="submit">Submit</Button>
                <div>
                {
                    loading ? <CircularProgress /> : <></>
                }
                </div>
                
            </form>
            <Snackbar
                anchorOrigin={{vertical:'bottom',horizontal:'left'}}
                open={snackBarOpen}
                autoHideDuration={3000}
                message={<span className="format__id">{message}</span>}
                ContentProps={{
                    'aria-describedby':'message-id'
                }}
                onClose={()=>setSnackBarOpen(false)}
                action={[
                    <IconButton
                    onClick={()=>{setSnackBarOpen(false)}}
                    color="inherit"
                    key="close"
                    aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                ]}
                />
        </Container>
    );
}

export default ContactPage;