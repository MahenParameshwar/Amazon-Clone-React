import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeGetOrdersRequest } from '../../Redux/Orders.jsx/action';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Order(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const {orders} = useSelector(state=>state.orders)
    useEffect(()=>{
        dispatch(makeGetOrdersRequest(token))
    },[]);
   


    return (
        <>
        <Navbar />
            <div style={{padding:'20px',flex:1}}>
                <Typography variant="h4">
                    Your orders
                </Typography>
               
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Orders</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">Paid</TableCell>
            <TableCell align="left">Date</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {orders?.map((order) => (
            <TableRow key={order._id}>
              <TableCell style={{fontFamily:"inherit"}} component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell style={{fontFamily:"inherit"}} align="left">Rs {order.total}</TableCell>
              <TableCell style={{fontFamily:"inherit"}} align="left">{order.isPaid ? "Paid" : "Not Paid"}</TableCell>
              <TableCell style={{fontFamily:"inherit"}} align="left">{order.date}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        <Footer />
        </>
    );
}

export default Order;