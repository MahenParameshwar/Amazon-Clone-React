import { Container, Button,InputBase,withStyles ,FormControl, IconButton,Snackbar,NativeSelect, TextareaAutosize, TextField, Typography,makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeAddProductsRequest, makeGetCategoriesRequest, resetMessage } from '../../Redux/Admin/action';
import CloseIcon from "@material-ui/icons/Close";

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
      input:{
          width:"100%",
          margin:"10px 0px"
      }
}))

function AddProduct(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {categories,success,error,message} = useSelector(state=>state.admin)
    const [title,setTitle] = useState("")
    const [company,setCompany] = useState("")
    const [description,setDescription] = useState("")
    const [photo,setPhoto] = useState("")
    const [price,setPrice] = useState("")
    const [stockQuantity,setStockQuantity] = useState("")
    const [category,setCategory] = useState("60044b104af15340cc338378")
    const [snackBarOpen,setSnackBarOpen] = useState(false)
    
    useEffect(()=>{
        if(success || error){
            setSnackBarOpen(true)
            dispatch(resetMessage());
        }
    },[success,error])
    
    useEffect(()=>{
        dispatch(makeGetCategoriesRequest())
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
       console.log(category)
        dispatch(makeAddProductsRequest({
            title,
            category,
            company,
            photo,
            price,
            stockQuantity,
            description,
            reviews:0
        }))
        setCompany("")
        setTitle("")
        setDescription("")
        setPrice("")
        setPhoto("")
        setStockQuantity("")
    }
    
    return (
        <Container maxWidth={'md'}>
            <Typography variant="h1" style={{textAlign:"center"}}>
                Add a New Product Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Title:</label>
                    <TextField required value={title} onChange={(e)=>setTitle(e.target.value)} className={classes.input}  variant="outlined"  />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Company:</label>
                    <TextField required value={company} onChange={(e)=>setCompany(e.target.value)} className={classes.input}  variant="outlined"  />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Descripton:</label>
                    <TextareaAutosize
                    className={classes.input}
                    style={{minHeight:"100px"}}
                    rowsMax={4}
                    aria-label="Description"
                    placeholder=""
                    value={description} onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Price:</label>
                    <TextField required value={price} onChange={(e)=>setPrice(e.target.value)} className={classes.input} type="number" InputProps={{ inputProps: { min: 0} }}  variant="outlined"  />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Stock Quantity:</label>
                    <TextField required value={stockQuantity} onChange={(e)=>setStockQuantity(e.target.value)} className={classes.input} type="number" InputProps={{ inputProps: { min: 0} }} variant="outlined"  />
                </div>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Img URL:</label>
                    <TextField required value={photo} onChange={(e)=>setPhoto(e.target.value)}  className={classes.input}   variant="outlined"  />
                </div>
                <div>
                    <label style={{display:'block',fontWeight:'bold'}} htmlFor="">
                        Category
                    </label>
                    <FormControl className={classes.input}>    
                    <NativeSelect
                    id="demo-customized-select-native"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    input={<BootstrapInput />}
                    >
                            
                            {
                                categories.map(({_id,type})=>{
                                    return <option key={_id} value={_id}>{type}</option>
                                })
                            }
                    </NativeSelect>
                </FormControl>
                </div>
                <Button  type="submit">Add</Button>
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

export default AddProduct;