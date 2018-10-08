/*
* @Author: HP
* @Date:   2018-08-19 10:43:27
* @Last Modified by:   hanniuqueen
* @Last Modified time: 2018-10-05 21:32:29
*/
/*function useArguments() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sumfunction partialUsingArguments(fn) {
    var args = Array.prototype.slice.call(arguments,1);
    var result = function(){
        return fn.apply(this, args.cancat(Array.prototype.slice.call(arguments)));
    }
    return result;
}
console.log(useArguments(1, 2, 3, 4));*/

/*
}*/
/*function partialUsingArguments(fn) {
    var args = Array.prototype.slice.call(arguments,1);
    var result = function(){
        return fn.call(this, args, Array.prototype.slice.call(arguments));
    }
    return result;
}*/



/*function curryIt(fn){
	var length = fn.length;
	var args = [];

	var result  = function(arg){
		args.push(arg);
		length--;
		if(length <= 0){
			return fn.apply(this, args);
		}else{
			return result;
		}
	}
	return result;
}*/


/*function add(a,b){
	return a || b;
}
console.log(add(0,3));*/

/*function createModule(str1, str2) {
	return  obj = new object(str1, str2);
	obj.greeting = str1;
	obj.name = str2;
	obj.sayIt = function(){
		return this.greeting + ', '+ this.name;
	};*/
    /*return obj = {
        greeting: str1,
        name: str2,
        sayIt: function(){
            return this.greeting + ',' + this.name;
        }
    };
}*/
/*function valueAtBit(num, bit) {
    var str = [],
        a = num;
    var b = 0,
        c = 0;
    while(a >= 1 ){        
        //console.log(b);
        c = a % 2;
        b = (a-c) / 2;
        //console.log(c);
        a = b;
        //console.log(a);
        str.unshift(c);
        //console.log(str);
    }

    console.log(str[str.length-bit]);
}

valueAtBit(128, 8);*/


/*function convertToBinary(num) {
    var str = num.toString(2);
    console.log(str);
        var len = str.length;
        if(len < 8){
        	for(var i=0; i<(8-len); i++){
            	str = '0'+str;
           }
        }
        
    console.log(str);
}

convertToBinary(65);*/
/*
function multiply(a, b) {
    return a*b;
}
console.log(multiply(3, 0.0001));*/

/*function multiply(a, b) {
    a = a.toString();

    b = b.toString();
    console.log(a+' , '+b);
    var aLen = a.substring(a.indexOf(".")+1).length;
    var bLen = b.substring(b.indexOf(".")+1).length;
    console.log(aLen+' , '+bLen);
    return (a * Math.pow(10,aLen)) * (b * Math.pow(10,bLen)) / Math.pow(10,aLen+bLen);
}
console.log(multiply(19.99, 10));*/



/*function multiply(a, b) {
    //var re = /\./;
    var aDec = a.toString().split('.')[1] || '';
    var bDec = b.toString().split('.')[1] || '';
    console.log(aDec+' , '+bDec);
    var fix = aDec.length  + bDec.length;
    console.log(fix);
    return (a * b).toFixed(fix); 
}
console.log(multiply(3, 0.0001));*/

/*function alterContext(fn, obj) {
    return fn.apply(obj);
}
console.log(alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' }));
*/
/*
function iterate(obj) {
     var arr = [];
     for(var key in obj){
     	if(key.hasOwnProperty(key)){
     		arr.push(key+": "+obj[key]);
     	}
     }
     return arr;
 }*/
 /*function captureThreeNumbers(str) {
 	var arr = [];
    var p = /\d{3}/g;
    arr =  str.match(p);
    console.log(arr);
    if(arr){
    	return arr[0];
    }else{
    	return false;
    }
}
console.log(captureThreeNumbers('9876543'));*/

