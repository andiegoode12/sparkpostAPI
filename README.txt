This API uses a MongoDB server.

Ensure all packages are installed by running:
    npm install

To start your server
    Open a terminal window and run:
        npm start
    If you want to specify the port, run:
        PORT=<port> npm start
    In another terminal window, run:
        mongod

Example tests using curl:
    GET all entries:
        curl -i -H "Content-Type:application/json" http://localhost:{port}/sparkpost/
    GET single entry:
        curl -i -H "Content-Type:application/json" http://localhost:{port}/sparkpost/${name}
    POST:
        curl -i -X POST -H "Content-Type: application/json" -d '{"name":"x", "age":4}' http://localhost:{port}/sparkpost
    PUT:
        curl -i -X PUT -H "Content-Type: application/json" -d '{"name":"x", "age":5}' http://localhost:{port}/sparkpost/$x
    DELETE all entries: 
        curl -i -X DELETE http://localhost:{port}/sparkpost