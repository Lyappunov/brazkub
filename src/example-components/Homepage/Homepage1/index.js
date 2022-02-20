import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import Chart from 'react-apexcharts';

import { NavLink } from 'react-router-dom';

import hero8 from '../../../assets/images/hero-bg/hero-8.jpg';
import p1 from '../../../assets/img/p1.png';
import p2 from '../../../assets/img/p2.png';
import p3 from '../../../assets/img/p3.png';
import p4 from '../../../assets/img/p4.png';

import illustration1 from '../../../assets/images/illustrations/pack2/graduation.svg';

import CryptoHeader from './CryptoHeader.js';

export default function LivePreviewExample() {
  const chartHomepage1AOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    colors: ['#4191ff'],
    fill: {
      color: '#4191ff',
      opacity: 0.1,
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };


  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-night-sky">
        <div className="header-top-section pb-2">
          <CryptoHeader />
        </div>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm"
            style={{ backgroundImage: 'url(' + hero8 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over shadow-container-content-5">
              <Grid container spacing={6} className="py-5">
                <Grid item lg={6}>
                  <div className="pt-3 text-white pt-xl-5 pr-0 pr-xl-5">
                    <h1 className="display-3 font-weight-bold" style={{ fontSize: '100px', color: 'yellow' }}>
                      Cryptocurrency investments
                    </h1>
                    <p className="py-3 text-white-50" style={{ fontSize: '50px' }}>
                      Block Chain
                    </p>
                    <div className="pt-3">
                      <Button
                        component={NavLink}
                        to="/Overview"
                        size="large"
                        className="rounded-sm font-weight-bold shadow-second-sm btn-first">
                        <span className="btn-wrapper--label">
                          Details
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                      <Button
                        component={NavLink}
                        to="/Wallets"
                        size="large"
                        className="rounded-sm bg-white-10 text-white ml-3">
                        <span>My Wallets</span>
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6} className="d-flex align-items-center">
                  <img
                    src={illustration1}
                    alt="..."
                    className="m-5 m-lg-0 img-fit-container"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item lg={3}>
                  <Card className="shadow-xxl card-box-hover-rise mb-5">
                    <div className="d-flex align-items-center p-4">
                      {/* <div className="d-50 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning shadow-xxl mr-3">
                        <FontAwesomeIcon
                          icon={['fab', 'bitcoin']}
                          className="font-size-xxl"
                        />
                      </div> */}

                      <div
                        className="bg-composed-wrapper--image bg-composed-filter-rm"
                        style={{ backgroundImage: 'url(' + p1 + ')', opacity: '0.4', width: '100%', height:'100%' }}
                      />
                      <div>
                        <div className="font-weight-bold text-black" style={{ fontSize: '30px', color:'#c7ee25' }}>
                          Safe And Secure
                        </div>
                        <div style={{ fontSize: '15px', color: '#714154' }}>
                          Nobody owns BRK. You have total control of your money and safetly to trade whenever you want to
                        </div>
                      </div>
                    </div>
                    {/* <div className="px-4">
                      <div className="text-black py-2 font-size-xxl d-flex align-items-center">
                        <div className="display-3 font-weight-bold">$9754</div>
                        <small className="text-success pt-1 font-weight-bold font-size-sm ml-2 align-self-start">
                          +12.54%
                        </small>
                      </div>
                      <div className="d-flex mt-1 align-items-center">
                        <div className="d-inline-flex font-weight-bold bg-neutral-success text-success font-size-sm px-3 py-1 rounded-sm">
                          $9807
                        </div>
                        <div className="font-size-sm font-weight-bold text-black-50 pl-2">
                          Last 24h
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="mt-4">
                      <Chart
                        options={chartHomepage1AOptions}
                        series={chartHomepage1AData}
                        type="area"
                        height={150}
                      />
                    </div> */}
                  </Card>
                </Grid>

                <Grid item lg={3}>
                  <Card className="shadow-xxl card-box-hover-rise mb-5">
                    <div className="d-flex align-items-center p-4">
                      <div>
                        <div
                          className="bg-composed-wrapper--image bg-composed-filter-rm"
                          style={{ backgroundImage: 'url(' + p2 + ')', opacity: '0.4', width: '100%', height: '100%' }}
                        />
                        <div className="font-weight-bold text-black" style={{ fontSize: '30px', color:'#c7ee25' }}>
                          Instant Trading
                        </div>
                        <div style={{ fontSize: '15px', color: '#714154' }}>
                          Peer-to-peer transactions.
                          Trade only time or keep your BRK coins safe in your wallet.
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card className="shadow-xxl card-box-hover-rise mb-5">
                    <div className="d-flex align-items-center p-4">
                      <div>
                        <div
                          className="bg-composed-wrapper--image bg-composed-filter-rm"
                          style={{ backgroundImage: 'url(' + p3 + ')', opacity: '0.4', width: '100%', height: '100%' }}
                        />
                        <div className="font-weight-bold text-black" style={{ fontSize: '30px', color:'#c7ee25' }} >BRK Transaction</div>
                        <div style={{ fontSize: '15px', color: '#714154' }} >
                          Negociate 24/7! The market doesn't stop, you with BRK with BRK you can keep trading it.
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card className="shadow-xxl card-box-hover-rise mb-5">
                    <div className="d-flex align-items-center p-4">
                      <div>
                        <div
                          className="bg-composed-wrapper--image bg-composed-filter-rm"
                          style={{ backgroundImage: 'url(' + p4 + ')', opacity: '0.3', width: '100%', height: '100%' }}
                        />
                        <div className="font-weight-bold text-black" style={{ fontSize: '30px', color:'#c7ee25' }}>
                          Control Blockchain
                        </div>
                        <div style={{ fontSize:'16px', color:'#714154' }}>
                          You will have transparency in operations, based on Blockchain technology.
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>

              </Grid>
            </Container>
            <div className="shadow-container-blocks-5 z-below">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--white)"
                  fillOpacity="1"
                  d="M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
