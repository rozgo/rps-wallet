import React, { Component } from 'react';
import './Wallet.css';
import Eos from 'eosjs-api';

const headers = {
  ref_block_num: 1,
  ref_block_prefix: 452435776,
  expiration: new Date().toISOString().split('.')[0]
};

let config = {
  keyProvider: ['5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'],
  // httpEndpoint: 'http://127.0.0.1:8888',
  // mockTransactions: () => 'pass',
  // or 'fail'
  // transactionHeaders: (expireInSeconds, callback) => {
  //   callback(null/*error*/, headers)
  // },
  // expireInSeconds: 60,
  // broadcast: true,
  // debug: false,
  // sign: true
};

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.eos = Eos.Localnet(config);
    this.state = {};

    // this.eos.contract('currency').then(currency =>
    //   this.eos.transaction({
    //     scope: ['currency', 'inita'],
    //     messages: [
    //       {
    //         code: 'currency',
    //         type: 'transfer',
    //         authorization: [{
    //           account: 'currency',
    //           permission: 'active'
    //         }],
    //         data: {
    //           from: 'currency',
    //           to: 'inita',
    //           amount: 7,
    //           memo: ''
    //         }
    //       }
    //     ]
    //   }).then(result => console.log(result))
    // );

    this.eos.getBlock(1).then(result => {
      console.log(result);
      console.log(this.eos);
      console.log(this.eos.transfer());

      this.setState({
        result: result.id
      });
    });
  }

  render() {
    return (
      <div>
        <p>
          Wallet is here.
          {this.state.result}
        </p>
      </div>
    );
  }
}

export default Wallet;
