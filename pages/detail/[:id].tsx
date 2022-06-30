// ========== Detail
// import all modules
import React, { Fragment } from 'react';
import Image from 'next/image';
import * as Styled from '../../styles';

// import all components
import {
  Container,
  Head,
  Navbar,
  Footer,
} from '../../components';

const Detail: React.FC = () => (
  <Fragment>
    <Head title="Detail" />
    <Styled.HeroDetail>
      <Navbar />
      <Styled.HeroDetailBody>
        <Container>
          <Styled.HeroDetailHeader>
            <Styled.HeroDetailTitle>
              Belajar Node Js
            </Styled.HeroDetailTitle>
          </Styled.HeroDetailHeader>
          <Styled.HeroDetailMain>
            <Styled.ImageContainerHeroDetailFlex>
              <Styled.ImageContainerHeroDetail>
                <Image
                  src="/images/wkw.jpg"
                  alt="Node Js"
                  layout="responsive"
                  width={550}
                  height={320}
                />
              </Styled.ImageContainerHeroDetail>
            </Styled.ImageContainerHeroDetailFlex>
            <Styled.HeroDetailText>
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Pariatur laudantium harum possimus, adipisci
              nam ad debitis maxime veritatis magni ducimus explicabo
              dignissimos fugiat culpa, mollitia sequi rem eum
              qui labore!. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Pariatur laudantium harum possimus, adipisci
              nam ad debitis maxime veritatis magni ducimus explicabo
              dignissimos fugiat culpa, mollitia sequi rem eum
              qui labore!. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Pariatur laudantium harum possimus, adipisci
              nam ad debitis maxime veritatis magni ducimus explicabo
              dignissimos fugiat culpa, mollitia sequi rem eum
              qui labore!. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Pariatur laudantium harum possimus, adipisci
              nam ad debitis maxime veritatis magni ducimus explicabo
              dignissimos fugiat culpa, mollitia sequi rem eum
              qui labore!. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Pariatur laudantium harum possimus, adipisci
              nam ad debitis maxime veritatis magni ducimus explicabo
              dignissimos fugiat culpa, mollitia sequi rem eum
              qui labore!.
            </Styled.HeroDetailText>
          </Styled.HeroDetailMain>
        </Container>
      </Styled.HeroDetailBody>
    </Styled.HeroDetail>
    <Footer />
  </Fragment>
);

export default Detail;
