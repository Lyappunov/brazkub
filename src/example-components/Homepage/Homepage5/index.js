import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import particles3 from '../../../assets/images/hero-bg/particles-3.svg';
import { NavLink } from 'react-router-dom';


const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference  = + new Date('10/01/${year}') - + new Date();
  let timeLeft = {};

  if(difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
}

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-sunrise-purple py-4 py-xl-5 bg-composed-wrapper">
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-2" />
          <div className="bg-composed-wrapper--content">
            <Container className="py-4 py-xl-5">
              <Grid container spacing={6}>
                <div style={{ fontSize: '60px', color: 'gray' }}>
                  <span><b>Distribution Ends In:</b></span>
                </div>
                <div>
                  <div class="timer-container">
                    <div class="timer">
                      <h1 id="days" class="number"></h1>
                      <h3>Days</h3>
                    </div>
                    <div class="timer">
                      <h1 id="hours" class="number"></h1>
                      <h3>Hours</h3>
                    </div>
                    <div class="timer">
                      <h1 id="minutes" class="number"></h1>
                      <h3>Minutes</h3>
                    </div>
                    <div class="timer">
                      <h1 id="seconds" class="number"></h1>
                      <h3>Seconds</h3>
                    </div>
                  </div>
                </div>
                <Grid item xl={5} className="d-flex align-items-center">

                </Grid>
                <Grid item xl={7}>

                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
