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
  heroku: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/heroku-logo.png',
  html: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png',
  css: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png',
  js: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png',
  php: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png',
  auth0: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/auth0-logo-png-transparent.png',
  lambda: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/aws_lambda.png'
};
const ProjectsAPI = {
    projects: [
      {
        id: 11,
        link: "https://taggingthemascot.herokuapp.com/",
        name: "Tagging The Mascot",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/tagging-the-mascot.png',
        freeHosting: true,
        description: 'Tagging the Mascot was an augmented reality geotagging event. There were 85 real-world objects around the Madison area, and user as a participant team needed to be within 40 feet to each of them in order to check in and cross over an object. Whoever tag all 85 objects wins.',
        role: 'My role was to build an application what will allow participants to use their phones as an interactive map using google maps as a main canvas, guideline where to go, real-time team leaderboards, real time automated and interactive checklist, basic account management and security.',
        result: 'This product has been delivered successfully to a client Spoofing Willy Street within a deadline we set before.',
        resource: 'https://spoofingwilly.com/2018/05/09/area-man-wakes-up-after-a-weekend-binge-to-something-frightening/',
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
          },
          {
            text: 'Heroku',
            icon: logos.heroku
          }
        ]
      },
      {
        id: 12,
        link: "https://www.deliandigital.com/",
        name: "Delian Digital",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/deliandigital-head.jpg',
        freeHosting: false,
        description: 'Delian Digital is the digital product design & development company and your guide on the digital transformation journey.',
        role: 'My role was to build a modern Single Page Application using a modern web framework.',
        result: 'The SPA generated many potential customers, who were impressed with some of the features and wanted to have similar in their projects.',
        resource: 'https://www.deliandigital.com/journey',
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
            text: 'Node.js',
            icon: logos.node
          },
          {
            text: 'Express',
            icon: logos.express
          },
          {
            text: 'AWS',
            icon: logos.aws
          },
          {
            text: 'Heroku',
            icon: logos.heroku
          }
        ]
      },
      { 
        id: 13, 
        link: "https://github.com/AndriiKost/geotagAPI", 
        name: "Geotagging API", 
        description: 'RESTful API using Node.js',
        role: '',
        type: 'Back End',
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/lambda_request_estimate.png', 
        technologiesUsed: [
          { 
            text: 'JavaScript',
            icon: logos.js
          }, 
          { 
            text: 'Node.js',
            icon: logos.node
          },
          {
            text: 'Express',
            icon: logos.express
          }
        ]
      },
      { 
        id: 14, 
        link: "https://github.com/AndriiKost/lambda_request_estimate", 
        name: "Serverless Estimate Request Handler", 
        description: 'Serverless function to handle automated estimate request.',
        role: 'To automate the estimation request as much as possible, while keeping the cost as low as possible.',
        result: 'Estimation was handled with AWS Lambda, which reduced a cost for the server of the company.',
        type: 'Back End',
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/node-auth-passport.png', 
        technologiesUsed: [
          { 
            text: 'JavaScript',
            icon: logos.js
          }, 
          { 
            text: 'Node.js',
            icon: logos.node
          },
          {
            text: 'Express',
            icon: logos.express
          },
          {
            text: 'MongoDB',
            icon: logos.mongoDB
          },
          {
            text: 'Lambda',
            icon: logos.lambda
          }
        ]
      },
      { 
        id: 15, 
        link: "https://madcitygeotour.herokuapp.com/", 
        name: "Mad City Geo Tour", 
        description: 'Interactive map for educational and entertainment purpose for people who are coming in town for conventions and seminars.',
        role: 'To build a web based application using Angular on front end, for non-profit organization in the Madison area.',
        result: 'As for now, application in BETA test',
        type: 'Full Stack',
        freeHosting: true,
        image: 'https://s3.amazonaws.com/taggingthemascot/madcity-head.jpg', 
        technologiesUsed: [
          { 
            text: 'JavaScript',
            icon: logos.js
          }, 
          { 
            text: 'Node.js',
            icon: logos.node
          },
          {
            text: 'Express',
            icon: logos.express
          },
          {
            text: 'MongoDB',
            icon: logos.mongoDB
          },
          {
            text: 'Angular 6',
            icon: logos.angular
          },
          {
            text: 'Heroku',
            icon: logos.heroku
          },
          {
            text: 'AWS',
            icon: logos.aws
          }
        ]
      },
      { 
        id: 16, 
        link: "https://github.com/AndriiKost/node-passport-auth/", 
        name: "Node + Passport Auth", 
        description: 'Authentication backend using Node.js, MongoDB, Express and Passport',
        role: '',
        type: 'Back End',
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/node-auth-passport.png', 
        technologiesUsed: [
          { 
            text: 'JavaScript',
            icon: logos.js
          }, 
          { 
            text: 'Node.js',
            icon: logos.node
          },
          {
            text: 'Express',
            icon: logos.express
          },
          {
            text: 'MongoDB',
            icon: logos.mongoDB
          }
        ]
      },
      { 
        id: 17, 
        link: "https://simple-mean-auth.herokuapp.com/", 
        name: "Simple MEAN Auth", 
        freeHosting: true,
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
        description: 'United States Tax Services (USTS) is a company located in Buffalo Grove, IL. The company provides a broad range of services such as accounting, public notary, tax calculation, incorporation etc.',
        role: 'My role was to completely redesign and built a brand new website with brand new branding. USTS has onboard marketing executive who helped me during the process. I choose WordPress, because the company wants to drive organic traffic from social media by posting blog posts. Another reason was that WordPress is easy to maintain and edit for the marketing team.',
        result: 'With my hard work, able to adapt and work with the ongoing team together we were able to automate some of the client\'s processes related to customer support, content management and billing through the website. New blog style generated thousands of views every month with new paying customers. After all Return On Investment and Branding is what matters.',
        resource: 'https://unitedstatestaxservices.us/',
        type: 'Full Stack',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 2,
        link: "https://spoofingwilly.com/",
        name: "Spoofing Willy Street",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/spoofingwilly-head.png',
        description: 'Spoofing Willy Street is a digital and traditional marketing consultancy company in Madison, WI. Spoofing Willy provides professional services like social media strategy, traditional marketing, postcards, graphic design, website development, photography, content creation and other.',
        role: 'My role was to completely redesign, re-engineer and improve the performance of the existing website. Create interactive User Experience, modern User Interface. We also helped with the innovation of internal and external software infrastructure and tools of the company. For this project, I choose WordPress, because the current team had experience with it.',
        resource: 'https://spoofingwilly.com/',
        type: 'Full Stack',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 3,
        link: "http://www.perkinsproperties.us/",
        name: "Perkins Properties",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/pekrins-head.png',
        description: 'Perkins Properties acquires, develops, manages, and operates a unique retail, office, and restaurant properties in the Midwest. They own retail, office, commercial, restaurant and entertainment properties. Easily search for a location near you.',
        role: 'My role was to re-engineer and redesign an existing WordPress website with very custommized User Interface components. I worked with client\s marketing team to establish an online presence they never had before.',
        result: 'I achieved the goal we set before with a big Return On Investment and significantly better online presence.',
        resource: 'http://www.perkinsproperties.us/company/',
        type: 'Front End',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
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
            icon: logos.wordpress
          }, 
          { 
            text: 'HTML5',
            icon: logos.html
          }, 
          { 
            text: 'CSS3',
            icon: logos.css
          }, 
          { 
            text: 'JavaScript',
            icon: logos.js
          }
        ]
      },
      {
        id: 5,
        link: "http://badgerblinds.com/",
        name: "Badger Blinds",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/badgerblinds-head.png',
        description: 'Badger Blinds and Shades are family owned and operated home improvement company in the Madison area. They come from three generations in the window covering business and over 25 years of personal experience.',
        role: 'Our role was to achieve excellent online presence through the website for small business, brochure-like website. ',
        result: 'Small business started to grow and generate new potential customers every month.',
        resource: 'http://badgerblinds.com/',
        type: 'Front End',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      {
        id: 6,
        link: "https://kunzeanalytics.com/",
        name: "Kunze Analytics  ",
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/kunze-head.png',
        description: 'Kunze Analytics Core Competencies auditing and improving the Assessment Industry. Some of the services they provide are: Optimizing assessment success patterns through Machine Learning, Validating Models with Client Performance and Retention Metrics, Supporting people decisions and their development with data, Focusing on people’s full potential and engagement at work',
        role: 'Our role was to design and engineer brand new website for the Brand, to attract Bussiness to Bussiness leads, potential partners and generate organic traffic using a Blog post.',
        result: 'Of our hard work with Kunze Analytics, we achieved the milestones we set at the beginning of our journey by multiplying client\'s Return on Investment, integrated blog platform with many excellent resources and executive summaries.',
        resource: 'https://www.kunzeanalytics.com/how-it-works/',
        type: 'Full Stack',
        technologiesUsed: [
          {
            text: 'WordPress',
            icon: logos.wordpress
          },
          {
            text: 'HTML5',
            icon: logos.html
          },
          {
            text: 'CSS3',
            icon: logos.css
          },
          {
            text: 'JavaScript',
            icon: logos.js
          },
          {
            text: 'PHP',
            icon: logos.php
          }
        ]
      },
      { 
        id: 7, 
        link: "http://www.klaritos.com/", 
        name: "Klaritos Inc", 
        description: 'KLĀRITOS is a novel managed-care company specializing in precision medicine.',
        role: 'Build minimalistic info based website for med-tech startup.',
        type: 'Front End',
        image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/klaritos-head.png', 
        technologiesUsed: [
          { 
            text: 'HTML5',
            icon: logos.html
          }, 
          { 
            text: 'CSS3',
            icon: logos.css
          }, 
          { 
            text: 'JavaScript',
            icon: logos.js
          }, 
          { 
            text: 'PHP',
            icon: logos.php
          }
        ]
      },

    ],
  }
  
  export default ProjectsAPI