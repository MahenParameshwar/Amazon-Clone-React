import { Button, Container, Grid, Link, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const styles = {
   button:{
    borderRadius: "3px",
    borderColor: "#ADB1B8 #A2A6AC #8D9096",
    borderStyle: "solid",
    borderWidth: "1px",
    cursor: "pointer",
    height: "22px",
    background: "linear-gradient(to bottom,#f7f8fa,#e7e9ec)",
    boxShadow: "0 1px 0 rgba(255,255,255,.6) inset",
    fontSize: "11px",
    lineHeight: "22px",
    padding: "0 6px 0 7px",
    color: "#111",
    margin:'0px 0px 0px 10px'
   }
}
function Admin(props) {
    const {classes} = props
    return (
        <main>
                <Container>
                    <Grid container>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Typography variant="h1">
                                All Products
                            </Typography>
            
                            <Button>
                                Add a new Product
                            </Button>
                            <Button className={classes.button}>
                                Add a new Category
                            </Button>
                            <Button className={classes.button}>
                                Add a new Owner
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                
                <Container>
                    <Grid container>
                        <Grid item lg={3} md={6} sm={12} xs={12}>
                            <div>
                                <Link>
                                    <img src="s" alt="img" />
                                </Link>
                            </div>
                            <div  >
                                <span>
                                    <div>
                                        Product title
                                    </div>
                                </span>
                            </div>
                            <div>
                                <Link>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </Link>
                                <span>
                                    (1178)
                                </span>
                            </div>
                            <div>
                                Price
                            </div>
                            <div>
                            <Button className={classes.button}>
                                Update
                            </Button>
                            <Button className={classes.button}>
                                Delete
                            </Button>
                            </div>
                        </Grid>
                        
                    </Grid>

                </Container>
        </main>
    );
}

export default withStyles(styles)(Admin);