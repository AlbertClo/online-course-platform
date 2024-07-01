# Online Course Platform

## Local development setup - Backend

### Using Laravel Sail to manage Docker containers
For more in depth information about Laravel Sail, see the official [documentation](https://laravel.com/docs/11.x/sail)

Sail requires your environment variables to be set up. It uses your database username and password specified to set up
the MySQL database among other things. So if you don't have your .env file created yet, copy the example .env file.
```
cd frontend
cp .env.exmple .env
```

Run Laravel Sail to run the docker containers
```
./vendor/bin/sail up
```

Or to run in detached mode:
```
./vendor/bin/sail up -d
```

Install composer packages
```
./vendor/bin/sail composer install
```

Run database migrations
```
./vendor/bin/sail artisan migrate:fresh --seed
```

## Local development setup - Frontend

You need to have Node 18 or higher installed.

```
cd frontend
npm install
npm run dev
``` 

