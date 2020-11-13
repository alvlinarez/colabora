# Colabora
Website to see and create products

![Colabora Capture](.readme-static/capture.png)

Features:

* User can see and create products
* Website will display products

[See app in production](http://157.245.94.169)

## Scripts

* `npm install` to install dependencies

#### Development mode
* Create .env file in the root with the following:<br>
    `NODE_ENV=development`<br>
    `PORT=5000`<br>
    `DB_MONGO=mongodb+srv://alvlinarezadmin:9ma@&qA8nJTO@cluster0-u9bht.mongodb.net/colabora_db`<br>
    `S3_BUCKET=colabora-pe-10`<br>
    `S3_REGION=us-east-1`<br>
    `S3_ACCESS_KEY=AKIAXUYXBS7NWN7T4EEJ`<br>
    `S3_SECRET_ACCESS=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`<br>
* `npm run dev:client` to development client environment
* `npm run dev:server` to development server environment

#### Production mode
* Create .env file in the root with the following:<br>
    `NODE_ENV=production`<br>
    `PORT=3000`<br>
    `DB_MONGO=mongodb+srv://alvlinarezadmin:9ma@&qA8nJTO@cluster0-u9bht.mongodb.net/colabora_db`<br>
    `S3_BUCKET=colabora-pe-10`<br>
    `S3_REGION=us-east-1`<br>
    `S3_ACCESS_KEY=AKIAXUYXBS7NWN7T4EEJ`<br>
    `S3_SECRET_ACCESS=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`<br>
* `npm run start` to production

## License

ISC
