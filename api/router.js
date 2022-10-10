import Router from "@koa/router";
import * as users from "./users/index.js";
import * as hunches from "./hunches/index.js";
import * as games from "./games/index.js";
export const router = new Router();

// Hunches
router.post("/hunches", hunches.create);

// Games
router.get("/games", games.listGames);

// Users
router.post("/users", users.createUser);
router.get("/login", users.login);
router.get("/:username", users.hunches);
