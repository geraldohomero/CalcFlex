import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getGastos = async () => {
    try {
        let results = await DB_EXEC('select * from gastos');
        console.log(results);
        return results.rows._array;
    } catch (error) {
        console.error('Error getting gastos: ', error);
    }
}

export const insertGastos = async (params) => {
    try {
        let results = await DB_EXEC('INSERT INTO gastos (tipo, data, preco, odometro) VALUES (?, ?, ?, ?)', [params.tipo, params.data, params.preco, params.odometro]);
        console.log(results);
        return results.rowsAffected;
    } catch (error) {
        console.error('Error inserting gastos: ', error);
    }
}
