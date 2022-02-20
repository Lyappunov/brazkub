import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, CardContent } from '@material-ui/core';

import Slider from 'react-slick';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';

import exchange from '../../../assets/img/wavesc.png';
import mint from '../../../assets/img/mintmec.png';

import logo1 from '../../../assets/images/stock-logos/netflix-icon.svg';
import logo2 from '../../../assets/images/stock-logos/airbnb-icon.svg';
import logo3 from '../../../assets/images/stock-logos/instagram-icon.svg';
import logo4 from '../../../assets/images/stock-logos/slack-icon.svg';
import logo5 from '../../../assets/images/stock-logos/google-icon.svg';
import logo6 from '../../../assets/images/stock-logos/microsoft-icon.svg';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function LivePreviewExample() {
  const marketingTestimonials1 = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };
//
  return (
    <>
      <div className="py-5 bg-secondary">
        <Container className="px-3 py-5">
          <Slider
            {...marketingTestimonials1}
            className="slider-arrows-outside slider-arrows-dark slider-dots-outside">
            <div>
              <Card className="m-4">
                <CardContent>
                  <div>
                    <div>
                      <Card className="card-transparent">
                        <a
                          href="#/" style={{ backgroundColor: 'black' }}
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <img
                            src={exchange}
                            className="card-img-top"
                            style={{ width: '100%' }}
                            alt="..."
                          />
                        </a>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div>
                    <div>
                      <Card className="card-transparent">
                        <a
                          href="#/" style={{ backgroundColor: 'black' }}
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <img
                            src={mint}
                            className="card-img-top"
                            style={{ width: '100%' }}
                            alt="..."
                          />
                        </a>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div>
                    <div>
                      <Card className="card-transparent">
                        <a
                          href="#/" style={{ backgroundColor: 'black' }}
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <img
                            src={exchange}
                            className="card-img-top"
                            style={{ width: '100%' }}
                            alt="..."
                          />
                        </a>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div>
                    <div>
                      <Card className="card-transparent">
                        <a
                          href="#/" style={{ backgroundColor: 'black' }}
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <img
                            src={mint}
                            className="card-img-top"
                            style={{ width: '100%' }}
                            alt="..."
                          />
                        </a>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </Container>

        <Container className="shadow-xxl bg-second object-skew hover-scale-rounded my-5 py-5 rounded-lg">
          <Grid
            item
            lg={10}
            xl={8}
            className="mx-auto mt-5 pt-5 text-white text-center">
            <h4 className="font-weight-bold text-white display-3">
              Hurry to invest in cryptocurrency
            </h4>
            <Grid item md={11} lg={10} className="mx-auto">
              <p className="text-white opacity-6 mt-3 mb-5 font-size-xxl">
                It is a Token that does not have Valatility like most Cryptocurrencies.
              </p>
            </Grid>
            <Grid>
              <p>
                because it uses a system or Software that is the one that produces supply and demond, to increase its value and the obsence of Crypto Whales to control the purchase and sale of the Token
              </p>
            </Grid>
          </Grid>
          <div className="pb-5 d-flex flex-wrap align-items-center justify-content-center">
            <div className="bg-white rounded-circle btn-icon d-80 shadow-xxl m-4 hover-scale-lg d-flex align-self-stretch">
              <img
                src={logo1}
                style={{ height: 40 }}
                className="m-auto img-fluid"
                alt="..."
              />
            </div>
            <div className="bg-white rounded-circle btn-icon d-80 shadow-xxl m-4 hover-scale-lg d-flex align-self-stretch">
              <img
                src={logo2}
                style={{ height: 40 }}
                className="m-auto img-fluid"
                alt="..."
              />
            </div>
            <div className="bg-white rounded-circle btn-icon d-80 shadow-xxl m-4 hover-scale-lg d-flex align-self-stretch">
              <img
                src={logo3}
                style={{ height: 40 }}
                className="m-auto img-fluid"
                alt="..."
              />
            </div>
            <div className="bg-white rounded-circle btn-icon d-80 shadow-xxl m-4 hover-scale-lg d-flex align-self-stretch">
              <img
                src={logo4}
                style={{ height: 40 }}
                className="m-auto img-fluid"
                alt="..."
              />
            </div>
            <div className="bg-white rounded-circle btn-icon d-80 shadow-xxl m-4 hover-scale-lg d-flex align-self-stretch">
              <img
                src={logo5}
                style={{ height: 40 }}
                className="m-auto img-fluid"
                alt="..."
              />
            </div>
            <div className="bg-white rounded-circle btn-icon d-80 shadow-xxl m-4 hover-scale-lg d-flex align-self-stretch">
              <img
                src={logo6}
                style={{ height: 40 }}
                className="m-auto img-fluid"
                alt="..."
              />
            </div>
          </div>
        </Container>
        <div className="pb-5" />
      </div>
    </>
  );
}
