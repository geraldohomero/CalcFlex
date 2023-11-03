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
        let results = await DB_EXEC(`insert into gastos(tipo, data, preco, valor, odometro)
        values(?,?,?,?,?)`, [param.tipo, param.data, param.preco, param.valor, param.odometro]);
        console.log(results);
        return results.rowsAffected;
    } catch (error) {
        console.error('Error inserting gastos: ', error);
    }
}

export const updateGastos = async (param) => {
    let results = await DB_EXEC(`update gastos set tipo=?, data=?, preco=?, valor=?, odometro=?
    where id=?`, [param.tipo, param.data,param.preco,param.valor,param.odometro, param.id]);
    console.log(results);
    return results.rowsAffected;
  }
  
  export const deleteGastos = async (id) => {
    let results = await DB_EXEC(`delete from gastos where id=?`, [id]);
    console.log(results);
    return results.rowsAffected;
  }