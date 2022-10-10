import Router from "@koa/router";
import * as users from "./app/users/index.js";
import * as hunches from "./app/hunches/index.js";
import * as games from "./app/games/index.js";
export const router = new Router();

// Hunches
router.post("/hunches", hunches.create);

// Games
router.get("/games", games.listGames);

// Users
router.post("/users", users.createUser);
router.get("/login", users.login);
router.get("/:username", users.hunches);
