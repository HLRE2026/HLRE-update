import { execSync } from 'child_process';

const cwd = '/vercel/share/v0-project';

// Fetch first
try {
  execSync('git fetch --all 2>&1', { encoding: 'utf-8', cwd });
  console.log("Fetched remote branches");
} catch (e) {
  console.log("Fetch error:", e.message);
}

// List remote branches
console.log("\n=== Remote Branches ===");
try {
  const result = execSync('git branch -r', { encoding: 'utf-8', cwd });
  console.log(result);
} catch (e) {
  console.log("Error:", e.message);
}

// Check main branch for assets folder
console.log("\n=== Assets in origin/main ===");
try {
  const result = execSync('git ls-tree -r --name-only origin/main 2>/dev/null | grep -iE "(assets|images|public)" | head -30', { encoding: 'utf-8', cwd });
  console.log(result || "No matching paths found");
} catch (e) {
  console.log("No assets folder or error");
}

// Check for any image files in main
console.log("\n=== Image/Video Files in origin/main ===");
try {
  const result = execSync('git ls-tree -r --name-only origin/main 2>/dev/null | grep -iE "\\.(png|jpg|jpeg|gif|webp|mp4|svg)$" | head -50', { encoding: 'utf-8', cwd });
  console.log(result || "No image/video files found");
} catch (e) {
  console.log("No image/video files found");
}
