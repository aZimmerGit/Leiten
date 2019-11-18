const places = [
  {
    id: 1,
    name: 'The Gundis Kurdish Kitchen',
    latlng: {
      latitude: 41.9351802,
      longitude: -87.6465491,
    },
    description: 'Amazing Kurdish resturant with vegetarian options',
    streetAddress: '2909 N Clark St, Chicago, IL 60657',
    useage: 'Food',
    filtOpts: [
      'Food',
      'Kurdish',
      'Comfort Food',
      'Ambient',
      'Vegetarian Options',
      'Vegan Options',
    ],
    phone: 7739048120,
    website: 'https://thegundis.com/',
  },
  {
    id: 2,
    name: 'Daisies',
    latlng: {
      latitude: 41.9272894,
      longitude: -87.7063449,
    },
    description:
      'Delicious homemade pastas, seasonal vegetable plates, and craft cocktails in a New American casual space',
    streetAddress: '2523 N Milwaukee Ave, Chicago, IL 60647',
    useage: 'Food',
    filtOpts: [
      'Food',
      'Pasta',
      'Chef-Driven',
      'Ambient',
      'Great Deal',
      'Vegetarian Options',
      'Vegan Options',
    ],
    phone: 7736611671,
    website: 'https://www.daisieschicago.com/',
  },
  {
    id: 3,
    name: 'Bad Hunter',
    latlng: {
      latitude: 41.8846237,
      longitude: -87.6498989,
    },
    description:
      'High quality seasonal foods and drinks that spotlight simple and unique ingredients',
    streetAddress: '802 W Randolph St, Chicago, IL 60607',
    useage: 'Food',
    filtOpts: [
      'Food',
      'Vegetable Forward',
      'New American',
      'Ambient',
      'Vegetarian Options',
      'Vegan Options',
    ],
    phone: 3122651745,
    website: 'https://badhunter.com/',
  },
  {
    id: 4,
    name: 'Lula Cafe',
    latlng: {
      latitude: 41.9276581,
      longitude: -87.7067987,
    },
    description:
      'Farm-to-table, seasonal, and local Logan Square eatery that is reliably great at all hours of the day',
    streetAddress: '2537 N Kedzie Ave, Chicago, IL 60647',
    useage: 'Food',
    filtOpts: [
      'Food',
      'Breakfast',
      'Vegetarian Options',
      'Market-driven',
      'Seasonal',
      'Casual Space',
    ],
    phone: 7734899554,
    website: 'lulacafe.com',
  },
  {
    id: 5,
    name: 'HaiSous Vietnamese Kitchen',
    latlng: {
      latitude: 41.8578571,
      longitude: -87.6535601,
    },
    description:
      'Modern Vietnamese play on traditional family recipes and urban street food with a swanky atmosphere',
    streetAddress: '1800 S Carpenter St, Chicago, IL 60608',
    useage: 'Food',
    filtOpts: [
      'Food',
      'New Vietnamese',
      'Small Plates',
      'Healthy Options',
      'Modern Cocktails',
    ],
    phone: 3127021303,
    website: 'haisous.com',
  },

  {
    id: 6,
    name: 'Mi Tocaya Antojeria',
    latlng: {
      latitude: 41.9288767,
      longitude: -87.6976844,
    },
    description:
      'Elevated neighborhood Mexican restaurant with amazing guacamole (featuring Chile ash) in a casual setting',
    streetAddress: '2800 W Logan Blvd, Chicago, IL 60647',
    useage: 'Food',
    filtOpts: [
      'Food',
      'Multiregional Mexican',
      'Small Plates',
      'Neighborhood Restaurant',
    ],
    phone: 8723153947,
    website: 'mitocaya.com',
  },

  {
    id: 7,
    name: 'Ras Dashen',
    latlng: {
      latitude: 41.9882954,
      longitude: -87.660469,
    },
    description:
      'Traditional Ethiopian comfort food with fabulous Injera to eat with your meal made from a 30 year old yeast mother',
    streetAddress: '5846 N Broadway, Chicago, IL 60660',
    useage: 'Food',
    filtOpts: ['Food', 'Traditional Ethiopian'],
    phone: 7735069601,
    website: 'rasdashenrestaurantchicago.com',
  },

  {
    id: 8,
    name: 'AIRE Ancient Baths Chicago',
    latlng: {
      latitude: 41.8957293,
      longitude: -87.6481481,
    },
    description:
      'Journey through the traditional Roman, Greek and Ottoman ancient experience of baths and you will never want to leave',
    streetAddress: '800 W Superior St, Chicago, IL 60642',
    useage: 'Experience',
    filtOpts: ['Experience', 'Traditional Ancient Baths', 'Spa', 'Bath House'],
    phone: 3129457414,
    website: 'https://beaire.com/en/aire-ancient-baths-chicago',
  },

  {
    id: 9,
    name: 'Fort Sheridan',
    latlng: {
      latitude: 42.2083978,
      longitude: -87.8242905,
    },
    description:
      'Rolling bluffs and ravines that outline the edges of Lake Michigan shorelines, this scenic destination is the perfect spot for a secluded picnic and showcases the most Aegean-looking colors of the lake in spring and summer times',
    streetAddress: '1275 Gilgare Ln, Lake Forest, IL 60045',
    useage: 'Experience',
    filtOpts: [
      'Experience',
      'Forest Preserve',
      'Residential Neighborhood',
      'Scenic Destination',
      'Bird Migration',
      'Bike Paths',
      'Beaches',
    ],
    phone: 8473676640,
    website: 'https://www.lcfpd.org/fort-sheridan/',
  },

  {
    id: 10,
    name: 'Northerly Island',
    latlng: {
      latitude: 41.863087,
      longitude: -87.6256164,
    },
    description:
      'Bike down the lakefront bike path past the Adler Planetarium to discover a hidden treasure fit for perfect viewing in mid summer when the wildflowers are in full bloom',
    streetAddress: '1521 S Linn White Dr, Chicago, IL 60605',
    useage: 'Experience',
    filtOpts: [
      'Experience',
      'Man-made Peninsula',
      'Lake Michigan Lakefront',
      'Chicago Skyline Views',
      'Nature Preserve',
      'Strolling Paths',
      'Bike Paths',
    ],
    phone: 3127452910,
    website:
      'https://www.chicagoparkdistrict.com/index.php/parks-facilities/northerly-island-park',
  },

  {
    id: 11,
    name: 'The Chicago School of Weaving',
    latlng: {
      latitude: 41.9533302,
      longitude: -87.7326527,
    },
    description:
      'Get access to the school looms where a teacher can guide you through the production of your own textile through workshops, classes, and 2-hour night projects',
    streetAddress: '4201 W Irving Park Rd, Chicago, IL 60641',
    useage: 'Experience',
    filtOpts: ['Experience', 'Loom Weaving', 'Basket Weaving', 'Workshops'],
    phone: 7734900602,
    website: 'https://chicagoweavingschool.com',
  },
];

export default places;
