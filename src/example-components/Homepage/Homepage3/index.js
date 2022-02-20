import React from 'react';

import { Grid, Container, Card, Button } from '@material-ui/core';

import GaugeChart from 'react-gauge-chart';

import { NavLink } from 'react-router-dom';

import crypto from '../../../assets/images/apps/crypto-app-material-ui-pro.jpg';
import messenger from '../../../assets/images/apps/messenger-app-material-ui-pro.jpg';
import commerce from '../../../assets/images/apps/commerce-app-material-ui-pro.jpg';
import general from '../../../assets/images/apps/admin-dashboard-material-ui-pro.jpg';

import hero1 from '../../../assets/images/hero-bg/hero-2.jpg';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-arielle-smile bg-composed-wrapper">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-4"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-7" />
          <div className="bg-composed-wrapper--content align-self-center p-4 p-xl-5">
            <Container className="pb-5 py-lg-5 text-center">
              <div className="mb-4">
                {/* <div className="badge badge-success mb-3 h-auto py-2 px-4 font-size-xs badge-pill font-weight-normal">
                  Included
                </div> */}
                <h4 className="font-weight-bold text-white display-3">
                  Life in the digital world
                </h4>
                <Grid item md={11} lg={10} className="mx-auto">
                  <p className="text-white opacity-6 mt-3 mb-4 font-size-xxl">
                    Blockchain Technology
                  </p>
                </Grid>
              </div>
              <Grid container spacing={6}>
                <Grid item md={3}>
                  <span style={{ fontSize: '50px', color:'orange', fontFamily:'Comfortaa' }}><b> 6386 </b></span>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    Market price
                  </p>
                </Grid>
                <Grid item md={3}>
                  <span style={{ fontSize: '50px', color:'orange', fontFamily:'Comfortaa' }}> <b>16mb</b> </span>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    Average black size
                  </p>
                </Grid>
                <Grid item md={3}>
                  <span style={{ fontSize: '50px', color:'orange', fontFamily:'Comfortaa' }}> <b>4327</b> </span>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    Clients worldwide
                  </p>
                </Grid>
                <Grid item md={3}>
                  <span style={{ fontSize: '50px', color:'orange', fontFamily:'Comfortaa' }}> <b>2000+</b> </span>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    Transactions
                  </p>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>

      <div className="py-4 feature-box">
        <Container className="py-5">
          <div className="mb-4 text-center">
            <h6 className="font-weight-bold text-second display-3" style={{ fontSize: '80px' }}>
              Access analytical market & price data
            </h6>
            <Grid item md={11} lg={10} className="mx-auto">
              <p className="text-second opacity-6 mt-3 mb-5" style={{ fontSize: '30px' }}>
                Easily switch crypto-to-crypto in your Blockchain wallet.
                We now offer buying and selling to users in many countries who want to invest in encryption without leaving their secure wallet experience.
                Exchanges provide highly varying degrees of safety, security, privacy, and control over your funds and information.
                Perform your own due diligence and choose a wallet where you will keep your BRK before selecting on exchange.
              </p>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}
