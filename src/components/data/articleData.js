const articleData = [
  {
    id: 'article01',
    title: 'tldnr',
    synopsis: 'tldnr synopsis here',
    publication: {
      date: 'January 1 2021',
      length: '3 weeks',
      tools: [
        { name: 'Photoshop', img: 'photoshop__icon.svg' },
        { name: 'Illustrator', img: 'illustrator__icon.svg' },
      ],
    },
    authors: [
      {
        name: 'Izzy Aspler',
        roll: 'UX research',
        contact: 'izzy.aspler@gmail.com',
      },
      {
        name: 'Bhupindar Singh',
        roll: 'Finacial Advisor',
        contact: 'bhipindars@gmail.com',
      },
    ],
    chapters: ['Problem Space', 'Meet Bob', 'Contstraints', 'How might We...'],
    images: [
      {
        id: 'tldnr__hero-img',
        caption: null,
        src: { lowres: 'tlndr__hero-1x', highres: 'tlndr__hero-2x', svg: null },
      },
      {
        id: 'tldnr__problem-space-img',
        caption: 'this is the problem space',
        src: {
          lowres: 'tlndr__problem-1x',
          highres: 'tlndr__problem-2x',
          svg: null,
        },
      },
    ],
    // how to inject bold + italic?
    contentblocks: [
      {
        type: 'Title',
        header: 'Problem Space',
        text: 'ipson lorem',
        img: null,
      },
      {
        type: 'Gallery',
        header: 'Findings',
        text: 'ipson lorem',
        img: ['tldnr__hero-img', 'tldnr__problem-space-img'],
      },
    ],
    tags: ['UX research', 'UX design', 'UI design', 'Fintech'],
  },
];

export default articleData;
