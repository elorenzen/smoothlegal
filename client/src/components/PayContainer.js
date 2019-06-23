import React from 'react';

import { Button } from 'element-react/next';

import CheckoutContainer from './CheckoutContainer';
import Payments from './Payments';

class PayContainer extends React.Component {

    state = {
        tokenInfo: []
    };

    handleSubmit(event) {
        event.preventDefault();

        //this.props.finalSubmit(this.state);
    }

    onBack(event) {
        event.preventDefault();

        this.props.onBack(this.state);
    }

    render() {
        return (
            <div>
                <h3>Review</h3>
                <h3>Pay</h3>
                {/*
                <CheckoutContainer 
                    tokenInfo={this.state.tokenInfo}
                />
                */}
                <Payments finalSubmit={this.props.finalSubmit}/>
                <Button onClick={this.onBack.bind(this)}>
                    Back
                </Button>
                <Button type='submit' onClick={this.handleSubmit.bind(this)}>
                    Submit
                </Button>
            </div>
        )
    }
}

export default PayContainer;