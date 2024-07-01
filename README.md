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

## Screenshots
![Screenshot_20240702_014102](https://github.com/AlbertCloete/online-course-platform/assets/4183251/0d010db8-82e6-4b6c-b77a-6541316862a4)

![Screenshot_20240702_014106](https://github.com/AlbertCloete/online-course-platform/assets/4183251/423d42f0-8526-4a76-b669-584cd504d18d)

![Screenshot_20240702_014114](https://github.com/AlbertCloete/online-course-platform/assets/4183251/beac3cff-8fe8-41a4-bb3d-556e3f5260d6)

![Screenshot_20240702_014135](https://github.com/AlbertCloete/online-course-platform/assets/4183251/93b50d15-4f32-444d-a7e7-eb523a0913e6)

![Screenshot_20240702_014147](https://github.com/AlbertCloete/online-course-platform/assets/4183251/6978d02a-9376-4ede-bc2d-11fc45f8b6a0)




