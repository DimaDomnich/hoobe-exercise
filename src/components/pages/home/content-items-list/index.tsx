import clsx from 'clsx';
import Image from 'next/image';
import Card from '@/components/core/card';
import { ContentItem } from '@/types';
import styles from './styles.module.scss';

type Props = {
  items: ContentItem[];
};

const ContentItemsList = ({ items }: Props) => {
  return (
    <ul className={clsx(styles.wrapper)}>
      {items.map((item, i) => (
        <li key={i} className={styles.listItem}>
          <Card
            className={styles.card}
            title={item.content.title}
            icon={
              i === 0 ? (
                <Image
                  alt={item.content.title}
                  src='/icons/hoobe-light-outlined.svg'
                  width={24}
                  height={24}
                />
              ) : null
            }
          >
            {i === 0 ? (
              <a
                href={item.content.link}
                className={clsx(styles.cardContent)}
                style={{
                  backgroundImage:
                    'url(/images/content-id-f9wzS1vHcf-image.jpg)',
                }}
                target='_blank'
              ></a>
            ) : item.content.link.includes('youtube.com') ? (
              <iframe
                className={styles.cardContent}
                width='1038'
                height='584'
                src='https://www.youtube.com/embed/SCdJDYPbBoQ?list=UUvd_AUR6ErsRblEWHrCxlDQ'
                title='It&#39;s more than just a link.'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            ) : null}
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default ContentItemsList;
