import { Usuario } from 'src/usuario/usuario.entity';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'agenda',
  logging: true,
  synchronize: true,
  entities: [Usuario],
});

dataSource
  .initialize()
  .then(() => console.log('o DataSource foi inicializado'))
  .catch((err) => {
    console.log(`Data Source não inicializado erro: ${err}`);
  });
