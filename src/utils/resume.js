import React from "react";
import {
  InfoOutlined,
  AssignmentOutlined,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
  WebOutlined
} from "@material-ui/icons";

export default {
  name: "Salman Fazal",
  title: "Full-stack Developer",
  displayImage: "displayImage.jpg",
  birthday: "01st August 1996",
  email: "salmanfazal01@gmail.com",
  address: "Toronto, ON",
  phone: "232 232 2323",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/",
      text: "SalmanFazal01",
      icon: <Facebook />,
    },
    Twitter: {
      link: "https://www.twitter.com/",
      text: "SamsFXJournal",
      icon: <Twitter />,
    },
    linkedIn: {
      link: "https://www.linkedin.com/",
      text: "SamFaz",
      icon: <LinkedIn />,
    },
    Github: {
      link: "https://www.github.com/",
      text: "Salmanfazal01",
      icon: <GitHub />,
    },
  },

  about:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit guy cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate." +
    "\n\n" +
    "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  experiences: [
    {
      title: "Work 1",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2010 - Present",
    },
    {
      title: "Work 2",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
      date: "2008 - 2010",
    },
    {
      title: "Work 3",
      description:
        "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
      date: "2005 - 2008",
    },
  ],

  education: [
    {
      title: "Abc University of Los Angeles",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2004 - 2009",
    },
    {
      title: "Education 2",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
      date: "2003 - 2004",
    },
    {
      title: "Education 3",
      description:
        "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
      date: "2000 - 2003",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Web Development",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],
};