/*function matchesPattern(str) {
   // return (/\d{3}-\d{3}-\d{4}/g).test(str);
   return str.match(/\d{3}-\d{3}-\d{4}/g);
}
console.log(matchesPattern('800-555-1212'));*/
/*function getASCII(str){
	var arr = str.split('');

	var result = [];
	for(var i=0;i<arr.length;i++){
			result[i] = parseInt(arr[i].charCodeAt());
	}
	for(var x=1;x<result.length;x++){
		for(var y=0;y<(result.length-x);y++){
			if(result[y]<result[y+1]){
				let temp = result[y];
				result[y] = result[y+1];
				result[y+1] = temp;
			}
		}
	}
	return result;

}
console.log(getASCII('hello world'));*/
	/*console.log(result);
	console.log(typeof(result[5]));
	result.sort(10,function(a,b){
		return a<b;
	});*/
	/*var a = 32;
	var b = 119;
	if(a>b){
		return true;
	}else{
		return false;
	}*/
	

/*function wh(result){
for(var x=1;x<result.length;x++){
		for(var y=0;y<(result.length-x);y++){
			if(result[y]<result[y+1]){
				let temp = result[y];
				result[y] = result[y+1];
				result[y+1] = temp;
			}
		}
	}
	console.log(result);
	return result;
}
wh([ 104, 119, 114, 111, 111, 108, 108, 108, 101, 100,32]);*/
/*function getASCII(str){
	var arr = str.split('');
	var result = [];
	for(var i=0;i<arr.length;i++){
			result[i] = parseInt(arr[i].charCodeAt());
	}
    //冒泡排序
	for(var x=1;x<result.length;x++){
		for(var y=0;y<(result.length-x);y++){
			if(result[y]<result[y+1]){
				let temp = result[y];
				result[y] = result[y+1];
				result[y+1] = temp;
			}
		}
	}
	return result;
}
console.log(getASCII('hello world'));*/
/*function EventEmitter() {
	var on = function(name,fn){
		return fn.apply(arguments);
	}
	var once = function(name,fn){
		return fn.apply(arguments[0]);
	}
}*/
/*function sortStudents(students) {
	for(let i=1; i<students.length;i++){
		for(let j=0;j<students.length-i;j++){
			if(students[j]["class"]<students[j+1]["class"]){
				let temp = students[j];
				students[j]= students[j+1];
				students[j+1] = temp;
			}
		}
	}
	for(let i=0; i<students.length;i++){
		
	}

	console.log(students);
	return students;

}
sortStudents([{"name":"张三","class":2,"score":64},{"name":"李四","class":1,"score":80},{"name":"王五","class":1,"score":80},{"name":"赵六","class":4,"score":94}]);
*/
/*var foo = 1;
var bar = (function(){
	delete foo;
	return foo;
})();
console.log(foo);*/

/*function bro(line){
	var A = line.split(" ")[0];
    var B = line.split(" ")[1];
	if(A === B){
		var strA = A.split("");
		for(let i=0;i<strA.length-1;i++){
			if(strA[i] != strA[i+1]){
				return 0;
			}
		}
		return 1;
	}else{
		var arrA = A.split("").sort();
		var arrB = B.split("").sort();
		if(arrA.length == arrB.length){
			for(let i=0;i<arrA.length;i++){
				if(arrA[i] != arrB[i]){
					return 0
				}
			}
			return 1;
		}
	}
}
console.log(bro('abaaa abaaa'));*/

