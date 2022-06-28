// ========== Home
// import all modules
import React, { Fragment, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../redux/actions';
import { IGlobalStates, IHomeStates } from '../interfaces';
import * as Styled from '../styles';

// import all components
import {
  Head,
  Navbar,
  Container,
  Button,
  Card,
} from '../components';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const accessToken: string = useSelector((current:IGlobalStates) => current.auth.accessToken);
  const [state, setState] = useState<IHomeStates>({
    portofolios: [],
    loading: false,
  });

  const handleToken = () => {
    if (accessToken === '') {
      dispatch(setToken(String(Date.now()), String(Date.now())));
    } else {
      dispatch(setToken('', ''));
    }
  };

  const handleMoveToOtherWebsite = (link: string) => {
    window.location.href = link;
  };

  useEffect(() => {
    setState((current: IHomeStates) => ({
      ...current,
      portofolios: [
        {
          id: 1,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 2,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 3,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 4,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 5,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 6,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 7,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 8,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 9,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 10,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
        {
          id: 11,
          title: 'Belajar Dasar Node Js',
          description: 'Belajar  membuat aplikasi crud sederhana dengan menggunakan Node Js (Express) dan MySQL. Membuat login & register serta input, ubah dan hapus data.',
          img: '/images/wkw.jpg',
          technologies: [
            {
              id: 1,
              name: 'Node Js',
              variant: 'primary',
            },
            {
              id: 2,
              name: 'React Js',
              variant: 'secondary',
            },
            {
              id: 4,
              name: 'MySQL',
              variant: 'tertiary',
            },
          ],
        },
      ],
    }));
  }, []);

  return (
    <Fragment>
      <Head title="Mathius" />
      <Styled.HeroHome>
        <Navbar />
        <Styled.HeroWelcome>
          <Container inheritHeight>
            <Styled.HeroHomeRow>
              <Styled.HeroHomeCol>
                <Styled.BalloonContainer
                  customPosition={{
                    top: -7,
                  }}
                  rotate={0}
                  hiddenWhenSize={0}
                >
                  <Image
                    src="/icons/balloon.svg"
                    width={80}
                    height={80}
                    alt="Balloon"
                  />
                </Styled.BalloonContainer>
                <Styled.BalloonContainer
                  customPosition={{
                    top: -5.5,
                    right: 0,
                  }}
                  rotate={270}
                  hiddenWhenSize={0}
                >
                  <Image
                    src="/icons/balloon.svg"
                    width={80}
                    height={80}
                    alt="Balloon"
                  />
                </Styled.BalloonContainer>
                <Styled.BalloonContainer
                  customPosition={{
                    bottom: -5.5,
                    right: 0,
                  }}
                  rotate={100}
                  hiddenWhenSize={0}
                >
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
        <Styled.HeroPortofolio>
          <Container>
            <Styled.HeroPortofolioHeader>
              <Styled.BalloonContainer
                customPosition={{
                  top: -2.2,
                  left: 14,
                }}
                rotate={0}
                hiddenWhenSize={768}
              >
                <Image
                  src="/icons/balloon.svg"
                  width={80}
                  height={80}
                  alt="Balloon"
                />
              </Styled.BalloonContainer>
              <Styled.BalloonContainer
                customPosition={{
                  top: 5,
                  left: 29,
                }}
                rotate={0}
                hiddenWhenSize={0}
              >
                <Image
                  src="/icons/triangle.svg"
                  width={20}
                  height={20}
                  alt="Balloon"
                />
              </Styled.BalloonContainer>
              <Styled.BalloonContainer
                customPosition={{
                  top: 5,
                  right: 29,
                }}
                rotate={157}
                hiddenWhenSize={0}
              >
                <Image
                  src="/icons/triangle.svg"
                  width={20}
                  height={20}
                  alt="Balloon"
                />
              </Styled.BalloonContainer>
              <Styled.HeroHomeTitle>
                <Styled.PrimaryText>
                  My Portofolios
                </Styled.PrimaryText>
                {' '}
                Updates
              </Styled.HeroHomeTitle>
              <Styled.HeroHomeSubtitle>
                Let&apos;s write our future
                with code
              </Styled.HeroHomeSubtitle>
              <Styled.BalloonContainer
                customPosition={{
                  top: -2.2,
                  right: 14,
                }}
                rotate={100}
                hiddenWhenSize={768}
              >
                <Image
                  src="/icons/balloon.svg"
                  width={80}
                  height={80}
                  alt="Balloon"
                />
              </Styled.BalloonContainer>
              <Styled.BalloonContainer
                customPosition={{
                  bottom: 7.5,
                  left: 29,
                }}
                rotate={0}
                hiddenWhenSize={0}
              >
                <Image
                  src="/icons/triangle.svg"
                  width={20}
                  height={20}
                  alt="Balloon"
                />
              </Styled.BalloonContainer>
              <Styled.BalloonContainer
                customPosition={{
                  bottom: 6.5,
                  right: 30,
                }}
                rotate={157}
                hiddenWhenSize={0}
              >
                <Image
                  src="/icons/triangle.svg"
                  width={20}
                  height={20}
                  alt="Balloon"
                />
              </Styled.BalloonContainer>
            </Styled.HeroPortofolioHeader>
            <Styled.HeroPortofolioMain>
              <Styled.HeroPortofolioMainRow>
                {state.portofolios.map((item, index) => (
                  <Styled.HeroPortofolioMainCol
                    // eslint-disable-next-line react/no-array-index-key
                    key={index.toString()}
                    count={state.portofolios.length}
                  >
                    <Card
                      title={item.title}
                      description={item.description}
                      img={item.img}
                      technologies={item.technologies}
                    />
                  </Styled.HeroPortofolioMainCol>
                ))}
              </Styled.HeroPortofolioMainRow>
            </Styled.HeroPortofolioMain>
          </Container>
        </Styled.HeroPortofolio>
        <Styled.Footer>
          <Styled.FooterContainer>
            <Styled.FooterTitle>
              &copy; Mathius Kormasela 2022
            </Styled.FooterTitle>
            <Styled.FooterTitle>
              My Personal Website
            </Styled.FooterTitle>
            <Styled.FooterTitle>
              let&apos;s writes our future with code
            </Styled.FooterTitle>
            <Styled.FooterContent>
              <Styled.FooterContentCol>
                <Styled.ListTitle>
                  Frontend Skills
                </Styled.ListTitle>
                <Styled.ListContent>
                  <Styled.ListItems>
                    HTML
                  </Styled.ListItems>
                  <Styled.ListItems>
                    CSS
                  </Styled.ListItems>
                  <Styled.ListItems>
                    Javascript
                  </Styled.ListItems>
                  <Styled.ListItems>
                    Typescript
                  </Styled.ListItems>
                </Styled.ListContent>
              </Styled.FooterContentCol>
              <Styled.FooterContentCol>
                <Styled.ListTitle>
                  Backend Skills
                </Styled.ListTitle>
                <Styled.ListContent>
                  <Styled.ListItems>
                    Node Js
                  </Styled.ListItems>
                  <Styled.ListItems>
                    Express Js
                  </Styled.ListItems>
                  <Styled.ListItems>
                    Nest Js
                  </Styled.ListItems>
                  <Styled.ListItems>
                    MySQL
                  </Styled.ListItems>
                  <Styled.ListItems>
                    Mongodb
                  </Styled.ListItems>
                </Styled.ListContent>
              </Styled.FooterContentCol>
              <Styled.FooterContentCol>
                <Styled.ListTitle>
                  Social Media
                </Styled.ListTitle>
                <Styled.ListContent>
                  <Styled.ListItems
                    pointer
                    onClick={() => handleMoveToOtherWebsite('https://www.facebook.com/mathiuskormasela/')}
                  >
                    Facebook
                  </Styled.ListItems>
                  <Styled.ListItems
                    pointer
                    onClick={() => handleMoveToOtherWebsite('https://twitter.com/Mathius87248424')}
                  >
                    Twitter
                  </Styled.ListItems>
                </Styled.ListContent>
              </Styled.FooterContentCol>
              <Styled.FooterContentCol>
                <Styled.ListTitle>
                  Youtube
                </Styled.ListTitle>
                <Styled.ListContent>
                  <Styled.ListItems
                    pointer
                    onClick={() => handleMoveToOtherWebsite('https://www.youtube.com/channel/UC5eUSF2W_vAkYA6wdilJjOw/videos')}
                  >
                    @mathius
                  </Styled.ListItems>
                </Styled.ListContent>
              </Styled.FooterContentCol>
              <Styled.FooterContentCol>
                <Styled.ListTitle>
                  Contact
                </Styled.ListTitle>
                <Styled.ListContent>
                  <Styled.ListItems title="mathiuskormasela12@gmail.com">
                    Email
                  </Styled.ListItems>
                  <Styled.ListItems title="+62-811-1906-204">
                    WhatsApp
                  </Styled.ListItems>
                </Styled.ListContent>
              </Styled.FooterContentCol>
            </Styled.FooterContent>
            <Styled.FooterTitle>
              Created with love by Mathius
            </Styled.FooterTitle>
            <Styled.FooterTitle>
              in Jakarta 2022
            </Styled.FooterTitle>
          </Styled.FooterContainer>
        </Styled.Footer>
      </Styled.HeroHome>
    </Fragment>
  );
};

export default Home;
