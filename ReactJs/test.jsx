var TestClickComponent = React.createClass({
	render: function(){
		return(
			<div>
				<button>显示，隐藏</button><span>测试点击</span>
			</div>
		)
	}
});
var TestInputComponent = React.createClass({
	getInitiaState: function(){
		return {
			inputContent: '';
		}	
	}
	render: function(){
		return(
			<div>
				<input type="text"/><span>{this.state.inputContent}</span>
			</div>
		)
	}
});

React.render(
	document.getElementById("container")
	)