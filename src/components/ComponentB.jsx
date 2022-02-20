import React from 'react';
import withToolTip from './hoc/withToolTip';

function ComponentB(props) {
    return (
        <div style={{border:'1px solid blue',margin:'20px'}}>
            <h1>This is Heading component B</h1>
            {props.showToolTip && <span>This is ToolTip</span>}
        </div>
    );
}

export default withToolTip( ComponentB);