# funtect-api

Backend application for  funtect-api

## Instructions to launch the application.


1. Install dependencies:
`````
npm install
`````

2. Modify the .env file and add the environment variables.

3. The database: postgres was used to create the docker image, run the command: 

`````
docker pull postgres:15.3

`````

4. Then run the command:

`````
docker-compose up
`````

Note: It is important to have the following entered in the .env file:

`````
POSTGRES_URL
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_DB

`````
5. Once we execute the `docker-compose` up command, it will create the database.

6. Finally, we execute the command:


`````
npm run dev
`````