var b1 = document.body;
var table1 = document.createElement('table');
var julldle = [];
var candle  =[];
var turn = 'X';

var callback = function(event1){
	console.log(event1.target); //ĭ
	console.log(event1.target.parentNode); //��
	console.log(event1.target.parentNode.parentNode); //���̺�

	var mutjull = julldle.indexOf(event1.target.parentNode);
	console.log('����', mutjull);
	var mutcan = candle[mutjull].indexOf(event1.target);
	console.log('��ĭ', mutcan);

	if(candle[mutjull][mutcan].textContent !== undefined){ //ĭ�� �̹� ä���� �ִ°�?
		console.log('��ĭ�ƴմϴ�');
		candle[mutjull][mutcan].textContent = turn;
		if(turn == 'X'){
			turn = '0';
		}else{
			turn = 'X';
		}

	}else{
		console.log('��ĭ�Դϴ�');
	}

	};

for(i=1; i<=3; i++){
	var jull = document.createElement('tr');
	julldle.push(jull);
	candle.push([]);
	for(var j=1; j<=3; j+=1){
		var can = document.createElement('td');
		can.addEventListener('click', callback);
		candle[i - 1].push(can);
		jull.appendChild(can);
	}
	table1.appendChild(jull);
}
b1.appendChild(table1);
console.log(julldle, candle);




