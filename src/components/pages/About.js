import React  from "react";


const About = () => {
    return (
      <div className="container">
        <div className="py-4">
          <h1>About Page</h1>
          <p className="lead">
            React is a JavaScript library for building user interfaces. React is
            used to build single-page applications. React allows us to create
            reusable UI components.
          </p>

          <p className="lead">
            React Router :: Routing is a process in which a user is directed to
            different pages based on their action or request. ReactJS Router is
            mainly used for developing Single Page Web Applications. React
            Router is used to define multiple routes in the application. When a
            user types a specific URL into the browser, and if this URL path
            matches any 'route' inside the router file, the user will be
            redirected to that particular route. React Router is a standard
            library system built on top of the React and used to create routing
            in the React application using React Router Package. It provides the
            synchronous URL on the browser with data that will be displayed on
            the web page. It maintains the standard structure and behavior of
            the application and mainly used for developing single page web
            applications.
          </p>

          <p className="lead">
            CRUD :: CRUD is an acronym that comes from the world of computer
            programming and refers to the four functions that are considered
            necessary to implement a persistent storage application: create,
            read, update and delete.
          </p>
        </div>
      </div>
    );
};

export default About;