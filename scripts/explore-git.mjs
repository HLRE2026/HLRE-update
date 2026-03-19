import { execSync } from 'child_process';

// List all branches (local and remote)
console.log("=== All Branches ===");
try {
  const branches = execSync('git branch -a', { encoding: 'utf-8', cwd: '/vercel/share/v0-project' });
  console.log(branches);
} catch (e) {
  console.log("Error listing branches:", e.message);
}

// Check current branch
console.log("\n=== Current Branch ===");
try {
  const current = execSync('git branch --show-current', { encoding: 'utf-8', cwd: '/vercel/share/v0-project' });
  console.log(current);
} catch (e) {
  console.log("Error:", e.message);
}

// Fetch all remote branches
console.log("\n=== Fetching Remote Branches ===");
try {
  execSync('git fetch --all', { encoding: 'utf-8', cwd: '/vercel/share/v0-project' });
  console.log("Fetched successfully");
} catch (e) {
  console.log("Error fetching:", e.message);
}

// List remote branches again after fetch
console.log("\n=== Remote Branches After Fetch ===");
try {
  const remoteBranches = execSync('git branch -r', { encoding: 'utf-8', cwd: '/vercel/share/v0-project' });
  console.log(remoteBranches);
} catch (e) {
  console.log("Error:", e.message);
}

// Check for assets in main branch
console.log("\n=== Checking for Assets in origin/main ===");
try {
  const mainAssets = execSync('git ls-tree -r --name-only origin/main | grep -E "\\.(png|jpg|jpeg|gif|webp|mp4|svg)$" || echo "No assets found"', { encoding: 'utf-8', cwd: '/vercel/share/v0-project' });
  console.log(mainAssets);
} catch (e) {
  console.log("Error:", e.message);
}

// Look at all remote branches for assets
console.log("\n=== Looking for Assets in All Remote Branches ===");
try {
  const branches = execSync('git branch -r', { encoding: 'utf-8', cwd: '/vercel/share/v0-project' }).trim().split('\n');
  for (const branch of branches) {
    const branchName = branch.trim();
    if (branchName && !branchName.includes('HEAD')) {
      console.log(`\n--- ${branchName} ---`);
      try {
        const assets = execSync(`git ls-tree -r --name-only ${branchName} | grep -E "\\.(png|jpg|jpeg|gif|webp|mp4|svg)$" | head -20 || echo "No image/video assets"`, { encoding: 'utf-8', cwd: '/vercel/share/v0-project' });
        console.log(assets);
      } catch (e) {
        console.log("No assets or error");
      }
    }
  }
} catch (e) {
  console.log("Error:", e.message);
}

// Check git log for any deleted files
console.log("\n=== Recently Deleted Asset Files ===");
try {
  const deleted = execSync('git log --diff-filter=D --summary --pretty=format:"%h %s" -- "*.png" "*.jpg" "*.jpeg" "*.mp4" "*.svg" | head -50 || echo "No deleted assets found"', { encoding: 'utf-8', cwd: '/vercel/share/v0-project' });
  console.log(deleted);
} catch (e) {
  console.log("Error:", e.message);
}
