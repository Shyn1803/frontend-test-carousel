import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Carousel from '@/components/Carousel';
import { fetcher } from 'utils/global';

import styles from './index.module.scss';

export default function Home() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [data, setData] = useState({});

  const sliderRef = useRef(null);

  useEffect(() => {
    fetcher('/api/hello')
      .then(res => setData(res));
  }, []);

  const beforeChange = (oldIndex, newIndex) => {
    setCenterIndex(newIndex);
  };

  const handleGoTo = (index) =>{
    sliderRef?.current?.slickGoTo(index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Test</title>
        <meta name="description" content="Generate a frontend web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Carousel
        </h1>
        <div className={styles.carouselWrapper}>
          <Carousel
            ref={sliderRef}
            beforeChange={beforeChange}
            slidesToShowOnDesktop={5}
            slidesToShowOnMobile={1}
          >
            {data?.length > 0 && data?.map((item, index) => {
              return (
                <div className="item" key={item.id} onClick={() => handleGoTo(index)}>
                  <img className="image" src={item.imageUrl} alt='site'/>
                </div>);
            })}
          </Carousel>
          <div className={styles.propertyWrapper}>
            <ul>
              {data?.length > 0 && data?.[centerIndex]?.property?.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
