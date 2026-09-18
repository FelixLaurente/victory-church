# Victory Church International Christian Ministry

Full-stack starter website for Victory Church International Christian Ministry.

## Stack
- Frontend: React + Vite + React Router + Lucide React
- Backend: Node.js + Express + MySQL
- Auth foundation: JWT middleware
- Database: MySQL

## 1. Requirements
- Node.js 18+
- MySQL 8+
- VS Code

## 2. Frontend
Open a terminal:
```bash
cd frontend
npm install
npm run dev
```
Then open the URL Vite displays, normally http://localhost:5173

## 3. Backend
Open another terminal:
```bash
cd backend
npm install
```
Copy `.env.example` to `.env` and set your MySQL credentials.

Then:
```bash
npm run dev
```
API: http://localhost:5000

## 4. Database
Create/import the database:
```bash
mysql -u root -p < database/victory_church.sql
```
Or import `database/victory_church.sql` using MySQL Workbench.

## 5. Admin
Visit:
http://localhost:5173/admin

The included admin page is a UI starter. Before production, connect its actions to authenticated admin APIs and implement login/role authorization.

## Important customization
Replace the placeholder:
- Church address
- Service times
- Facebook / YouTube / Instagram links
- Giving instructions/payment provider
- Church photos
- Pastor/ministry information

Do not put real bank/payment credentials in frontend source code.
