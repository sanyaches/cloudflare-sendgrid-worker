# Cloudflare worker sendgrid example

This repository serves like an example of usage Cloudflare worker to sending different requests to Sendgrid API

## Functions

- **Send email** - by pure sendgrid API ([Docs link](https://docs.sendgrid.com/api-reference/mail-send/mail-send))
- **Subscribe to newsletter** - add contact to sendgrid marketing contact list ([Docs link](https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact))

## Commands

- `npm start` - start wrangler development server

- `npm test` - test wrangler project

## Environment

### Development

Add `.dev.vars` file to have an access in code, example below:

```
SENDGRID_API_KEY="YOUR_SENDGRID_API_KEY"
SITE_HOST="http://localhost:3000"
```

### Production

Add environment variables by cloudflare worker settings panel
