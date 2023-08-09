import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ContentItem, Social } from '@/types';
import styles from './styles.module.scss';
import ContentItemsList from '../content-items-list';

type Props = {
  socials: Social[];
  contentItems: ContentItem[];
};

const SocialIcon = dynamic(() => import('@/components/core/social-icon'), {
  ssr: false,
});

const ContentBlock = ({ socials, contentItems }: Props) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          width={104}
          height={104}
          alt='hoobe'
          src='/images/hoobe-icon.png'
        />
      </div>
      <h4 className={styles.title}>hoo.be coding exercise</h4>
      <div className={styles.socialsWrapper}>
        {socials.map((social, i) => (
          <SocialIcon
            link={social.link}
            alt={social.altId}
            src={social.link}
            key={i}
          />
        ))}
      </div>
      <ContentItemsList items={contentItems} />
    </div>
  );
};

export default ContentBlock;
