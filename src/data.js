import jsImg2 from "./assets/js.png";
import htmlImg from "./assets/skills/html2.png";
import cssImg from "./assets/skills/css2.png";
import jsImg from "./assets/skills/js2.png";
import reactImg from "./assets/skills/react22.png";
import reduxImg from "./assets/skills/redux2.png";
import twImg from "./assets/skills/tw2.png";


// projects imgs
import foodBlogImg from "./assets/projects/foodBlog/7.jpg";
import zyhan from "./assets/projects/zynah/8.webp";
import msStoreImg from "./assets/projects/msStore/14.webp";
import house from "./assets/projects/house/13.jpg";
import CRUDSImg from "./assets/projects/cruds/cruds.png";

export const products = [
  {
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ipsum eget ligula ultricies, in commodo eros feugiat. Nullam dignissim metus ut tincidunt commodo.",
  },
  {
    title: "Product 2",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer dictum tortor id urna congue vestibulum.",
  },
  {
    title: "Product 3",
    description:
      "Fusce consequat fringilla dui, ut tincidunt quam vehicula a. Duis sed libero at tortor ullamcorper volutpat. Vivamus id massa sed sem tincidunt tristique.",
  },
  {
    title: "Product 4",
    description:
      "Cras consectetur dolor nec quam vehicula, vel finibus lorem eleifend. Ut sed orci eu libero tincidunt volutpat id vitae felis.",
  },
  {
    title: "Product 5",
    description:
      "Suspendisse potenti. Proin consequat euismod magna, vel lacinia neque varius non. Curabitur lobortis ultricies mi, eget suscipit mauris malesuada nec.",
  },
];

class Skill {
  constructor(name, backgroundColor, image, alt) {
    this.name = name;
    this.backgroundColor = backgroundColor;
    this.boxShadow = ` 1px 1px 15px 1px ${backgroundColor}`;
    this.image = image;
    this.alt = alt;
  }
}

const html = new Skill("HTML", "#E34C26", htmlImg, "html");
const css = new Skill("CSS", "#2965f1", cssImg, "css");
const js = new Skill("JavaScript", "#D4A017", jsImg, "javascript");
const react = new Skill("React", "#1f8ead", reactImg, "react");
const redux = new Skill("Redux", "#764ABC", reduxImg, "redux");
const tailwindCss = new Skill("Tailwind CSS", "#0a508a", twImg, "tailwind css");
const sass = new Skill("Sass", "#CD6799", twImg, "sass");

export const skillsArray = [html, css, js, react, redux, tailwindCss, sass];

class Project {
  constructor(
    title,
    image,
    description,
    demoLink,
    githubLink,
    category,
    usedSkills
  ) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.demoLink = demoLink;
    this.githubLink = githubLink;
    this.category = category;

    this.usedSkills = usedSkills;
  }
}

const foodBlogProject = new Project(
  "Food",
  foodBlogImg,
  "Food blog project",
  "https://walaaali782.github.io/food-tel7/",
  "https://github.com/Walaaali782/food-tel7",
  "reactProject",
  [html,css , js ]
);

const nikeLandingPage = new Project(
  "zyhan Landing Page",
  zyhan,
  "Nike Landing Page project",
  "https://walaaali782.github.io/ZYNAH/",
 "https://github.com/Walaaali782/ZYNAH",
  "reactProject",
  [html,css  ]
);

const msStore = new Project(
  "store",
  msStoreImg,
  "E-commerce Store",
  "https://walaaali782.github.io/MERCURY/",
  "https://github.com/Walaaali782/MERCURY",
  "jsProject",
  [html, css, js]
);

const Traveling = new Project(
  "Traveling Company Landing Page",
  house,
  "Traveling Company Landing Page",
  "https://walaaali782.github.io/In-House/",
  "https://github.com/Walaaali782/In-House",
  "jsProject",
  [html, css, js]
);
const CRUD = new Project(
  "Simple CRUD Project",
  CRUDSImg,
  "Simple CRUD Project",
  "https://Walaaali782.github.io/Json-server-CRUD-/",
  "https://github.com/Walaaali782/Json-server-CRUD-",
  "jsProject",
  [react,tailwindCss]
);

export const projectsData = [
  foodBlogProject,
  nikeLandingPage,
  msStore,
  Traveling,
  CRUD,
];

export const projectsData1 = [
  {
    title: "testttttt",
    image: jsImg,
    alt: "teestttt",
    description:
      "lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    usedSkills: [html, css, js],
  },
  {
    title: "testttttt",
    image: jsImg,
    alt: "teestttt",
    description:
      "lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    usedSkills: [html, css, js],
  },
];
