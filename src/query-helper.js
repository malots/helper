function createSelectQuery(table,...cols)	{
    let	colsQuery='';
    if(cols.length > 0)	{
        colsQuery = cols.reduce((colsQuery, column)	=> {
            return colsQuery += `${column}, `;
        },'');
        colsQuery = colsQuery.substring(0, colsQuery.length-2);
    } else {
        colsQuery = '*';
    }
    return `SELECT ${colsQuery.toUpperCase()} FROM ${table.toUpperCase()}`;
}

export { createSelectQuery };
