const sectionDataArr = [
  {
    id: 'OBIC',
    style: 'obic',
    details: {
      authors: [
        {
          name: 'Izzy Aspler',
          id: "001Au",
          roll: 'UX/UI Design, Behavioral Economics Research',
          contact: 'izzy.aspler@gmail.com',
        },
        {
          name: 'Bhupindar Duku',
          id: "002Au",
          roll: 'Project Manager - Banking Analysis',
          contact: 'bhupinder.dulku@gmail.com',
        },
        {
          name: 'Lorraine Masinde',
          id: "002Au",
          roll: 'Legal / Regulatory Law - Global Research',
          contact: 'bhupinder.dulku@gmail.com',
        },
      ],
      date: 'September 3rd, 2021',
      length: 'May 26th till June 17th, 2021',
      tools: [
        { name: 'Figma', img: 'figma__icon.svg' },
        { name: 'Illustrator', img: 'illustrator__icon.svg' },
      ],
      sources: [
        {
          title: 'Open Banking Research Paper',
          src: 'point to url',
        },
      ],
    },
    // how to inject bold + italic?
    chapters: ['Problem Space', 'Meet Bob', 'Contstraints', 'How might We...'],
    synopsis: {
      header: 'A story about Bob',
      text: 'tldnr synopsis here',
      img: null,
    },
    title: {
      header: 'Problem Space',
      text: 'ipson lorem',
      img: null,
    },
    gallery: [
      {
        header: 'Findings',
        text: 'ipson lorem',
        img: ['tldnr__hero-img', 'tldnr__problem-space-img'],
      },
    ],
    copy: [
      {
        header: "A bit about bob's life",
        text: 'ipson lorem',
        img: ['tldnr__hero-img', 'tldnr__problem-space-img'],
      },
    ],
    images: [
      {
        id: 'tldnr__hero-img',
        caption: null,
        src: {
          lowres: 'tlndr__hero-1x',
          highres: 'tlndr__hero-2x',
          svg: null,
        },
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
    tags: ['UX research', 'UX design', 'UI design', 'Fintech'],
  },
  {
    id: 'tldnr',
    style: 'tldnr',
    details: {
      authors: [
        {
          name: 'Izzy Aspler',
          roll: 'Case Study, UX/UI Design, Prototyping',
          contact: 'izzy.aspler@gmail.com',
        },
      ],
      date: 'September 3rd, 2021',
      length: 'Twleve Weeks - January 3rd till March 27th 2020',
      tools: [
        { name: 'Sketch', img: 'sketch.svg' },
        { name: 'Figma', img: 'figma__icon.svg' },
        { name: 'Adobe XD', img: 'xd__icon.svg' },
        { name: 'Illustrator', img: 'illustrator__icon.svg' },
      ],
      sources: [
        {
          title: 'PDF - Prototyping research + testing (12.5 MB)',
          src: 'point to url',
        },
        {
          title: 'PDF - Interview transcripts (1.5 MB)',
          src: 'point to url',
        },
      ],
    },
    chapters: [
      'A ‘short’ summary of a deep dive into manuals for boardgames',
      'A story about board games.',
      'UX Research + Discovery',
      '1. Landscape mapping',
      '2. Primary research',
      '3. Secondary research',
      '4. Research findings',
      'Some discarded ideas',
      'Strategy',
      '2. Primary research',
      '2. Primary research',
      '2. Primary research',
    ],
    synopsis: {
      header: 'A story about Bob',
      text: 'tldnr synopsis here',
      img: null,
    },
    title: {
      type: 'Title',
      header: 'UX research + design',
      text: null,
      img: null,
    },
    hero: [
      {
        type: 'Hero',
        header: 'A ‘short’ summary of a deep dive into manuals for boardgames',
        text: 'Game time is too short to be reading manuals',
        img: ['tldnr__hero-img'],
      },
    ],
    copy: [
      {
        header: "A bit about bob's life",
        text: 'ipson lorem',
        img: ['tldnr__hero-img', 'tldnr__problem-space-img'],
      },
    ],
    images: [
      {
        id: 'tldnr__hero-img',
        caption: null,
        src: {
          lowres: 'tlndr__hero-1x',
          highres: 'tlndr__hero-2x',
          svg: null,
        },
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
    tags: ['UX research', 'UX design', 'UI design', 'Fintech'],
  },
  {
    id: 'HapMap',
    style: 'hapmap',
    details: {
      authors: [
        {
          name: 'Izzy Aspler',
          roll: 'UX/UI Design, Behavioral Economics Research',
          contact: 'izzy.aspler@gmail.com',
        },
        {
          name: 'Ehsan',
          roll: 'Founder, Partner, web-development',
          contact: 'izzy.aspler@gmail.com',
        },
      ],
      date: 'April 6th, 2017',
      length: '9 months, January 12th till March 27th, 2020',
      tools: [
        { name: 'InVison', img: 'invision__icon.svg' },
        { name: 'AxureRP', img: 'axure__icon.svg' },
        { name: 'Illustrator', img: 'illustrator__icon.svg' },
      ],
      sources: [
        {
          title: 'Open Banking Research Paper',
          src: 'point to url',
        },
      ],
    },
    // how to inject bold + italic?
    chapters: ['Problem Space', 'Meet Bob', 'Contstraints', 'How might We...'],
    synopsis: {
      header: 'A story about Bob',
      text: 'tldnr synopsis here',
      img: null,
    },
    title: {
      header: 'Problem Space',
      text: 'ipson lorem',
      img: null,
    },
    gallery: [
      {
        header: 'Findings',
        text: 'ipson lorem',
        img: ['tldnr__hero-img', 'tldnr__problem-space-img'],
      },
    ],
    copy: [
      {
        header: "A bit about bob's life",
        text: 'ipson lorem',
        img: ['tldnr__hero-img', 'tldnr__problem-space-img'],
      },
    ],
    images: [
      {
        id: 'tldnr__hero-img',
        caption: null,
        src: {
          lowres: 'tlndr__hero-1x',
          highres: 'tlndr__hero-2x',
          svg: null,
        },
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
    tags: ['UX research', 'UX design', 'UI design', 'Fintech'],
  },
];

export default sectionDataArr;
