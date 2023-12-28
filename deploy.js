const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');

const sourceBranch = 'master';
const targetBranch = 'build';
const distDirectory = 'dist';

const git = simpleGit();

async function deploy() {
  try {
    // Fetch the latest changes from the remote repository
    await git.fetch();

    // Check if there are changes in the current branch
    const status = await git.status();
    if (status.files.length > 0) {
      console.log('There are uncommitted changes in the current branch. Aborting deployment.');
      return;
    }
    
    // Check out the source branch (master)
    await git.checkout(sourceBranch);

    // Build your project (replace this with your build command)
    console.log('Building project...');
    // Add your build commands here...

     // Check if the build branch already exists
     const branches = await git.branchLocal();
     const buildBranchExists = branches.branches[targetBranch] !== undefined;
 
     if (!buildBranchExists) {
       // Create the build branch if it doesn't exist
       console.log(`Creating and switching to branch: ${targetBranch}`);
       await git.checkoutLocalBranch(targetBranch);
     } else {
       // Switch to the existing build branch
       console.log(`Switching to existing branch: ${targetBranch}`);
       await git.checkout(targetBranch);
     }

    // Remove all existing files in the build branch
    console.log('Removing existing files in the build branch...');
    await git.rm(['-r', '--cached', '.']);
    await git.clean('f', ['-d']);

    // Add the .gitignore file to the build branch
    console.log('Adding .gitignore to the build branch...');
    await git.add('.gitignore');
    
    // Add the contents of the .dist/ directory to the build branch
    const distFiles = fs.readdirSync(distDirectory);
    await Promise.all(distFiles.map(async (file) => {
        const filePath = path.join(distDirectory, file);
        const targetPath = path.relative(distDirectory, filePath);
        await git.add(targetPath);
    }));

    // Commit the changes
    console.log('Committing changes...');
    await git.commit('Add dist/ contents');

    // // Push the changes to the remote repository
    // console.log('Pushing changes to the build branch...');
    // await git.push('origin', targetBranch);

    console.log('Deployment successful.');
  } catch (error) {
    console.error('Error during deployment:', error);
  }
}

deploy();
