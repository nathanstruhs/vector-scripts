# Relink

Relink wraps `npm link` command and performs action based on current directory.

## Set up

```
git clone ...
cd vector-scripts/relink
npm i
npm install -g relink
```

Add full local paths to `.env`. (Find full local paths with `pwd`)

## Usage

Execute global `relink` command from desired directory.

Example to relink vector-application-api with vector-sequelize-model

```
cd vector-application-api
relink
```

