interface Link {
  text: string;
  url: string;
}

interface ProjectInfo {
  name: string;
  url: string;
  description: string;
  tags: string[];
  images?: string[];
  links?: Link[];
}

const projects: ProjectInfo[] = [
  {
    name: 'SciFighters',
    url: 'https://github.com/parkovski/scifi',
    description: 'Smash-style phone game with Unity',
    tags: ['Unity3D', 'C#', 'Game'],
    images: [
      'https://media.githubusercontent.com/media/parkovski/scifi/master/Design/promo/game.png',
    ],
  },
  {
    name: 'Uniremote',
    url: 'https://github.com/parkovski/remote',
    description: 'Universal remote with Raspberry Pi and LIRC',
    tags: ['Hardware', 'Raspberry Pi', 'Web', 'Javascript'],
    images: [
      'https://raw.githubusercontent.com/parkovski/remote/master/pics/ui.png',
      'https://raw.githubusercontent.com/parkovski/remote/master/pics/device.jpg',
    ],
  },
  {
    name: 'wsudo',
    url: 'https://github.com/parkovski/wsudo',
    description: 'Proof of concept sudo for Windows',
    tags: ['Windows', 'C++'],
    links: [
      {
        text: 'demo',
        url: 'https://raw.githubusercontent.com/parkovski/wsudo/assets/demo.mp4',
      }
    ]
  },
  {
    name: 'wscoro',
    url: 'https://github.com/parkovski/wscoro',
    description: 'C++ coroutine building blocks library',
    tags: ['C++'],
  },
  {
    name: 'HTML Games',
    url: 'https://github.com/parkovski/htmlgames',
    description: 'Games contained in a single HTML file',
    tags: ['Game', 'Web', 'Javascript'],
    links: [
      {
        text: 'play',
        url: 'https://www.parkovski.com/htmlgames',
      }
    ]
  },
  {
    name: 'Tanks',
    url: 'https://github.com/parkovski/tanks',
    description: 'Multiplayer tanks game using socket.io',
    tags: ['Game', 'Javascript'],
  },
  {
    name: 'GlazBasic',
    url: 'https://github.com/parkovski/glazc',
    description: 'IBasic-like compiler',
    tags: ['C++', 'Compiler'],
  },
  {
    name: 'Truss Scheduler',
    url: 'https://github.com/parkovski/tsched',
    description: 'Truss shipment scheduler',
    tags: ['C++'],
    images: [
      'https://raw.githubusercontent.com/parkovski/tsched/master/screenshots/mainscreen.png',
      'https://raw.githubusercontent.com/parkovski/tsched/master/screenshots/bedview.png',
      'https://raw.githubusercontent.com/parkovski/tsched/master/screenshots/database.png',
    ],
  },
  {
    name: 'Notes',
    url: 'https://github.com/parkovski/notes',
    description: 'Note taking and class organization website',
    tags: ['Web', 'Javascript'],
  },
  {
    name: 'Chaturanga for Android',
    url: 'https://github.com/parkovski/Chaturanga',
    description: 'Chess-like game for Android',
    tags: ['Android', 'Java', 'Game'],
    images: [
      'https://raw.githubusercontent.com/parkovski/Chaturanga/master/res/drawable/youwin.png',
      'https://raw.githubusercontent.com/parkovski/Chaturanga/master/res/drawable/youlose.png',
    ],
  },
  {
    name: 'Chaturanga in FreeBASIC',
    url: 'https://github.com/parkovski/fbchaturanga',
    description: 'Chess-like game in FreeBASIC',
    tags: ['FreeBASIC', 'Game'],
    images: [
      'https://raw.githubusercontent.com/parkovski/fbchaturanga/master/screenshot.png',
    ],
  },
  {
    name: 'Chunk\'s Challenge',
    url: 'https://github.com/parkovski/fbcc',
    description: 'Chip\'s Challenge clone in FreeBASIC',
    tags: ['FreeBASIC', 'Game'],
    images: [
      'https://raw.githubusercontent.com/parkovski/fbcc/master/screenshot.png',
      'https://raw.githubusercontent.com/parkovski/fbcc/master/screenshot-editor.png',
    ],
  },
];

export function load() {
  return { projects };
}
