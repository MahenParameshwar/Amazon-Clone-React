import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeAddCategoryRequest, resetMessage } from '../../Redux/Admin/action';
import { Button, Container,IconButton,Snackbar, TextField, Typography } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";

function AddCategory(props) {
    const [category,setCategory] = useState('')
    const {error,success,message} = useSelector(state=>state.admin)
    const [snackBarOpen,setSnackBarOpen] = useState(false)
    const dispatch = useDispatch();
    console.log(error)
    useEffect(()=>{
        if(success || error){
            setSnackBarOpen(true)
            dispatch(resetMessage())
        }
    },[success,error])

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(makeAddCategoryRequest({
            type:category
        }))

    }

    return (
        <Container maxWidth={'md'}>
            <Typography variant="h1" style={{textAlign:"center"}}>
                Add a new Category
            </Typography>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" style={{display:'block',fontWeight:'bold'}}>Type:</label>
                    <TextField value={category} 
                    onChange={(e)=>setCategory(e.target.value)}
                    style={{width:'100%'}}  variant="outlined"  />
                </div>
                <Button type={'submit'}>
                    Add Category
                </Button>
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

export default AddCategory;