const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, 'game-overlay', 'prebuilt')
const destinationDir = path.join(__dirname, 'electron-overlay')

// Files to copy
const filesToCopy = ['n_overlay.dll', 'n_overlay.x64.dll', 'injector_helper.exe', 'injector_helper.x64.exe']

// Function to copy files
function copyFiles() {
  filesToCopy.forEach((file) => {
    const sourcePath = path.join(sourceDir, file)
    const destPath = path.join(destinationDir, file)

    try {
      fs.copyFileSync(sourcePath, destPath)
      console.log(`Copied ${file} to ${destinationDir}`)
    } catch (error) {
      console.error(`Error copying ${file}: ${error}`)
    }
  })
}

// Run the copy function
copyFiles()
