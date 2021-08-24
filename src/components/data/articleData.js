const articleData = [
  {
    id: 'article01',
    title: 'OBIC',
    publication: {
      authors: [
        {
          name: 'Izzy Aspler',
          roll: 'UX/UI Design, Behavioral Economics Research',
          contact: 'izzy.aspler@gmail.com',
        },
        {
          name: 'Bhupindar Duku',
          roll: 'Project Manager - Banking Analysis',
          contact: 'bhupinder.dulku@gmail.com',
        },
        {
          name: 'Lorraine Masinde',
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
    contentblocks: {
      chapters: [
        'Problem Space',
        'Meet Bob',
        'Contstraints',
        'How might We...',
      ],
      content: [
        {
          type: 'Synopsis',
          header: 'A story about Bob',
          text: 'tldnr synopsis here',
          img: null,
        },
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
        {
          type: 'Copy',
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
    },
    tags: ['UX research', 'UX design', 'UI design', 'Fintech'],
  },
  {
    id: 'article02',
    title: 'tldnr',
    publication: {
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

    // how to inject bold + italic?
    contentblocks: {
      chapters: [
        'Problem Space',
        'Meet Bob',
        'Contstraints',
        'How might We...',
      ],
      content: [
        {
          type: 'Synopsis',
          header: 'A story about Bob',
          text: 'tldnr synopsis here',
          img: null,
        },
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
        {
          type: 'Copy',
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
    },
    tags: ['UX research', 'UX design', 'UI design', 'Fintech'],
  },
];

export default articleData;
