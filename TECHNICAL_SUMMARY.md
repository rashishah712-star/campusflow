# CampusFlow — Technical Summary

## 1. Product
CampusFlow solves deadline fragmentation for students by combining courses, tasks, due dates, priorities, and completion status in one responsive dashboard.

## 2. Architecture
React/TypeScript/Vite serves the UI. Express/TypeScript exposes REST endpoints. Prisma provides typed PostgreSQL access. Vercel hosts the frontend; Railway hosts the API and PostgreSQL database.

## 3. Authentication & RBAC
Registration hashes passwords with bcrypt. Login returns a signed JWT containing user id and role. Protected API routes validate the bearer token. Ownership checks ensure users can only mutate their own tasks/courses. `requireRole('ADMIN')` protects the administrative task endpoint.

## 4. Data models
- User: identity, credentials, role.
- Course: academic grouping owned by a user.
- Task: deadline, status, priority, optional course relation.

## 5. API
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET/POST/DELETE /api/courses`
- `GET/POST/PATCH/DELETE /api/tasks`
- `GET /api/tasks/admin/all` (ADMIN)
- `GET /health`

## 6. DevOps
GitHub Actions installs dependencies, generates Prisma client, builds/tests the API, lints/builds the frontend, and runs on pushes and pull requests to `main`. Railway uses `railway.json`; Vercel uses `vercel.json`.

## 7. Security
Passwords are never stored in plaintext. JWTs have a seven-day lifetime. Inputs are validated with Zod. Database relations use cascading ownership rules. CORS is restricted through `CLIENT_URL` in production.

## 8. Trade-offs
JWT is intentionally simple for a student/demo product. A production expansion should move tokens to secure httpOnly cookies, add refresh-token rotation, rate limiting, CSRF protection, audit logs, password reset, and observability.

## 9. Scalability path
Add indexes on `(ownerId, dueAt)`, background notifications, calendar integrations, Redis-backed rate limiting, and a queue for reminders. The API can remain stateless while PostgreSQL handles durable state.
