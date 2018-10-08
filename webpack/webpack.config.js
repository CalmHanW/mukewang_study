/*
* @Author: HP
* @Date:   2018-10-04 13:20:52
* @Last Modified by:   HP
* @Last Modified time: 2018-10-04 13:35:19
*/
module.exports = {
	entry: __dirname + '/src/scritp/main.js',
	output: {
		path: __dirname + '/dist/js',//打包之后的路径
		filename: 'bundle.js'//打包之后的文件名
	}
}