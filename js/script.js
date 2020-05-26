strany=["italy", "france", "switzerland","hungary","romania",
  "japan","afghanistan","india","brazilia","canada",
"argentina","kolumbia","england","mexico"]

about=["Государство", "Столица", "Континент", "Часть света",  "Разница во времени",  
           "Денежная единица",  "Географические объекты",  "Литературные произведения",
		   "Исторические события"];
  
  function makeTableFromCountry (num,i)
	{
    let div= "<div "+"id="+'"'+strany[i]+'"'+"class="+'"bg"'+" >";
		let tab="<table width=100%>";
		let tr="<tr>";
		let td="<td>";
		let h1="<h1>"+num[0]+' - '+num[1]+"</h1>";
			td="<td colspan = 2 >"+h1+"</td>";
			tr+=td;
			tr+="</tr>"
			tab+=tr;
		for (let i=2 ; i<6 ; i++)
				{
					td="<td>"+about[i]+"</td>"; //столб из массива about
						tr="<tr>"+td; //добавляем столб в строку
							td="<td>"+num[i]+"</td>"; //2 столб из массива сountries
						tr+=td+"</tr>"; //добавляем столб в строку и завершаем строку
					tab+=tr; //добавляем строку в таблицу
				} 

    let geo=num[6].length;
    for (let i=0;i<geo;i++)
			{
				td="<td>"+"</td>"
				if (i===0) { td="<td>"+about[6]+"</td>"; }
						tr="<tr>"+td; //1 столб к строке
							td="<td>"+num[6][i]; //2 столб с самим геогр объектом
						tr+=td+"</tr>"; //2 столб к строке
				tab+=tr; //строку к столбу
			}
    let liter=num[7].length;
		for (let i=0;i<liter;i++)
			{
				td="<td>"+"</td>"
				if (i===0) { td="<td>"+about[7]+"</td>"; }
					tr="<tr>"+td; //1 столб к строке
					td="<td>"+num[7][i]; //2 столб с самим литературным произв
				tr+=td+"</tr>"; //2 столб к строке
				tab+=tr; //строку к столбу
			}
	let count=0; // исторические события
            for ( let key in num[8]) // игнорируем использующиеся свойства
				{
                let length=Object.keys(num[8]).length; // Object.keys - возвращает массив ключей, length - длину массива
                tr="<tr>";
                    td="<td>";
                        tist1=about[8];
                        tist2=num[8][key];
                        count++;
                        if (count===Math.floor(length/2)) //Math.floor - округление вниз
                            td+=tist1;
                        tr+=td;
                    td="<td>";
                    td+=key;
                    td+="-";
                    td+=tist2;
                tr+=td;
                tab+=tr; // все выше образованное складываем в переменную
            }
            
	
		tab+="</table>";
		div+=tab;
		div+="</div>";
    return div;
	}
		var tabl=countries.map((num,i)=>{return makeTableFromCountry(num,i)});

tabl.forEach(function(info, i, arr) {
    document.write(info);
    document.write("<br>");
})