<h1>十天精通css3：</h1>
<hr>
<h4>1-1：什么是css3示例代码。</h4>
<br>
<h5>（1）@keyframes 规则：</h5><br>
	<p>(和animation属性配套使用，animation属性设置动画的时间，其中要调用@keyframes设置的animationname。)</p><br>

	通过 @keyframes 规则，您能够创建动画。
    创建动画的原理是，将一套 CSS 样式逐渐变化为另一套样式。
    在动画过程中，您能够多次改变这套 CSS 样式。
    以百分比来规定改变发生的时间，或者通过关键词 "from" 和 "to"，等价于 0% 和 100%。
    0% 是动画的开始时间，100% 动画的结束时间。
    为了获得最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。
<p>注释：请使用动画属性（animation属性）来控制动画的外观，同时将动画与选择器绑定（animation属性放在选择器的样式中）。</p>
<h5>（2）属性学习：</h5>
	text-shadow、
	transform、
	transform-style
<h5>（3）浏览器前缀</h5>
	<p>在编写CSS3样式时，不同的浏览器可能需要不同的前缀。它表示该CSS属性或规则尚未成为W3C标准的一部分，是浏览器的私有属性。</p>
	-webkit:chrome和safari、
	    -moz:firefox、
	     -ms:IE、
	      -o:opera
