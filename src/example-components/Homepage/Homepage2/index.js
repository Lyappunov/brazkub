import React from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import Slider from 'react-slick';

import illustration1 from '../../../assets/images/illustrations/pack2/financial_analyst.svg';
import mark from '../../../assets/img/logo.png';

export default function LivePreviewExample() {
  return (
    <>
      <div className="z-over pb-5" style={{ marginTop: '-50px' }}>
        <Container className="pb-3 pb-xl-5">
          <Grid container spacing={6}>
            <Grid item xl={5} className="d-none d-xl-flex align-items-center">
              <img alt="..." className="w-100" src={mark} />
            </Grid>
            <Grid item xl={7}>
              <div className="py-0 pb-5 py-xl-5">
                <div className="pr-0 pr-xl-5">
                  <h3 style={{ color: '#ffbf00' }}> BUY, SELL AND EXCHANGE BRK </h3>
                  <h1 className="display-3 mb-3 font-weight-bold">
                    <b>Welcome to BRAZKUB</b>
                  </h1>
                  <p style={{ fontSize: '20px', opacity: '0.7' }}>
                    Brazkub is a BSC Token, and it is the most important element in this new data exchange ecosystem.
                    Smart contracts, which are the applications stored on the Binance smart chain, are built by the data providers, the buyers'data, and the BRK platform.

                    Now you have safety access to your cryptocoins from anywhere and can trade with no warries.
                    This platform allows to create and execute "smart contracts", that are written as programming codes that can be executed in computers.
                    This way, it is possible to negotiate and make business with unknown people, in a transparent and fast way, also with low prices.
                  </p>
                </div>
                <div className="d-block mt-4">
                  <Button
                    className="rounded-sm font-weight-bold shadow-second-sm btn-first"
                  >
                    <a  href='https://www.mintme.com/token/BRAZKUB%20ERC20/trade' target="blank">
                    <label style={{ fontSize: '17px', color:'white'}}>  Brazkub Token  Mintme Exchange </label>
                    </a>
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
