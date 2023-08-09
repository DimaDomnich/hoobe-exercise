import Image from 'next/image';
import Head from 'next/head';
import ContentBlock from '@/components/pages/home/content-block';
import Link from '@/components/core/link';
import Button from '@/components/core/button';
import styles from './index.module.scss';
import mockData from '../data/data.json';

type Props = {
  data: typeof mockData;
};

const Home = ({ data }: Props) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/hoobe-icon.png' />
      </Head>
      <div className={styles.wrapper}>
        <ContentBlock
          contentItems={data.content}
          socials={data.userSocialPlatform}
        />
        <footer className={styles.footer}>
          <Button className={styles.actionsWrapper}>
            <Image
              width={24}
              height={24}
              src='/icons/hoobe-light.svg'
              alt='hoobe'
            />
            <span>create your hoo.be</span>
          </Button>
          <Link href='/login'>login</Link>
        </footer>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = mockData;

  return {
    props: {
      data,
    },
  };
}

export default Home;
