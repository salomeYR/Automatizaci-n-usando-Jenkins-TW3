const mongoose = require('mongoose');
const dns = require('dns');

const uri = 'mongodb+srv://salo:123@cluster0.pjpwuuz.mongodb.net/iudigital?retryWrites=true&w=majority';

console.log('--- Iniciando Diagnóstico de Conexión ---');
console.log('1. Verificando DNS para el Cluster...');

dns.resolveSrv('_mongodb._tcp.cluster0.pjpwuuz.mongodb.net', (err, addresses) => {
    if (err) {
        console.error('ERROR DNS (SRV): No se pudo resolver la dirección del cluster. Esto suele ser un bloqueo de tu proveedor de internet o firewall.', err.code);
        console.log('Sugerencia: Cambia tu DNS en Windows a 8.8.8.8 (Google) o 1.1.1.1 (Cloudflare).');
    } else {
        console.log('DNS SRV resuelto correctamente:', addresses);
    }

    console.log('\n2. Intentando conexión con Mongoose...');
    mongoose.connect(uri)
        .then(() => {
            console.log('✅ EXITO: Conexión establecida correctamente con Atlas.');
            process.exit(0);
        })
        .catch(e => {
            console.error('❌ ERROR de Mongoose:', e.message);
            if (e.message.includes('ECONNREFUSED')) {
                console.log('El servidor rechazó la conexión. Verifica que el password sea correcto y que tu IP esté en Network Access de Atlas.');
            }
            process.exit(1);
        });
});
