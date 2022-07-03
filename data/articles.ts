// =========== Articles

import { IPortofolios } from '../interfaces';

const data: IPortofolios[] = [
  {
    id: 1,
    title: 'What is Node Js',
    description: 'Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant. A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm. When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs. Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language. In Node.js the new ECMAScript standards can be used without problems, as you don\'t have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.',
    img: '/images/nodejs.png',
    technologies: [
      {
        id: 1,
        name: 'Node Js',
        variant: 'primary',
      },
      {
        id: 2,
        name: 'Javascript',
        variant: 'secondary',
      },
    ],
  },
  {
    id: 2,
    title: 'React Js Javascript Framework',
    description: "ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013. Today, most of the websites are built using MVC (model view controller) architecture. In MVC architecture, React is the 'V' which stands for view, whereas the architecture is provided by the Redux or Flux. A ReactJS application is made up of multiple components, each component responsible for outputting a small, reusable piece of HTML code. The components are the heart of all React applications. These Components can be nested with other components to allow complex applications to be built of simple building blocks. ReactJS uses virtual DOM based mechanism to fill data in HTML DOM. The virtual DOM works fast as it only changes individual DOM elements instead of reloading complete DOM every time. To create React app, we write React components that correspond to various elements. We organize these components inside higher level components which define the application structure. For example, we take a form that consists of many elements like input fields, labels, or buttons. We can write each element of the form as React components, and then we combine it into a higher-level component, i.e., the form component itself. The form components would specify the structure of the form along with elements inside of it.",
    img: '/images/reactjs.jpeg',
    technologies: [
      {
        id: 1,
        name: 'Javascript',
        variant: 'primary',
      },
      {
        id: 2,
        name: 'HTML',
        variant: 'secondary',
      },
    ],
  },
  {
    id: 3,
    title: 'The Next Js Handbook',
    description: "It's ideal for you if you have zero to little knowledge of Next.js, you have used React in the past, and you are looking forward diving more into the React ecosystem, in particular server-side rendering. I find Next.js an awesome tool to create Web Applications, and at the end of this post I hope you'll be as excited about it as I am. And I hope it will help you learn Next.js! Working on a modern JavaScript application powered by React is awesome until you realize that there are a couple problems related to rendering all the content on the client-side. First, the page takes longer to become visible to the user, because before the content loads, all the JavaScript must load, and your application needs to run to determine what to show on the page. Second, if you are building a publicly available website, you have a content SEO issue. Search engines are getting better at running and indexing JavaScript apps, but it's much better if we can send them content instead of letting them figure it out. The solution to both of those problems is server rendering, also called static pre-rendering. Next.js is one React framework to do all of this in a very simple way, but it's not limited to this. It's advertised by its creators as a zero-configuration, single-command toolchain for React apps. It provides a common structure that allows you to easily build a frontend React application, and transparently handles server-side rendering for you.",
    img: '/images/nextjs.jpeg',
    technologies: [
      {
        id: 1,
        name: 'React Js',
        variant: 'primary',
      },
      {
        id: 2,
        name: 'Javascript',
        variant: 'secondary',
      },
      {
        id: 4,
        name: 'HTML',
        variant: 'tertiary',
      },
    ],
  },
  {
    id: 4,
    title: 'What is Vue Js',
    description: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex. If you find these concepts intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge, and you should be able to follow along without being an expert in any of these. If you are an experienced developer interested in how to best integrate Vue into your stack, or you are curious about what these terms mean, we discuss them in more details in Ways of Using Vue. Despite the flexibility, the core knowledge about how Vue works is shared across all these use cases. Even if you are just a beginner now, the knowledge gained along the way will stay useful as you grow to tackle more ambitious goals in the future. If you are a veteran, you can pick the optimal way to leverage Vue based on the problems you are trying to solve, while retaining the same productivity. This is why we call Vue 'The Progressive Framework': it's a framework that can grow with you and adapt to your needs.",
    img: '/images/vuejs.png',
    technologies: [
      {
        id: 1,
        name: 'Vue Js',
        variant: 'primary',
      },
      {
        id: 2,
        name: 'Javascript',
        variant: 'secondary',
      },
      {
        id: 4,
        name: 'HTML',
        variant: 'tertiary',
      },
    ],
  },
  {
    id: 5,
    title: 'What is Angular Js',
    description: 'AngularJS is a client side JavaScript MVC framework to develop a dynamic web application. AngularJS was originally started as a project in Google but now, it is open source framework. AngularJS is entirely based on HTML and JavaScript, so there is no need to learn another syntax or language. AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript.',
    img: '/images/angularjs.png',
    technologies: [
      {
        id: 1,
        name: 'Node Js',
        variant: 'primary',
      },
      {
        id: 2,
        name: 'React Js',
        variant: 'secondary',
      },
      {
        id: 4,
        name: 'MySQL',
        variant: 'tertiary',
      },
    ],
  },
  {
    id: 6,
    title: 'What is Express.Js',
    description: 'AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript. AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript. AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript. AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript. AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript. AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript. AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in attributes and components and also provides an ability to create custom attributes using simple JavaScript.',
    img: '/images/expressjs.jpeg',
    technologies: [
      {
        id: 1,
        name: 'Node Js',
        variant: 'primary',
      },
      {
        id: 2,
        name: 'Javascript',
        variant: 'secondary',
      },
    ],
  },
];

export default data;
