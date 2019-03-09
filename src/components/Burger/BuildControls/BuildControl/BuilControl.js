import React from 'react';

import classes from './BuilControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.lable}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added} >More</button>
    </div>
);

export default buildControl;