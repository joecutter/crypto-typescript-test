import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    connectionString: 'postgres://root:password@postgres:5432/test-db',
    idleTimeoutMillis: 30000
});

export default pool;