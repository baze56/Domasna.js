function createtable(numRows, numCol){
    const  table =  document.createElement('table');

    for (let i = 0; i < numRows; i++){
        const row = document.createElement('tr');

        for(let j = o; j < numCol; j++){
            const cell = document.createElement('td');
            cell.innerHTML = 'Row-$(i+1) Column-$(j+1)';
            row.appendChild(cell); 
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

createtable(5, 7);