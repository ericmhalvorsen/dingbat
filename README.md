# Dingbat

Trolls websites (Amazon, BestBuy, Walmart) for products and notifies if they come into stock. Originally written
for the Playstation 5.

#### Configuration

Clone the repository. Make sure you have Node installed. This project uses yarn but you
can use npm if you wish. Create an file in the root of the project called `.env` with the
following contents at least:

```
# Required
SMTP_EMAIL=<replace with email to use for outgoing SMTP account>
SMTP_PASSWORD=<password for the above outgoing SMTP account>

# Optional
EMAIL_RECIPIENTS=<list of recipients separated by semicolons - defaults to just the SMTP_EMAIL setting above>
SMTP_HOST=<if you want to use a host other than gmail - defaults to smtp.gmail.com>
SMTP_PORT=<defaults to 465 for secure, other ports are insecure>
```

The `config.json` file in the root of the project has a list of products to 'watch' and notify if one
comes on sale. Modify this to your needs, though the 'site names' need to remain (don't rename Amazon to AmazonUK
for example, just change the url if you need to).

Run the project with:

```
yarn && yarn start
```

This should start dumping log messages into your console. If email is configured correctly, it will also send
emails if it thinks it found anything.

#### Local Docker Setup
You can run locally with docker-compose while developing, or as a one time container build:

```bash
docker-compose up # Runs the app and shares the local volume with the container

docker build -t my_dingbat .
docker run my_dingbat # Warning: local .env file will be copied into the container directly at the moment
```

This image can be run on any deployment but keep in mind whatever credentials you used should
be temporary or easily revokable.

## Licensing

The code in this project is licensed under MIT license.
