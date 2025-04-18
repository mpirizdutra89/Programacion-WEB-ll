/* const os = require('os')
console.log("DAtos del cup", os.cpus())
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Versión del sistema operativo:', os.release());
console.log('Directorio de inicio:', os.homedir());
console.log('Memoria total (bytes):', os.totalmem());
console.log('Memoria libre (bytes):', os.freemem());
console.log('Informacion del Usuario:', os.userInfo().username);


const fs = require('fs');

const cpus = os.cpus();

let cpuInfo = 'Información de la CPU:\n';

cpus.forEach((cpu, index) => {
    cpuInfo += `\nNúcleo ${index + 1}:\n`;
    cpuInfo += `  Modelo: ${cpu.model}\n`;
    cpuInfo += `  Velocidad: ${cpu.speed} MHz\n`;
    cpuInfo += '  Tiempos:\n';
    cpuInfo += `    Usuario: ${cpu.times.user}\n`;
    cpuInfo += `    Nice: ${cpu.times.nice}\n`;
    cpuInfo += `    Sistema: ${cpu.times.sys}\n`;
    cpuInfo += `    Inactivo: ${cpu.times.idle}\n`;
    cpuInfo += `    IRQ: ${cpu.times.irq}\n`;
});

cpuInfo += `\nNúmero de núcleos: ${cpus.length}\n`;


fs.writeFile('cpu_info.txt', cpuInfo, (err) => {
    if (err) {
        console.error('Error al escribir en el archivo:', err);
    } else {
        console.log('Información de la CPU guardada en cpu_info.txt');
    }
});
 */

const { usandoReadFileAsync } = require('./leer');

usandoReadFileAsync('cpu_info.txt')