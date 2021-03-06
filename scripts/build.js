const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

[
  'react-webln-fallback-core',
  'react-webln-fallback-antd',
  'react-webln-fallback-bootstrap',
  'react-webln-fallback-reactstrap',
  'react-webln-fallback-material-ui',
  'react-webln-fallback-semantic-ui',
].forEach(
  packageName => {
    process.chdir(path.resolve(__dirname, '../packages/', packageName));
    console.log(`Running build for ${packageName}...`);
    exec('yarn && yarn build');
  }
);

process.chdir(cwd);
