import mockData from '../data/data.json';

export type Data = typeof mockData;

export type Social = (typeof mockData.userSocialPlatform)[0];

export type ContentItem = (typeof mockData.content)[0];
