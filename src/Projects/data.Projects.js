import nu from './nu.png';
import withdipp from './withdipp.jpg';
import remy from './remy.png';

const data = [
  {
    image: nu,
    id: 1,
    header: 'Nu - Events. Today.',
    icons: [
      {
        type: 'world',
        id: 11,
        url: 'https://nuapp.occam.ooo'
      },
      {
        type: 'apple',
        id: 12,
        url: 'https://itunes.apple.com/dk/app/nu-curated-events-today-in-copenhagen/id1104697859?mt=8'
      },
      {
        type: 'android',
        id: 13,
        url: 'https://play.google.com/store/apps/details?id=com.occam.mobile.android.nu&hl=en'
      }
    ],
    description:
      "Nu is a mobile app that gives you events in the best places of your city, for the same day. Every day, you are able to see what's going on.",
    owner: 'Own Project. (c)',
    url: 'https://occam.ooo',
    urlName: 'Occam.ooo'
  },
  {
    image: withdipp,
    id: 2,
    header: 'with dipp',

    icons: [
      {
        type: 'apple',
        id: 21,
        url: 'https://itunes.apple.com/dk/app/with-dipp/id1165027402?mt=8'
      },
      {
        type: 'android',
        id: 22,
        url: 'https://play.google.com/store/apps/details?id=com.withdipp'
      }
    ],
    description:
      'Dipp is an engaging way to light up that travel bug in all of us. With a gallery of trending travels coming from your friends and favorite bloggers’ social media feeds around the world, you have the most trusted resources to find your next vacation spot or have a blast where you are.',
    owner: 'Customer Project. (c)',
    url: 'http://withdipp.com/',
    urlName: 'withdipp'
  },
  {
    image: remy,
    id: 3,
    header: ' Remy – Your Restaurant Assistant',

    icons: [
      {
        type: 'apple',
        id: 31,
        url: 'https://mobilabsolutions.com/remy-your-restaurant-assistant/'
      }
    ],
    description:
      'Remy is an iOS Application which aims to provide restaurant owners deep insights into their online competition environment and to improve their online presence.',
    owner: 'Customer Project. (c)',
    url: 'https://mobilabsolutions.com/',
    urlName: 'Mobilab solutions'
  }
];

export default data;
