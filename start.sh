#!/bin/bash

# Start server in Server directory
cd Server
node server.js &
cd ..

# Start server in auth directory
cd auth
node server.js &
cd ..

# Start client
cd client
npm start
