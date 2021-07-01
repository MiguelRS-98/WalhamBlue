const { Client } = require('pg');

const client = new Client({
    user: 'lhzwxdxhhvmbqx',
    host: 'ec2-52-5-247-46.compute-1.amazonaws.com',
    database: 'delgvqnt3qg373',
    password: 'aec9c766e7f25c71176a3c6a60e8e7ec99ed190e08e45ed5c82f6f0092ff9c10',
    port: 5432,
});

client.connect();