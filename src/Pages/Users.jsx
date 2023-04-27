import { Button, Grid, Typography } from "@mui/material";
import UserItem from "./UserItem";
import axios from 'axios';
import React from "react";
import { RepeatOneSharp } from "@mui/icons-material";
import Query2 from "./Query2";
import Query3 from "./Query3";
import Query4 from "./Query4";
import Query5 from "./Query5";
import Query6 from "./Query6";
import Query7 from "./Query7";
import Query8 from "./Query8";
import Query9 from "./Query9";
import Query10 from "./Query10";
import Query11 from "./Query11";
import Query12 from "./Query12";
import Query13 from "./Query13";



export default function Users() {
    // const axios = require('axios');
    const [user,setUser] = React.useState(false)
    const [query2,setQuery2] = React.useState(false)
    const [query3,setQuery3] = React.useState(false)
    const [query4,setQuery4] = React.useState(false)
    const [query5,setQuery5] = React.useState(false)
    const [query6,setQuery6] = React.useState(false)
    const [query7,setQuery7] = React.useState(false)
    const [query8,setQuery8] = React.useState(false)
    const [query9,setQuery9] = React.useState(false)
    const [query10,setQuery10] = React.useState(false)
    const [query11,setQuery11] = React.useState(false)
    const [query12,setQuery12] = React.useState(false)
    const [query13,setQuery13] = React.useState(false)



    function query1() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query1',
            // responseType: 'json'
          })
            .then(function (response) {
                setUser(response.data)
            });
        
    }
    function query2_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query2',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery2(response.data)
            });
        
    }
    function query3_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query3',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery3(response.data)
            });
        
    }
    function query4_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query4',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery4(response.data)
            });
        
    }
    function query5_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query5',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery5(response.data)
            });
    }
    function query6_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query6',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery6(response.data)
            });
    }
    function query7_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query7',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery7(response.data)
            });
    }
    function query8_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query8',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery8(response.data)
            });
    }
    function query9_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query9',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery9(response.data)
            });
    }
    function query10_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query10',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery10(response.data)
            });
    }
    function query11_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query11',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery11(response.data)
            });
    }
    function query12_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query12',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery12(response.data)
            });
    }
    function query13_() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/query13',
            // responseType: 'json'
          })
            .then(function (response) {
                setQuery13(response.data)
            });
    }

    return(
        <React.Fragment>
        <Typography sx={{margin:2}}>
            Give everything in the customers table: 
            <Button onClick ={query1}>
                Query1: SELECT * FROM customers:
            </Button>
            <Grid container spacing={2}>

            {user?user.map((e)=>
                <Grid item xs={2}>
                    <UserItem props = {e} />
                </Grid>
            
            ):null}
        </Grid>

        </Typography>
     
     <Typography sx={{margin:2}}>
     Which usernames have a balance greater than 0?”: 
     
     <Button onClick ={query2_}>
         {`Query2: Select Username from users where balance > 0.00:`}
     </Button>
     
     <Grid container spacing={2}>
        {query2?query2.map((e)=>
            <Grid item xs={2}>
                <Query2 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>

     <Typography sx={{margin:2}}>
     Delete the user with the userID of 1026 
     
     <Button onClick ={query3_}>
         {`Query3: Delete from Users where userID = 1026;`}
     </Button>
     
     <Grid container spacing={2}>
        {query3?
        // query3.map((e)=>
            <Grid item xs={2}>
                <Query3 props = {query3} />
            </Grid>
        // )
        :null}
        </Grid>
     </Typography>

     <Typography sx={{margin:2}}>
     Add A new customer
     
     <Button onClick ={query4_}>
         {`Query4: insert into Users(Userid,Usertype,Username,balance,address,email,phonenumber,password) values(1026, 'Vendor','User30', 10000 , 'Austin, TX', 'User5921@gmail.com', 4770410728, 'User4250')`}
     </Button>
     
     <Grid container spacing={2}>
        {query4?
        // query4.map((e)=>
            <Grid item xs={2}>
                <Query4 props = {query4} />
            </Grid>
        // )
        :null}
        </Grid>
     </Typography>
    
    <Typography sx={{margin:2}}>
    Delete anyone in the records who hasn't bought anything
     
     <Button onClick ={query5_}>
         {`Query5: Delete from customer where purchasehistory = N/A`}
     </Button>
     
     <Grid container spacing={2}>
        {query5?
        // query3.map((e)=>
            <Grid item xs={2}>
                <Query5 props = {query5} />
            </Grid>
        // )
        :null}
        </Grid>
     </Typography>

     <Typography sx={{margin:2}}>
     Give all the usernames of those who live in Chicago, IL
     
     <Button onClick ={query6_}>
         {`Query6: Select Username from User where address = ‘Chicago, IL’ `}
     </Button>
     
     <Grid container spacing={2}>
        {query6?query6.map((e)=>
            <Grid item xs={2}>
                <Query6 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>

     <Typography sx = {{margin:2}}>
     Give all of the product ids currently pending from orders that is returnable and made by a customer 
     <Button onClick ={query7_}>
         {`Query7: Select productID from Order_ where returnable = 1 And Usertype = "Customer" `}
     </Button>
     
     <Grid container spacing={2}>
        {query7?query7.map((e)=>
            <Grid item xs={2}>
                <Query7 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>

     <Typography sx={{margin:2}}>
     Give the ID's that are all in chicago illinois and have more than 600 delivery cars
     
     <Button onClick ={query8_}>
         {`Query8: Select CenterId from Distributioncenter where Location = ‘Chicago, IL’ and NumberofdeliveryCars  > 600; `}
     </Button>
     
     <Grid container spacing={2}>
        {query8?query8.map((e)=>
            <Grid item xs={2}>
                <Query8 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>
     
     <Typography sx={{margin:2}}>
     Give all of the toaster items in the products table
     
     <Button onClick ={query9_}>
         {`Query9: Select productId,productname from products where ProductName like (“%Toaster%”) `}
     </Button>
     
     <Grid container spacing={2}>
        {query9?query9.map((e)=>
            <Grid item xs={2}>
                <Query9 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>


     <Typography sx={{margin:2}}>
     Name any warehouses with a carrying capacity over 45000000 
     
     <Button onClick ={query10_}>
         {`Query10: Select WarehouseName from Warehouse where capacity > 45000000`}
     </Button>
     
     <Grid container spacing={2}>
        {query10?query10.map((e)=>
            <Grid item xs={2}>
                <Query10 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>

     <Typography sx={{margin:2}}>
     Get the orders done after 1999 that are returnable from the orders Table:
     
     <Button onClick ={query11_}>
         {`Query11: Select OrderID from order_ where Year(PurchaseDate) > 1999 AND returnable = 1;`}
     </Button>
     
     <Grid container spacing={2}>
        {query11?query11.map((e)=>
            <Grid item xs={2}>
                <Query11 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>

     <Typography sx={{margin:2}}>
     For the warehouses in Chicago IL. Give the name and capacity of with the lowest capacity

     <Button onClick ={query12_}>
         {`Query12: Select Min(Capacity), Location from Warehouse where Location = ‘Chicago IL’`}
     </Button>
     
     <Grid container spacing={2}>
        {query12?query12.map((e)=>
            <Grid item xs={2}>
                <Query12 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>

     <Typography sx={{margin:2}}>
     Get the UserID from the customers that live in Austin Texas, or the vendors from the users Table
     <Button onClick ={query13_}>
         {`Query13: Select distinct(Location) from warehouse`}
     </Button>
     
     <Grid container spacing={2}>
        {query13?query13.map((e)=>
            <Grid item xs={2}>
                <Query13 props = {e} />
            </Grid>
        ):null}
        </Grid>
     </Typography>



 </React.Fragment>
    
    
    )


}