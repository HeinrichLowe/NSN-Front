This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### With docker:
1- Rename the '.env.example' file to just '.env' and fill the fields with necessary informations.

2- Run the docker-compose:

```bash
docker-compose up
```

You can open [http://localhost:8000/ping](http://localhost:8000/ping) to verify if the server started correctly.

##

### Without docker:

1- You need to install the dependencies:

```bash
npm install
```

2- Now you need to configure the '.env' file. 

- Just rename the '.env.example' file to '.env' and fill the fields with necessary informations.

3- Finally, run the server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!