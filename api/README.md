## First Setup

-   run `cp .env.example .env`
-   run `docker compose up -d`;
-   run `docker exec cfp-energy-app composer install`;
-   run `docker exec cfp-energy-app php artisan key:generate`;
-   run `docker exec cfp-energy-app php artisan migrate`;

## Daily Use

-   run `docker compose up -d` if the containers aren't up yet;

    PS: command to check the container statuses: `docker container ls`
