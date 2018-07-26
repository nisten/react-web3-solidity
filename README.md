# react-redux demo with integrated light-client in docker

To start the project, make sure you have docker installed and run `docker-compose up`.
On another terminal run `yarn add react-static && yarn start` to start the local webserver.
To debug web3 and check output run `yarn start --debug' otherwise any `console.log` in the code
will be filtered out once the app is compiled.

If you're running docker on mac, depending on your version of Docker you may need to factory reset
it through the docker whale app if the Docker.qcow2 file in your user Libraries folder is 
getting too big and eating all your space. This bug may have been fixed in the latest update.


Check running app at `http://localhost:3000`
And the geth RPC port number is `localhost:8545`



Cheers,
`i/o bound`
