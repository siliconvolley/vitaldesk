# VitalDesk

VitalDesk is a browser-based **digital signage solution** that displays real-time patient information in hospital waiting areas—improving communication, reducing confusion, and enhancing the patient experience. 🏥📺

## About
- Framework - [TanStack Start](https://tanstack.com/start/latest/docs/framework/react/overview)
- Authentication - [Better Auth](https://www.better-auth.com/docs/introduction)
- Database - [PostgreSQL](https://www.postgresql.org/docs/current/index.html)
- ORM - [Drizzle](https://orm.drizzle.team/docs/overview)

## Setup

1. Install dependencies
```bash
pnpm i
```
2. Generate Drizzle migration scripts
```bash
pnpm run db:generate
```

3. Apply migrations to database
```bash
pnpm run db:migrate
```

4. Start local dev server
```bash
pnpm run dev
```

