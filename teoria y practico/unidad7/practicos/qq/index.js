#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

async function init() {
  const answers = await inquirer.prompt([
    { name: 'name', message: 'Nombre del proyecto:' },
    { name: 'description', message: 'Descripción:', default: 'Proyecto base con Express y Pug' },
    { name: 'version', message: 'Versión:', default: '1.0.0' },
    { name: 'author', message: 'Autor:' },
  ]);

  const projectDir = path.join(process.cwd(), answers.name);
  fs.mkdirSync(projectDir);

  const templateDir = path.join(__dirname, 'template');

  // Copiar archivos
  function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      if (fs.lstatSync(srcFile).isDirectory()) {
        copyDir(srcFile, destFile);
      } else {
        fs.copyFileSync(srcFile, destFile);
      }
    }
  }

  copyDir(templateDir, projectDir);

  // Crear package.json
  const pkg = {
    name: answers.name,
    version: answers.version,
    description: answers.description,
    author: answers.author,
    main: "app.js",
    scripts: {
      start: "node app.js"
    },
    dependencies: {
      express: "^4.18.2",
      pug: "^3.0.2"
    }
  };

  fs.writeFileSync(path.join(projectDir, 'package.json'), JSON.stringify(pkg, null, 2));

  console.log('📦 Instalando dependencias...');
  execSync('npm install', { cwd: projectDir, stdio: 'inherit' });

  console.log(`✅ Proyecto creado en ./${answers.name}`);
}

init();
