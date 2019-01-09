const logos = {
  wordpress: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png',
  react: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/React.js_logo.png',
  redux: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Redux-logo.png',
  node: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Node-logo.png',
  aws: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/aws-logo.png',
  angular: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/angular.png',
  firebase: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Firebase-logo.png',
  mongoDB: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/mongo-db-logo.png',
  express: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/express-logo.png',
  heroku: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/heroku-logo.png'
};
const ProjectsAPI = {
    projects: [
      { 
        id: 11, 
        link: "https://taggingthemascot.herokuapp.com/", 
        name: "Tagging The Mascot", 
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/tagging-the-mascot.png', 
        description: 'Tagging the Mascot was a augmented reality geotagging event. There were 85 real world objects all around the Madison area, and you as a participant team needed to be within 40 feet to each of them in order to check in and cross over an object. Who ever tag all 85 objects wins.', 
        role: 'My role was to build an application what will allow participants to use their phones as a interactive map with all markers, compass, guideline, check real time leaderboards, checklist, account management, state management and security.',
        type: 'Full Stack',
        technologiesUsed: [
          { 
            text: 'React.js',
            icon: logos.react 
          }, 
          {
            text: 'Redux',
            icon: logos.redux
          },
          {
            text: 'Firebase',
            icon: logos.firebase 
          }, 
          { 
            text: 'Node.js',
            icon: logos.node
          }, 
          { 
            text: 'AWS',
            icon: logos.aws
          }
        ]
      },
      { 
        id: 12, 
        link: "https://simple-mean-auth.herokuapp.com/", 
        name: "Simple MEAN Auth", 
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/simple-mean-auth.png', 
        description: 'MEAN (MongoDB, Express, Node.js, Angular) stack Authentication and Authorization app, more like a boilerplate. Full featured authentication using JSON Web Tokens. Angular to generate all components. Node.js and Express on the backend with Mongoose library and MongoDB.', 
        role: 'Create an application for faster development speed in the future projects, and for fun of course. ',
        type: 'Full Stack',
        technologiesUsed: [
          { 
            text: 'Angular 6',
            icon: logos.angular 
          }, 
          { 
            text: 'MongoDB',
            icon: logos.mongoDB 
          }, 
          { 
            text: 'Express',
            icon: logos.express 
          }, 
          { 
            text: 'Node.js',
            icon: logos.node
          }, 
          { 
            text: 'Heroku',
            icon: logos.heroku
          },
        ]
      },
      { 
        id: 1, 
        link: "http://unitedstatestaxservices.us/", 
        name: "United States Tax Services", 
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/usts.png', 
        description: 'United States Tax Services (USTS) is a company located in Buffalo Grove, IL. The company provide a broad range of services such as: accounting, public notary, tax calculation, incorporation etc.', 
        role: 'My role was to completely redesign and built brand new website with brand new branding. USTS has onboard marketing eecutive who helped me during the proccess. I choose WordPress, because the company wants to drive organic traffic from social media by posting blog posts. Another reason was that WordPress is easy to maintain and edit.',
        type: 'Full Stack',
        technologiesUsed: [
          { 
            text: 'WordPress',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png' 
          }, 
          { 
            text: 'HTML5',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png' 
          }, 
          { 
            text: 'CSS3',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png' 
          }, 
          { 
            text: 'JavaScript',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png' 
          }, 
          { 
            text: 'PHP',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png' 
          }
        ]
      },
      { 
        id: 2, 
        link: "https://spoofingwilly.com/", 
        name: "Spoofing Willy Street",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/spoofingwilly-head.png', 
        description: 'Spoofing Willy Street is marketing consultancy company in Madison, WI. Spoofing Willy provide proffesional services like social media strategy, website development, photography, content creation etc.',
        role: 'My role, as Director of Technology was to redesign and improve performance of existing website. Create interactive wireframes, prototypes, develop web and mobile applications, develop websites, technical support for clients. Innovation of internal and external infrastracture of the company. Automation of tasks. For this website I choose WordPress, because marketing director has experience with it, and the website is news/blog platform.',
        type: 'Full Stack',
        technologiesUsed: [
          { 
            text: 'WordPress',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png' 
          }, 
          { 
            text: 'HTML5',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png' 
          }, 
          { 
            text: 'CSS3',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png' 
          }, 
          { 
            text: 'JavaScript',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png' 
          }, 
          { 
            text: 'PHP',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png' 
          }
        ]
      },
      { 
        id: 3, 
        link: "http://www.perkinsproperties.us/", 
        name: "Perkins Properties", 
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/pekrins-head.png', 
        description: 'Perkins Properties is a commercial real estate investment agency with offices in MidWest.',
        role: 'Develop WordPress website based on provided design (PSD files) and prototype.',
        type: 'Front End',
        technologiesUsed: [
          { 
            text: 'WordPress',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png' 
          }, 
          { 
            text: 'HTML5',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png' 
          }, 
          { 
            text: 'CSS3',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png' 
          }, 
          { 
            text: 'JavaScript',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png' 
          }, 
          { 
            text: 'PHP',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png' 
          }
        ]
      },
      { 
        id: 4, 
        link: "http://unitedstatesimmigrationservices.us/", 
        name: "United States Immigration Services", 
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/usis.png', 
        description: 'United States Immigration Services provides immigrational services. As for now it is part of the USTS website.',
        type: 'Front End',
        role: 'Develop blog/news website platform.',
        technologiesUsed: [
          { 
            text: 'WordPress',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png' 
          }, 
          { 
            text: 'HTML5',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png' 
          }, 
          { 
            text: 'CSS3',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png' 
          }, 
          { 
            text: 'JavaScript',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png' 
          }
        ]
      },
      { 
        id: 5, 
        link: "http://badgerblinds.com/", 
        name: "Badger Blinds", 
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/badgerblinds-head.png', 
        description: 'Home Improvement company in Madison area. Badger Blinds and Shades install and sell blinds and shades.', 
        role: 'My role at this project was to build a brouchure, information based website from scratch. I have choose WordPress, because client wanted to post blogs and have a posibility to update website without third party.', 
        type: 'Front End',
        technologiesUsed: [
          { 
            text: 'WordPress',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png' 
          }, 
          { 
            text: 'HTML5',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png' 
          }, 
          { 
            text: 'CSS3',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png' 
          }, 
          { 
            text: 'JavaScript',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png' 
          }, 
          { 
            text: 'PHP',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png' 
          }
        ]
      },
      { 
        id: 6, 
        link: "https://kunzeanalytics.com/", 
        name: "Kunze Analytics  ", 
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/kunze-head.png', 
        description: 'Kunze Analytics is HR company what uses AI to build models for big corporations.',
        role: 'Build B2B website with Blog integration.',
        type: 'Full Stack',
        technologiesUsed: [
          { 
            text: 'WordPress',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png' 
          }, 
          { 
            text: 'HTML5',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png' 
          }, 
          { 
            text: 'CSS3',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png' 
          }, 
          { 
            text: 'JavaScript',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png' 
          }, 
          { 
            text: 'PHP',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png' 
          }
        ]
      },
      { 
        id: 7, 
        link: "https://deliandigital.com/", 
        name: "Delian Digital", 
        type: 'Full Stack',
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/deliandigital-head.png', 
        technologiesUsed: [
          { 
            text: 'WordPress',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png' 
          }, 
          { 
            text: 'HTML5',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png' 
          }, 
          { 
            text: 'CSS3',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png' 
          }, 
          { 
            text: 'JavaScript',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png' 
          }, 
          { 
            text: 'PHP',
            icon:'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png' 
          }
        ]
      },
    ],
  }
  
  export default ProjectsAPI