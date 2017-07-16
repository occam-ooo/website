import nu from './nu.png';
import withdipp from './withdipp.jpg';
import remy from './remy.png';

const data = [
  {
    image: nu,
    header: 'Nu - Events. Today.',
    icons: [
      {
        type: 'world',
        url: 'https://nuapp.occam.ooo'
      },
      {
        type: 'apple',
        url: 'https://itunes.apple.com/dk/app/nu-curated-events-today-in-copenhagen/id1104697859?mt=8'
      },
      {
        type: 'android',
        url: 'https://play.google.com/store/apps/details?id=com.occam.mobile.android.nu&hl=en'
      }
    ],
    description: `Nu is a mobile app that gives you events in the best places of your city, for the same day. Every day, you are able to see what's going on.`,
    owner: 'Own Project. (c)',
    url: 'https://occam.ooo',
    urlName: 'Occam.ooo'
  },
  {
    image: withdipp,
    header: 'with dipp',

    icons: [
      {
        type: 'apple',
        url: 'https://itunes.apple.com/dk/app/with-dipp/id1165027402?mt=8'
      },
      {
        type: 'android',
        url: 'https://play.google.com/store/apps/details?id=com.withdipp'
      }
    ],
    description: 'Dipp is an engaging way to light up that travel bug in all of us. With a gallery of trending travels coming from your friends and favorite bloggers’ social media feeds around the world, you have the most trusted resources to find your next vacation spot or have a blast where you are.',
    owner: 'Customer Project. (c)',
    url: 'http://withdipp.com/',
    urlName: 'withdipp'
  },
  {
    image: remy,
    header: ' Remy – Your Restaurant Assistant',

    icons: [
      {
        type: 'apple',
        url: 'https://mobilabsolutions.com/remy-your-restaurant-assistant/'
      }
    ],
    description: 'Remy is an iOS Application which aims to provide restaurant owners deep insights into their online competition environment and to improve their online presence.',
    owner: 'Customer Project. (c)',
    url: 'https://mobilabsolutions.com/',
    urlName: 'Mobilab solutions'
  }
];

export default data;
