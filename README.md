# micro-frontends-example
Example of micro-services approach on frontend

##The project

This is simple example of development environment for a micro-services approach applied for frontend application.
Using IFrames approach, this application provides a interface separated in different small applications, each one represents
a piece of the user's final interface.

Build for the final presentation of Frontend class of Unibave's Software Architecture post graduation course,

##Running in your environment

**Pre requisites**

* Node 8 or above
* Docker 18 or above
* Docker Compose 1 or above

**Execution commands**

* 1 - Install the node dependencies for each service once.
``` sh
npm run services:install
```

* 2 - Build docker images for each service once.
``` sh
npm run services:docker
```

* 3 - Deploy a docker compose setup with all services.
``` sh
npm run services:up
```

* 4 - Drop the previous docker compose deployment.
``` sh
npm run services:down
```

## Services

**desktop-service**

**people-service**

**person-service**

**about-service**

**proxy-service**

##Endpoints

List all registered routes on the `proxy-service`:
``` sh
http://localhost:3000/routes
```

Provide details about the `proxy-service`:
``` sh
http://localhost:3000/info
```

Shows the desktop's user interface:
``` sh
http://localhost:3000/desktop-service/
```

Provides details about the given service:
``` sh
http://localhost:3000/desktop-service/info
```