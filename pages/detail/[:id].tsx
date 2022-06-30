// ========== Detail
// import all modules
import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import * as Styled from '../../styles';

// import all components
import {
  Container,
  Head,
  Navbar,
  Footer,
} from '../../components';
import { IGlobalStates, IPortofolios } from '../../interfaces';

const Detail: React.FC = () => {
  const router = useRouter();
  const { id = 1 } = router.query;

  const articlesRedux: IPortofolios[] = useSelector(
    (current: IGlobalStates) => current.articles.articles,
  );

  const [articles, setArticles] = useState<IPortofolios[]>([]);

  useEffect(() => {
    const modified = articlesRedux.filter((item) => item.id === Number(id));
    // window.alert(id);
    // console.log()
    setArticles(modified);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
                    src={articles.length > 0 ? articles[0].img : '/aja'}
                    alt={articles.length > 0 ? articles[0].title.slice(0, 5) : '-'}
                    layout="responsive"
                    width={550}
                    height={320}
                  />
                </Styled.ImageContainerHeroDetail>
              </Styled.ImageContainerHeroDetailFlex>
              <Styled.HeroDetailText>
                {articles.length > 0 ? articles[0].description : '-'}
              </Styled.HeroDetailText>
            </Styled.HeroDetailMain>
          </Container>
        </Styled.HeroDetailBody>
      </Styled.HeroDetail>
      <Footer />
    </Fragment>
  );
};

export default Detail;
