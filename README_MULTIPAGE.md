# Pulse Terminal X — Multi-page rebuild

This version merges the premium visual upgrade with the extra signal feed and alerts modules from the conversion suite.

## Main pages
- `/` Overview landing page
- `/dashboard` Dashboard
- `/signals` Signals page
- `/markets` Markets page
- `/charts` Charts page
- `/news` News page
- `/alerts` Alerts page
- `/academy` Academy page
- `/pricing` Pricing page

## Existing auth and billing pages preserved
- `/login`
- `/signup`
- `/subscribe`
- `/billing/success`
- `/billing/cancel`

## Run locally
```bash
npm install
npm run dev
```

## Notes
- Base theme comes from the premium visual upgrade build.
- Alerts and signal feed were merged in from the conversion suite build.
- Build-tested successfully after fixing the legacy auth register route.
