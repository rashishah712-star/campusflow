# CampusFlow

CampusFlow is a full-stack student deadline and workload planner. It turns scattered assignment dates into one prioritized dashboard, with course-level organization and role-based access.

## Stack
- Frontend: React + TypeScript + Vite
- API: Node.js + Express + TypeScript
- Database: PostgreSQL + Prisma
- Auth: JWT + bcrypt + RBAC (STUDENT / ADMIN)
- CI: GitHub Actions
- Deployment targets: Vercel (client) + Railway (API/Postgres)

## Product problem
Students commonly manage deadlines across LMS portals, WhatsApp groups, email, and paper notes. CampusFlow gives them a single lightweight system to see what is due, what is urgent, and what to work on next.

## Data model
`User` → owns `Course` and `Task`; `Course` groups tasks. Three core models satisfy the database requirement.

## Local setup
1. Create PostgreSQL database.
2. Copy `server/.env.example` to `server/.env` and set `DATABASE_URL`, `JWT_SECRET`, and `CLIENT_URL`.
3. Run `npm install`.
4. Run `npm --workspace server exec prisma migrate dev --name init`.
5. Run `npm run dev`.

Client: http://localhost:5173  | API: http://localhost:4000

## Production deployment
- Railway: deploy the repository API service, add PostgreSQL, set environment variables, and run `prisma migrate deploy` during deployment.
- Vercel: deploy the repository, set `VITE_API_URL` to the Railway API URL, and use the provided `vercel.json`.
- GitHub Actions runs server build/tests and client lint/build on every push and pull request.

## Demo credentials
Use the Register screen to create a student account. An admin can be promoted directly in PostgreSQL for demo purposes by setting `role = 'ADMIN'`.

## Security notes
Passwords are bcrypt-hashed. JWTs are required for protected routes. Server-side ownership checks prevent students from accessing another user's courses/tasks. Admin-only endpoints use RBAC middleware.

## Demo Day story
1. Show the problem: deadlines scattered across five places.
2. Register/login.
3. Add courses and tasks.
4. Dashboard shows urgency and progress.
5. Mark a task complete.
6. Explain architecture and deployment.
7. Close with impact: fewer missed deadlines, one source of truth.


Deployment verification complete.
