# Fullstack recruitment task 2024

List of requirements:

1. Modify `/products` endpoint to allow search products.
2. Implement `/orders/shipping-cost` endpoint:
   1. Endpoint should receive all products in the cart
   2. Endpoint should return total price of all products
   3. Endpoint should return shipping cost:
   - $15 for a total quantity equal to or lower than 5,
   - $5 for total quantity of cart above 5 but lower then 10
   - $0 for total quantity above 10.

## Dependencies

- docker & docker-compose

## Configuration

- Copy default env variables from example file `cp .env.example .env`
- Start project (`docker-compose up`)
- Run migration `docker exec -it recruitment-task yarn migration:up`
- Generate seeds `docker exec -it recruitment-task yarn seed:products`

## Development docker image

### Commands

`docker-compose up` - starts the application locally. For the first time this will build and download all necessary images.

`docker-compose build` - rebuilds application's image. It is required if you edit entrypoint.sh or any other docker related file.

`docker exec -it recruitment-task /bin/bash` - attaches to running container's bash.

`docker exec -it recruitment-task COMMAND` - runs a command in already running application's container

`docker-compose run workspace /bin/bash` - starts a new container and attaches to its bash.
Starting new conainer with specified COMMAND will overwrite development image entrypoint.
