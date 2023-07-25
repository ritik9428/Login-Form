import React from 'react';
import './output.css';

function Output(props) {
    const paragraph = document.querySelector('#paragraph');
    const params = new URLSearchParams(window.location.search);


    params.forEach((value, key) => {
        paragraph.append(`${key} --> ${value}`);
        paragraph.append(document.createElement('br'));
    });
    return (
        <div className='body'> 
            <p id="paragraph">
                Username = {props.username}<br />
                Email = {props.email}<br />
                Password = {props.password}<br />
                Confirm-Password = {props.confirmPassword}<br />
                </p>
            <a href="/" className="home">GO TO HOME PAGE</a>
        </div>
    );
}

export default Output;
