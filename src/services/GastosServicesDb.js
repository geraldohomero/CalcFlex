import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getGastos = async () => {
    let results = await DB_EXEC('select * from gastos');
    return results.rows._array;
}

export const insertGastos = async (params) => {
    let results = await DB_EXEC('insert into gastos (tipo, data, preco, odometro) values(?, ?, ?, ?, ?)', [params.tipo, params.data, params.preco, params.odometro]);
    return results.rowsAffected;
}