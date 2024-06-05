# Fullstack recruitment task 2024

List of requirements:

1.sfda

## Dependencies

- docker & docker-compose

## Configuration

- Copy default env variables from example file `cp .env.example .env`
- Start project (`docker-compose up`)
- Run migration `docker exec -it recruitment-task seed:products`

## Development docker image

### Commands

`docker-compose up` - starts the application locally. For the first time this will build and download all necessary images.

`docker-compose build` - rebuilds application's image. It is required if you edit entrypoint.sh or any other docker related file.

`docker exec -it recruitment-task /bin/bash` - attaches to running container's bash.

`docker exec -it recruitment-task COMMAND` - runs a command in already running application's container

`docker-compose run workspace /bin/bash` - starts a new container and attaches to its bash.
Starting new conainer with specified COMMAND will overwrite development image entrypoint.
To run terraform command in container started that way first run script `./scripts/tf_login.sh` to create `.terraformrc` file with credentials.

`docker-compose run workspace COMMAND` - starts a new container and runs a command in it. This command will overwrite development image entrypoint.
It is not possible to run terraform commands that require login that way.