/*function version(line){
	var ver1 = line.split(" ")[0].split(".");
	var ver2 = line.split(" ")[1].split(".");
	console.log(ver1);
	console.log(ver2);
	if(ver1.length == ver2.length){
		    for(let i=0;i<ver2.length;i++){
			    if(ver1[i] > ver2[i]){
                    return 1;
		        }else if(ver1[i] < ver2[i]){
                    return -1
                }
	        }
	        return 0;
	}else if(ver1.length != ver2.length){
		if(ver1.length > ver2.length){
			for(let i=0;i<ver2.length;i++){
				if(ver1[i] > ver2[i]){
                	return 1;
				}else if(ver1[i] < ver2[i]){
                	return -1
            	}
			}
			return 1;
		}else if(ver1.length < ver2.length){
			for(let i=0;i<ver1.length;i++){
				if(ver1[i] > ver2[i]){
                	return 1;
				}else if(ver1[i] < ver2[i]){
                	return -1;
            	}
			}
			return -1;
		}
	}
}
console.log(version("7.1.0 7.1.0.3"));
*/
/*function change(people,numb){
	if(people === numb){
		return 0;
	}
	var people = people.split("");
	var numb = numb.split("");
	//var result = "";
	var count = 0;
	var len = people.length;//> numb.length ? people.length:numb.length;
	//console.log(len);
	for(let i=0; i<len;i++){
		//console.log(numb.indexOf(people[i]));

		//if(numb.indexOf(people[i])){
		if(numb.indexOf(people[i]) == i){
				//console.log(true);
				continue;
			//}
		}else{
			numb.splice(i,0,people[i]);
			count++;
		}
	}
	if(numb.length == people.length){
		return count;
	}else{
		return count += numb.length - people.length;
	}
}
console.log(change("abcdef","acccc"));*/
/*
function change(q){
	var arr = [];
	var result = [];
	for(let i=0;i<q.length;i++){
		arr = q[i];
		var k = arr[0]-1;
		var max = 0;
		var maxNum =0;
		for(let a=arr[1];a<=arr[2];a++){
			let temp = a.toString(arr[0]).split("");
			let count = 0;
			for(let b=0;b<temp.length;b++){
				if(temp[b] == k){
					count++;
				}
			}
			if(count>max){
				max = count;
				maxNum = a;
			}
		}
		result[i] = maxNum;

	}
	return result;
	
}
var q = [[8,1,100],[5,1,100]];
console.log(change(q));



时间限制：C/C++语言 1000MS；其他语言 3000MS
内存限制：C/C++语言 65536KB；其他语言 589824KB
题目描述：
众所周知，集合{1 2 3 … N}有N!种不同的排列，假设第i个排列为Pi且Pi,j是该排列的第j个数。将N个点放置在x轴上，第i个点的坐标为xi且所有点的坐标两两不同。对于每个排列（以Pi为例），可以将其视为对上述N个点的一种遍历顺序，即从第Pi,1个点出发，沿直线距离到达第Pi,2个点，再沿直线距离到达第Pi,3个点，以此类推，最后到达第Pi,N个点，将该路线的总长度定义为L(Pi)，那么所有N!种路线的总长度之和是多少，即L(P1)+L(P2)+L(P3)+...+L(PN!)的结果是多少？

输入
第一行包含一个整数N，1≤N≤105。

第二行包含N个空格隔开的整数x1到xN，0≤x1<x2<x3<...<xN≤109。

输出
输出L(P1)+L(P2)+L(P3)+...+L(PN!)对109+7取模后的结果。


样例输入
3
0 1 3
样例输出
24

Hint
P1={1 2 3}，P2={1 3 2}，P3={2 1 3}，P4={2 3 1}，P5={3 1 2}，P6={3 2 1}；
L(P1)=3，L(P2)=5，L(P3)=4，L(P4)=5，L(P5)=4，L(P6)=3。



圈地运动，就是用很多木棍摆在地上组成一个面积大于0的多边形～

小明喜欢圈地运动，于是他需要去小红店里面买一些木棍，期望圈出一块地来。小红想挑战一下小明，所以给小明设置了一些障碍。障碍分别是：

1.如果小明要买第i块木棍的话，他就必须把前i-1块木棍都买下来。

2.买了的木棍都必须用在圈地运动中。

那么请问小明最少买多少根木棍，才能使得木棍围成的图形是个面积大于0多边形呢？
输出一个数，表示最少需要的木棍个数，如果无解输出-1


样例输入
3
6 8 10
样例输出
3

Hint
【解释】
用三根6，8，10的木棍可以组成一个直角三角形的图形。*/


