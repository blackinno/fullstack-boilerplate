# FullStack boilerplate

### Technology are using:

- **Frontend**: ReactJS (TypeScript)
- **Backend**: NodeJS (TypeScript)
- **Database**: MongoDB
- **Container**: Docker

### Download source:

```sh
git clone https://github.com/blackinno/fullstack-boilerplate.git
```

### Development

**Development environments:**

Default environments:

- `PORT = 5050`
- `DB_ENDPOINT = mongodb://localhost:27017/test`

You can change to your environments as `environments/.env.de`

**To run as development mode following the command:**

Install dependencies:

```sh
npm install
```

Run script as development mode:

1. Run full script

```sh
npm run dev
```

2. Run only backend

```sh
npm run server:dev
```

3. Run only frontend

```sh
npm run client
```

Run with docker

```sh
npm run docker:dev:start
```

Stop running with docker

```sh
npm run docker:dev:stop
```

- View a frontend result as `http://localhost:3000`

- View a backend result as `http://localhost:5050`
