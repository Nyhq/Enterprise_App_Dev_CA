const aboutContent = {
  generalDescription: 'This application is designed to provide users with a platform to manage a catalogue of products. Users can perform operations such as adding, updating, and deleting products. Additionally, users can search for specific products and navigate through the pageated catalogue.',
  
  technologies: 'The application utilises a combination of technologies for its development. On the backend, Node.js is used to create the server-side logic, and MongoDB Atlas is used as the database to store product data. Express.js is used as the web application framework to handle HTTP requests and routes. For the frontend, React.js is employed to create a dynamic and interactive user interface.',
  
  weaknesses: 'One of the main weaknesses with this project was how it handelled large datasets, durnig development a culled dataset of around 1000 entires was used. Scaled to the full 50,000 of prpducts.json caused some search functionalities to suffer performance decreases.',
  
  alternatives: 'To address the performance issues associated with handling large datasets, alternative database solutions could be explored. For example, implementing a relational database management system (RDBMS) such as PostgreSQL could offer better performance and scalability for managing large volumes of data. Additionally, optimizing database queries and indexing could help improve the application\'s overall performance.'
};

module.exports = aboutContent;