/*function niuDan(N){
	var result = "";
	var n_22 = 0;
	var n_33 = 0;
	var flag = 0;
	if(N == 1){
		result = "2";
		return result;
	}else if(N == 2){
		result = "3";
		return result;
	}else {
		n_33 = 2;
		flag = 3;
		if(flag == 3){
			let temp = 2*n_33 + 1;
			if((N-temp) > 0){

			}
		}
	}
}
console.log(niuDan(2));*/

/*
function result(n,m,arr){
	var m_arr = arr;
	var sort = {};
	var count = 0;
	var res_count = 0;
	for(let i=0; i<m_arr.length; i++){
		if(m_arr[i] in sort){
			let temp_count = sort[m_arr[i]];
			temp_count++;
			sort[m_arr[i]] = temp_count;
		}else{
			//sort = m_arr[i];
			sort[m_arr[i]] = 1;
		}
	}
	console.log(sort);

	for(var key in sort){
		if(sort[key] >= n){
			res_count++;
		}

	}
	return res_count;


}
console.log(result(4,10,[1,5,2,1,1,1,2,5,7,2]));*/



//百度编程
/*<table id="jsLayout">
    <tbody>
        <tr><td class="current"></td><td class="wrap"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td class="wrap"></td><td class="wrap"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    </tbody>
</table>

body, html {
    margin: 0;
}
table {
    border-collapse: collapse;
    table-layout: fixed;
    margin: 10px auto;
}
td {
    border: 1px solid #E1E1E1;
    padding: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.current {
    background: #1D2088;
}
.wrap {
    background: #00A0E9;
}*/
/*var p = "\\\\\\"
console.log("\\\\\\".replace(new RegExp("\\\\\\\\","gi"),"/"));*/


/*function sum(n){
    var num_n = n;
	var result_n = 0;
    if(1 <= n && n<= 90){
    	if(n == 1){
        	result_n = 2;
        	return result_n;
    	}
	    result_n = num_n*(num_n-1)/2 + 2;
	    return result_n;
	}else{
    	return false;
    }
}
console.log(sum(100));*/


/*
Bob有N个空盒子，第i个盒子是边长为a[i]的立方体，如果一个盒子的边长严格小于另一个盒子，
并且大盒子里面没有其他小盒子，小盒子也没有放入其他大盒子中，那么这个小盒子可以放入大盒子。
Bob可以根据条件任意的放盒子，因为他想看见最少数量的盒子。没有放入其他盒子的盒子是可以被看到的，
请你帮Bob确定能看见盒子的最少数量。*/

/*输入
输入有两行，第一行是N (1≤n≤5000) ，代表盒子的数量。

第二行有N个数字 a1,a2…an  (1≤ai≤10^9)。Ai是第i个盒子的边长。

输出
输出这个最小数量


样例输入
3
1 2 3
样例输出
1
*/
/*function maxLength(c,line1,line1_length,line2_length,x){
	console.log(line1_length);
    console.log(line2_length);
    if(line1_length == 0 || line2_length == 0){
       // return x；
    }
    if(c[line1_length][line2_length] == 0){
        x++;
        maxLength(c,line1,line1_length-1,line2_length-1);
        
    }
    else if(c[line1_length][line2_length] == 1){
        maxLength(c,line1,line1_length-1,line2_length);
    }
    else{
        maxLength(c,line1,line1_length,line2_length-1);
    }
    //return x;
}

                                 
var line1 = "ABXCD";
var line2 = "ACDSK";
        
var line1_length = line1.length;
var line2_length = line2.length;

var result_length = 0;
  
var c = new Array();
    for(let i=0;i<line1_length;i++){
        c[i] = new Array(line2_length);
        for(let j=0;j<line2_length;j++){
        	c[i][j] = 0;
        }
}
var result = maxLength(c,line1,line1_length,line2_length,result_length);
console.log(result);*/

