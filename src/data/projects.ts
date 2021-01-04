export default {
  featured: [
    {
      name: "E-Store",
      description: "An online clothing store built with React.js and Redux. Displays different product category with features to add items to cart and make payment.",
      technologies: "JavaScript, React.js, Webpack, Firebase, Redux, Redux-Sagas, Stripe",
      imagePath: require("../assets/images/store.png").default as string,
      link: "https://this-estore.herokuapp.com",
      githubLink: "https://github.com/ayodejiAA/e-commerce"
    },
    {
      name: "Banka",
      description: `Banka is a light-weight core banking application that powers banking 
                    operations like account creation, customer deposit and withdrawals.`,
      technologies: "HTML5, CSS3, JavaScript, Node, Express.js, PostgreSQL, Heroku, Travis",
      imagePath: require("../assets/images/banka.png").default as string,
      link: "https://this-banka.herokuapp.com/",
      githubLink: "https://github.com/ayodejiAA/banka"
    },
    {
      name: "Scoreboard",
      description: "A web application for displaying game scores and visualizing overall performance. Users can add new users, award points and set a timer. ",
      technologies: "JavaScript, React.js, Webpack",
      imagePath: require("../assets/images/scoreboard.png").default as string,
      link: "https://scoreboard.ayodejiaa.vercel.app/",
      githubLink: "https://github.com/ayodejiAA/scoreboard"
    },

  ],
  notable: [
    {
      name: "Portfolio v1",
      description: "My first personal portfolio website built with React.js. It showcases my work experience, as well as some projects I developed. ",
      link: "https://ayodejiaa.now.sh",
      githubLink: "https://github.com/ayodejiAA/v1",
      technologies: "TypeScript React Webpack Babel"
    },
    {
      name: "Fyyur",
      description: "A musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues. List new artists and venues, discover them, and list shows with artists as a venue owner.",
      githubLink: "https://github.com/ayodejiAA/fyyur",
      technologies: "Python Flask PostgreSQL HTML/CSS JS",
    },
    {
      name: "Admin Post Notifier",
      description: "A wordpress plugin that sends out notifications based on new posts pending review.",
      githubLink: "https://github.com/ayodejiAA/admin-post-notifier",
      technologies: "PHP Wordpress OOP",
    }
  ],
  backend: [
    {
      name: "Banka",
      shortDescription: "Banka Restful API",
      technologies: ['Node/Express', "Mocha & chai", "CI/CD", "PostgreSQL"],
      githubLink: "https://github.com/ayodejiAA/banka",
      docLink: "https://this-banka.herokuapp.com/api-doc"
    },

    {
      name: "Coffee Shop",
      shortDescription: "Permission-based API for Cafe",
      technologies: ['Python', "Flask", "Auth0", "SQLAlchemy"],
      githubLink: "https://github.com/ayodejiAA/coffee_shop/tree/master/backend",
    },

    {
      name: "Nestjs-Flask Server",
      shortDescription: "GraphQL microservice API",
      technologies: ['Nest.js', "Flask", "Graphene", "RabbitMQ"],
      githubLink: "https://github.com/ayodejiAA/nestjs-rabbitmq-flask-graphql",
    },

    {
      name: "Shop API",
      shortDescription: "Simple ecommerce Restful API",
      technologies: ['Node/Express', "Mocha & chai", "CI/CD", "PostgreSQL"],
      githubLink: "https://github.com/ayodejiAA/mock-shop",
      docLink: "http://this-mock-shop.herokuapp.com/api/v1/docs/"
    }
  ]
}
