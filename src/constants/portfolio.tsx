interface Header {
  homepage?: string;
  title?: string;
}

const header: Header = {
  homepage: "https://github.com/TaeTriphop",
  title: "T.",
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
  name: "Tae",
  role: "Front End Developer",
  description: "ชายผู้ใฝ่ฝันที่จะเป็น Full Stack Developer และราชาโจรสลัด.",
  resume:
    "https://drive.google.com/drive/folders/1Wv3ga3Jok8-UvYM3OSa-34UXOP8_ohwV?usp=sharing",
  social: {
    github: "https://github.com/TaeTriphop",
  },
};

export interface interfaceProjects {
  projectId: number;
  name: string;
  description: string | JSX.Element; // เพิ่ม JSX.Element เข้าไป;
  stack: string[];
  view: string;
  sourceCode: string;
  livePreview: string;
}

const projects: interfaceProjects[] = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    projectId: 1,
    name: "To Do App",
    description: (
      <>
        To Do App  <br /> จะทำอะไรก็รีบทำ ชีวิตมันสั้นนะ เพราะถ้ายาวจะเป็นชีวิตตตตตตตตตตตตตตต <br />
        (เว็บ 2 ภาษา, แจ้งเตือนสุดเท่ด้วย Toastify)
      </>
    ),
    stack: ["Tailwind CSS", "daisyUI", "TypeScript", "React", "i18n", "React-toastify"],
    view: "",
    sourceCode: "https://github.com/TaeTriphop/TODOAPP",
    livePreview: "https://taetriphop.github.io/TODOAPP/",
  },
  {
    projectId: 2,
    name: "Random Quote",
    description: (
      <>
        สุ่มคำพูดของเต้ คำที่ดูเป็นเต้ คำที่เต้พูด <br />
        (สุ่มคำมาแสดง, ลองเล่น Component ของ Tailwind CSS)
      </>
    ),
    stack: ["Tailwind CSS", "TypeScript", "React"],
    view: "",
    sourceCode: "https://github.com/TaeTriphop/Quote-g9h",
    livePreview: "https://taetriphop.github.io/Quote-g9h/",
  },
  {
    projectId: 3,
    name: "Manchester City : My Favorite Football Team",
    description: (
      <>
        "Manchester City สุดยอดทีมที่ดีที่สุดใน Premier League <br />{" "}
        (เชื่อมต่อฟรี API, ลองเล่น Component ของ daisyUI)",
      </>
    ),
    stack: [
      "Tailwind CSS",
      "daisyUI",
      "TypeScript",
      "React",
      "apifootball (Free 180 API calls per hour)",
    ],
    view: "",
    sourceCode: "https://github.com/TaeTriphop/mancity", // Name
    livePreview: "https://taetriphop.github.io/mancity/", //link to
  },
];

const skills: string[] = [
  "HTML",
  "CSS",
  ".NET Core",
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js (ExpressJs)",
  "PHP",
  "Git",
];

interface Contact {
  email?: string;
  Address?: string;
  Phone?: string;
}

const contact: Contact = {
  // all the properties are optional - can be left empty or deleted
  email: "triphop.pro@gmail.com",
  Address: "MRT หลักสอง",
  Phone: "095-621-1524.",
};

interface Profile {
  id: number;
  description: string;
  first_name: string;
  last_name: string;
  role: string;
  resume_link: string;
}

export { header, about, projects, skills, contact };
