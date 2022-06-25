// ========== Home
// import all modules
import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../redux/actions';
import { IGlobalStates } from '../interfaces';
import * as Styled from '../styles';

// import all components
import {
  Head,
  Navbar,
  Container,
  Button,
} from '../components';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const accessToken: string = useSelector((current:IGlobalStates) => current.auth.accessToken);

  const handleToken = () => {
    if (accessToken === '') {
      dispatch(setToken(String(Date.now()), String(Date.now())));
    } else {
      dispatch(setToken('', ''));
    }
  };

  return (
    <Fragment>
      <Head title="Mathius" />
      <Styled.HeroHome>
        <Navbar />
        <Styled.HeroWelcome>
          <Container inheritHeight>
            <Styled.HeroHomeRow>
              <Styled.HeroHomeCol>
                <Styled.BalloonContainer top left rotate={0}>
                  <Image
                    src="/icons/balloon.svg"
                    width={80}
                    height={80}
                    alt="Balloon"
                  />
                </Styled.BalloonContainer>
                <Styled.BalloonContainer top right rotate={270}>
                  <Image
                    src="/icons/balloon.svg"
                    width={80}
                    height={80}
                    alt="Balloon"
                  />
                </Styled.BalloonContainer>
                <Styled.BalloonContainer right bottom rotate={100}>
                  <Image
                    src="/icons/balloon.svg"
                    width={80}
                    height={80}
                    alt="Balloon"
                  />
                </Styled.BalloonContainer>
                <Styled.HeroHomeWelcomeContent>
                  <Styled.HeroHomeTitle>
                    Hi I&apos;m
                    {' '}
                    <Styled.PrimaryText>
                      a Fullstack Developer
                    </Styled.PrimaryText>
                    .
                  </Styled.HeroHomeTitle>
                  <Styled.HeroHomeSubtitle>
                    Hi I&apos;m Mathius a fullstack developer
                    with 1+ years working experiences.
                  </Styled.HeroHomeSubtitle>
                  <Button
                    type="button"
                    size="md"
                    rounded
                    onClick={handleToken}
                  >
                    Download CV
                  </Button>
                </Styled.HeroHomeWelcomeContent>
              </Styled.HeroHomeCol>
              <Styled.HeroHomeCol>
                <Styled.ImageContainer>
                  <Image
                    src="/icons/hero-img.svg"
                    alt="Hero Image"
                    width={400}
                    height={350}
                  />
                </Styled.ImageContainer>
              </Styled.HeroHomeCol>
            </Styled.HeroHomeRow>
          </Container>
        </Styled.HeroWelcome>
      </Styled.HeroHome>
    </Fragment>
  );
};

export default Home;