/*function Text(name,age){
	this.name = name;
	this.age = age;
};
Text.prototype = {
	name: "mmm",
	hasOwnProperty: function() {
		return false;
	}
};
var sfk = new Text("qwe",90);

console.log(sfk.name);
console.log(sfk.age);
console.log(sfk.hasOwnProperty());
*/

/*var a=1;
var a;
console.log(a);*/

/*var a = 1;

(function(window){

	console.log(a);
	console.log(window.a);
})(a=2);
*/
/*var s1 = "goto123keep456";
console.log(s1.replace(/\d+/gi,"*"));*/

/*function err_arr(n,arr){
    var res_obj = {};
    var max = 0;
    for(let i=0;i<n;i++){
        if(arr[i] in res_obj){
            let temp = res_obj[arr[i]];
            temp++;
            res_obj[arr[i]] = temp;
        }else{
            res_obj[arr[i]] = 1;
        }
    }
    for(var key in res_obj){
    	if(res_obj[key] > max){
    		max = res_obj[key];
    	}
    	
    }
    console.log(res_obj);
    return max;
}
var n = 3;
var arr = [1,2,1];
console.log(err_arr(n,arr));*/

/*var x=1,
    y=2,
    temp=3;
console.log(x+y+(++temp));*/

/*var p = "15861666895";
console.log(p.replace(/^1[0-9]{10}+$/gi,"WH"));*/
/*
if(-1){
	console.log(1);
}else{
	console.log(2);
}*/

/*var a = [].push(...[1,2,3]);
console.log(a);*/
/*var obj = new Object();*/


/*var num = (1,2,3,4,5);
console.log(num);*/

/*var x=3;
var y=2;
var z = (x+2)/y;
console.log(Math.ceil(z));*/

/*console.log(foo);
var foo = "s";
console.log(foo);*/

/*
function foo() {
	this = "foo";
}
var a = foo();*/

/*console.log(({"foo":true}).foo);*/

/*var a = new Boolean(false);
console.log(typeof true);
var message = 'Hello world!'; 
var messageAsBoolean = Boolean(message); 
console.log( messageAsBoolean);*/

/*
var a = "011";
console.log(parseInt(a));*/

/*console.log(20+119-"2");*/

/*var a=2;
var b=3;
function s(){
	var b = "1";
	return (1+b+a);
}
console.log("s()");*/


/*console.log(parseInt(10,2));*/

/*
a=2;//全局
console.log(a);*/

/*console.log(new Array(5).join("wanghan"));*/

/*var  a = "ADDFXD";
for(let i=0;i<10,i++){

}*/
/*
function count(str) {
    var result = {};
    for(let i=0;i<str.length;i++){
        if(str[i] in result){
            result[str[i]]++;
        }else{
            if(str[i] == " ") continue;
            result[str[i]] = 1;
        }
    }
    return result;
}
*/
/*
function cssStyle2DomStyle(sName) {
    var arr = sName.split("-");
    if(arr[0] == ""){
    	arr.splice(0,1);
    }

    var result = arr[0];
    for(let i=1;i<arr.length;i++){

    }
    console.log(arr);
}
console.log(cssStyle2DomStyle('-font-size'));*/

/*var x;
x=1;
console.log(x);*/

/*function w(arr,item) {
	return arr.indexOf(item);
}
console.log(w([ 1, 2, 3, 4 ], 3));*/
/*function sum(arr) {
    var sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sum([ 1, 2, 3, 4 ]));*/


/*function remove(arr, item) {
    var res = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] != item){
          res.push(arr[i]);  
        }
    }
    return res;
}
console.log(remove([1, 2, 3, 4, 2], 2));*/
/*
function removeWithoutCopy(arr, item) {
    while(arr.indexOf(item)){
        arr.splice(arr.indexOf(item),1);
    }
    return arr;
}
console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));*/
/*
function concat(arr1, arr2) {
	var newArr = arr1.concat(arr2);
	return newArr;
}
console.log(concat([1, 2, 3, 4], ['a', 'b', 'c', 1]));*/

console.log(parseInt("0x18",10));