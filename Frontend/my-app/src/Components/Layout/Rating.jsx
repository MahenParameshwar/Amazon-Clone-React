import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link , makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    
    reviews:{
        color:' #0066c0',
        fontSize:'12px',
        marginLeft:'10px'
    }
}))

function Rating({reviews}) {
    const classes = useStyles()
    return (
        <>
            <Link>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </Link>
            <span className={classes.reviews}>{reviews}</span>
            
        </>
    );
}

export default Rating;