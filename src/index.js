import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import App from './App';
import * as serviceWorker from './serviceWorker';
function Tweet({ tweet }) {
    return (
        <div className="tweet">
        <div className="content">
                <Author author={tweet.author}/>
        </div>
    </div>
);
}
function Author({ author }) {
const { number,expiration,name, bank } = author;
return (
    <div className="container">
    <span className="author" id='card'>
    <span className="bank" id="bank-name">{bank}</span><br></br><br></br><br></br>
    <span className="number" id="card-number">{number}</span><br></br>
    <span className="expiration" id="valid-date">{expiration}</span><br></br>
    <span className="name" id="cardholder-name">{name}</span>
    </span>
    </div>
);
}
const testTweet = {

author: {
number: "1234 5678 9012",
expiration: "01/20",
name: "Betty White",
bank: "Big Bank, Inc"
}
};


ReactDOM.render(<Tweet tweet={testTweet}/>,
document.querySelector('#root'));