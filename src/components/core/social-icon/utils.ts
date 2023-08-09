const socialsIconsMap = {
  instagram: '/icons/instagram.svg',
  thread: '/icons/threads.svg',
  tiktok: '/icons/tiktok.svg',
  twitter: '/icons/twitter.svg',
};

type SocialKey = keyof typeof socialsIconsMap;

export const getSocialsImagePath = (link: string) => {
  const matchedSocialSrcKey: SocialKey =
    (Object.keys(socialsIconsMap).find((socialKey) =>
      link.includes(socialKey)
    ) as SocialKey) ?? ('instagram' as SocialKey);

  return socialsIconsMap[matchedSocialSrcKey];
};
