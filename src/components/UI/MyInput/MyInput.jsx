import React from 'react';
import classes from'./MyInput.module.css'
function MyInput(props) {
    return (
        <div>
            <input {...props} className={classes.MyInput}></input>
        </div>
    );
}

export default MyInput;