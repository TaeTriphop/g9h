import axios from 'axios';

interface Header {
  homepage?: string;
  title?: string;
}

const header: Header = {
  homepage: 'https://www.facebook.com/TaeTriphop',
  title: 'T.',
};

interface Social {
  github?: string;
}

interface About {
  name?: string;
  role?: string;
  description?: string;
  resume?: string;
  social?: Social;
}

const about: About = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tea',
  role: 'Front End Developer',
  description:
    'ชายผู้ใฝ่ฝันที่จะเป็น Full Stack Developer และราชาโจรสลัด.',
    resume: 'https://example.com',
    social: {
      github: 'https://github.com/TaeTriphop',
  },
}

export interface interfaceProjects {
  projectId : number;
  name: string;
  description: string;
  stack: string[];
  view:string;
  sourceCode: string;
  livePreview: string;
}

const projects: interfaceProjects[] = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   projectId: 1,
  //   name: 'Tic Tac Toe ',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS1', 'TypeScript1', 'React1'],
  //   view: 'ticTacToe',
  //   sourceCode: '',
  //   livePreview: '',
  // },
  {
    projectId: 2,
    name: 'To Do List',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS2', 'TypeScript2', 'React2'],
    view: 'toDo',
    sourceCode: '', // Name
    livePreview: '', //link to 
  },
]


const skills: string[] = [
  'HTML',
  'CSS',
  'PHP',
  'JavaScript',
  '.NET Core',
  'React',
  'Node.js (ExpressJs)',
  'TypeScript',
  'Git',
];

interface Contact {
  email?  : string;
  Address?: string;
  Phone?: string;
}

const contact: Contact = {
  // all the properties are optional - can be left empty or deleted
  email: 'Triphop.pro@gmail.com',
  Address: 'MRT บางพลัด',
  Phone:'095-621-1524.',
}


interface Profile {
  id: number;
  description: string;
  first_name: string;
  last_name: string;
  role: string;
  resume_link: string;
}

async function fetchProfileData(): Promise<Profile[]> {
  try {
    // const response = await axios.get('http://localhost:9000/Profile');
    // const profile: Profile[] = response.data.data;
    // return profile;

    const response = await axios.get('https://catfact.ninja/fact');
    const profile: Profile[] = response.data.data;
    return profile;
    
  } catch (error) {
    // จัดการข้อผิดพลาดที่เกิดขึ้นในการเรียก API
    console.error(error);
    return [];
  }
}


export {header, about, projects, skills, contact, fetchProfileData};