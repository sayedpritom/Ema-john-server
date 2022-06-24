/**
 * npm init -y
 * npm i nodemon cors express mongodb dotenv
 * edit package.json(start)
 * create index.js
 * setup express server 
 * set port // const port = process.env.PORT || 5000;
 * setup middleware // app.use(cors()) to get data to from server to frontend; app.use(express.json()) to get data from frontend/react app to server;
 * git init
 * create .env, .gitignore(node_modules .env)
 * create api // app.get()
 * make app listen using specific port // app.listen(port, () => console.log("running" + port));
 * create mongodb project > create a database user > set DB_USER, DB_PASSWORD in .env file
 * network access > allow from anywhere (for ease of practice)
 * database > create new cluster 
 * connect app > replace username, pass
 * create APIs
 */