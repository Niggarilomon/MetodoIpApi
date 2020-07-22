import path from 'path'
import { createConnection } from 'typeorm'

const startConnection = async () => {
  await createConnection({
    type: 'postgres',
    host: '172.16.144.18',
    port: 5432,
    username: 'systagg_bi',
    password: '@TAGG!$$@@',
    database: 'homolog_pdv_manager',
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, '/entity/*.entity{.ts,.js}')],
  })
}

export default startConnection
