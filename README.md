# Pulse Terminal X — Real Login + Stripe-Gated Premium Desk

A more advanced market intelligence website for stocks, forex, crypto, and metals.

## What is included
- multi-asset dashboard
- candle and line charts
- TradingView embedded chart mode
- all timeframes: 15M, 1H, 4H, 1D, 1W, 1M
- AI-style signal engine with trend, RSI, support/resistance, breakout, and confidence
- news and holidays panels
- **real login** with MongoDB-backed users
- password hashing with bcrypt
- secure cookie session auth
- **Stripe checkout + billing portal + webhook**
- plan records saved on the user account
- best-version paid desk messaging for Basic and Pro

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Required environment variables
```env
ALPHA_VANTAGE_API_KEY=...
TWELVE_DATA_API_KEY=...
FINNHUB_API_KEY=...
NEXT_PUBLIC_APP_URL=http://localhost:3000
APP_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://...
MONGODB_DB=pulse_terminal_x
JWT_SECRET=super_long_random_secret
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_BASIC_PRICE_ID=price_...
STRIPE_PRO_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## MongoDB setup
1. Create a MongoDB Atlas cluster.
2. Create a database user and copy your connection string.
3. Put the URI in `MONGODB_URI` and choose a DB name in `MONGODB_DB`.
4. Allow your app to connect from local/dev and from Vercel.

## Stripe setup
1. Create two recurring monthly prices in Stripe: **Basic $9.99** and **Pro $29.99**.
2. Put the price IDs into `.env.local`.
3. The pricing page calls `/api/stripe/checkout`.
4. The billing portal route is `/api/stripe/portal`.
5. Point your Stripe webhook to `/api/stripe/webhook`.
6. Subscribe to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

## Auth flow
- `/api/auth/register` creates a MongoDB user
- `/api/auth/login` verifies the password and sets a secure cookie
- `/api/auth/me` returns the signed-in user and plan
- `/api/auth/logout` clears the cookie

## What paying unlocks
### Basic — $9.99/month
- live multi-asset dashboard
- stocks, forex, crypto, and metals
- TradingView chart mode
- core AI signals
- faster refresh cadence

### Pro — $29.99/month
- everything in Basic
- premium desk layout
- advanced AI signal breakdowns
- premium workspace modules
- best version of the product after payment

## Deploy live on Vercel
1. Push the project to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables in Vercel Project Settings.
4. Redeploy after changing env vars.
5. Set your production domain in `NEXT_PUBLIC_APP_URL` and `APP_URL`.
6. Add the production webhook URL in Stripe.

## Honest notes
- This is now far closer to a real product because auth and plans are stored server-side.
- Entitlements are updated through Stripe webhooks, so the account follows the user.
- Live market coverage still depends on your chosen APIs and their rate limits.
