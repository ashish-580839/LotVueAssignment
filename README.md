# Lotvue ROR Assesment

|   |  |
| ------------- | ------------- |
| **Ruby Version**  | 2.6.0    |
| **Rails Version** | 5.2.3    |
| **Database**      | PostgreSQL |
| **Prerequisites** | RVM, nodejs (Javascript Runtime), Bundler |


## Installation

* Install ruby version

```
rvm install 2.6.0
```

* Connect to PostgreSQL database

```
sudo -u postgres psql
```

* Create user `lotvue`

```
CREATE USER lotvue WITH CREATEDB PASSWORD '1234';
```

* Clone this repository

```
git clone https://github.com/ashish-agrawal-metacube/LotVueAssignment.git
```

* Install dependencies

```
cd LotVueAssignment
bundle install
```

* Configure environment variables (This creates a commented config/application.yml file)

```
bundle exec figaro install
```

* Open `config/application.yml` and add following values in this file (make sure your DB credentials and localhost server url are correct in this file):

```
development:
  DATABASE_USERNAME: "lotvue"
  DATABASE_PASSWORD: "1234"
  DATABASE_HOST: "localhost"

  AWS_ACCESS_KEY_ID: "<your-aws-access-key-id>"
  AWS_SECRET_ACCESS_KEY: "<your-aws-access-secret-access-key>"
  AWS_S3_BUCKET_NAME: "<your-aws-s3-bucket>"
  AWS_S3_REGION: "<your-aws-region>"
```

* Create database and run migrations

```
rails db:setup
```

* Run development server

```
rails s
```
