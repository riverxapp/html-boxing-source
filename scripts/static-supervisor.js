const { execSync } = require("child_process");
const fs = require("fs");
require("./static-server");
const { startGitPoll } = require("./git-poll");

const BRANCH = process.env.PREVIEW_BRANCH || "main";
const REPO_URL = process.env.REPO_URL;

process.chdir("/app"); // 🔑 FORCE cwd

if (!REPO_URL) {
  console.error("[supervisor] REPO_URL env var is required");
  process.exit(1);
}

function run(cmd, opts = {}) {
  return execSync(cmd, { stdio: "inherit", cwd: "/app", ...opts });
}

console.log("[supervisor] ensuring git repo");

run("git config --global --add safe.directory /app");

if (!fs.existsSync(".git")) {
  run("git init");
}

try {
  const current = execSync("git remote get-url origin", {
    cwd: "/app",
    encoding: "utf8",
  }).trim();

  if (current !== REPO_URL) {
    console.log("[supervisor] updating origin remote");
    run(`git remote set-url origin ${REPO_URL}`);
  }
} catch {
  console.log("[supervisor] adding origin remote");
  run(`git remote add origin ${REPO_URL}`);
}

console.log("[supervisor] syncing branch", BRANCH);
run(`git fetch --depth=1 origin ${BRANCH}`);
run(`git reset --hard origin/${BRANCH}`);
run("git clean -fd");

console.log("[supervisor] static preview running");

// 🔑 start polling ONLY after git is ready
startGitPoll();
