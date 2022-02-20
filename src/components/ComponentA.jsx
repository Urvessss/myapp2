import React from 'react';
import withToolTip from './hoc/withToolTip';

function ComponentA(props) {
    return (
        <div style={{ border: '1px solid black', margin: '20px', background: 'red' }}>
            <div className='course'>
                <h1>courseList</h1>
                <p>Trainer :</p>
                <p>Start Date</p>
                <p>Description: </p>
                <button class="btn btn-outline-success            my-2 my-sm-0" type="submit">Enroll Now</button>
                {props.showToolTip && <span style={{ background: 'green' }}>Limited Time</span>}
            </div>
            <div className='course'>
                <h1>courseList</h1>
                <p>Trainer :</p>
                <p>Start Date</p>
                <p>Description: </p>
                <button class="btn btn-outline-success            my-2 my-sm-0" type="submit">Enroll Now</button>
                {props.showToolTip && <span style={{ background: 'Yellow' }}>Comming soon</span>}
            </div>
        </div>
    );
}


export default withToolTip(ComponentA);