$(function(){
	var container = $("#content");
            var swipe = Swipe(container);
            //页面滚动到指定位置的函数定义
            function scrollTo(time, proportionX){
            	var distX = container.width() * proportionX;
            	swipe.scrollTo(distX, time);
            }
    		////////////////////////////////////////////////////////
	        //=================== 动画处理 ====================== //
	        ////////////////////////////////////////////////////////
	    	
	        swipe.scrollTo(container.width() * 2, 0);

	    	var boy = BoyWalk();//通过接口创建了一个小男孩对象
	    	
	    	/////////
		    //右边飞鸟 //
		    /////////
		    var bird = {
		        elem: $(".bird"),
		        fly: function() {
		            this.elem.addClass('birdFly')
		            this.elem.transition({
		                right: container.width()
		            }, 15000, 'linear');
		        }
		    };
	    	function startRun() {
    
	            boy.walkTo(2000, 0.5)
	                .then(function() {
	                    //暂停走路
	                    boy.stopWalk()
	                })
	                .then(function() {
	                    //开门
	                    return openDoor();
	                })
	                .then(function() {
	                    //开灯
	                    lamp.bright();
	                }).then(function() {
	                    //进商店
	                    return boy.toShop(2000);
	                }).then(function() {
	                	//飞鸟
	                	return boy.talkFlower();
	                }).then(function() {
	                	bird.fly();
	                }).then(function() {
	                    //出商店
	                    return boy.outShop(2000);
	    			}).then(function() {
	                    //灯暗
	                    lamp.dark();
	                });
	    	}
	    	//开始
	    		$("button:first").click(startRun);
	    	})
	    	/*function doorAction(left, right, time) {
	        var $door = $('.door');
	        var doorLeft = $('.door-left');
	        var doorRight = $('.door-right');
	        var defer = $.Deferred();
	        var count = 2;
	        // 等待开门完成
	        var complete = function() {
	            if (count == 1) {
	                defer.resolve();
	                return;
	            }
	            count--;
	        };

	        doorLeft.transition({
            	'left': left
	        }, time, complete);
	        
	        doorRight.transition({
	            'left': right
	        }, time, complete);
	        
	        return defer;
	        }

	        // 开门
		    function openDoor() {
		        return doorAction('-50%', '100%', 2000);
		    }

		    // 关门
		    function shutDoor() {
		        return doorAction('0%', '50%', 2000);
		    }
		    //灯光画？？？
		    var lamp = {
		    	elem: $('.b_background'),
		    	bright: function() {
		    		this.elem.addClass('lamp-bright')
		    	},
		    	dark: function() {
		    		this.elem.removeClass('lamp-bright')
		    	}
		    };
	        // 开门（同时灯打开）
		    $("button:first").click(function() {
		        openDoor().then(function() {
		        	lamp.bright();
		        });
		    });

		    // 关门
		    $("button:last").click(function() {
		        shutDoor().then(function() {
		        	lamp.dark();
		        });
		    });
*/
	    	/*function doorAction(left, right, time){
	    		var $door = $(".door");
	    		var doorLeft = $(".door-left");
	    		var doorRight = $(".door-right");
	    		var defer = $.Deferred();
	    		var count = 2;

	    		//等待开门
	    		var complete = function(){
	    			if(count == 1) {
	    				defer.resolve();//动画完成
	    				return; //退出
	    			}
	    			count--;
	    		};
	    		doorLeft.transition({
	    			'left': left
	    		}, time, complete);
	    		doorRight.transition({
	    			'left': right
	    		}, time,complete);

	    		return defer;
	    	}

	    	function openDoor {
	    		return doorAction ('-50%', '100%', 2000);
	    	}

	    	function shutDoor {
	    		return doorAction ('0%', '50%',2000)
	    	}

	    	// 开门
		    $("button:first").click(function() {
		        openDoor();
		    });

		    // 关门
		    $("button:last").click(function() {
		        shutDoor();
		    });*/
	    	//开始
	    	/*$("button:first").click(function() {
	    		//太阳公转
	    		$("#sun").addClass('rotation');
    			//飘云
    			$(".cloud:first").addClass('cloud1Anim');
    			$(".cloud:last").addClass('cloud2Anim');
	            // 开始第一次走路
	            boy.walkTo(2000, 0.2)
	                .then(function() {
	                	//第一次走路完成，页面开始滚动
	                	scrollTo(5000, 1);//相当于是div父容器向右移动自身的width距离
	                }).then(function(){
	                	//第二次走路
	                	return boy.walkTo(5000,0.5);//返回deferred对象
	                })
	                 
	        });*/
	    
		/*$(function() {

    // 开始
	    $("button:first").click(function() {
	        // 10秒钟 ，走到0.5 也就是页面中间位置
	        var distX = calculateDist('x', 0.5);
	        var distY = calculateDist('y', 0.5);
	        walkRun(10000, distX, distY);
	    });

	})*/




	$(function() {
    	// 定义一个地址的范围
    	var snowflakeURl = [
    		'images/snowflake/snowflake1.png',
    		'images/snowflake/snowflake2.png',
    		'images/snowflake/snowflake3.png',
    		'images/snowflake/snowflake4.png',
    		'images/snowflake/snowflake5.png',
    		'images/snowflake/snowflake6.png',
    	]
    	//飘雪花
    	function snowflake() {
    		//雪花容器
    		var $flakeContainer = $('#snowflake');

    		//随机六张图
    		function getImageName(){
    			return snowflakeURl[[Math.floor(Math.random()*6)]];
    		}
    		//创建一个雪花元素
    		function createSnowBox() {
    			var url = getImageName();
    			return $('<div class = "snowbox"/>').css({
    				'width': 41,
    				'height': 41,
    				'position': 'absolute',
    				'backgroundSize': 'cover',
    				'zindex': 100000,
    				'top': '-41px',
    				'backgroundImage': 'url('+ url +')'
    			}).addClass('snowRoll');
    		}
    		//开始飘花
    		setInterval(function() {
    			//运动的轨迹
    			var startPositionLeft = Math.random() * visualWidth - 100,
    				startOpacity = 1,
    				endPositionTop = visualHeight - 40,
    				endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
    				duration = visualHeight * 10 + Math.random() * 5000;
    			//随机透明度，不小于0.5
    			var randomStart = Math.random();
    			randomStart = randomStart < 0.5 ? startOpacity : randomStart;
    			//创建一个雪花
    			var $flake = createSnowBox();

    			//设置起点位置  只有left是因为只有起点的top位置坐标在css样式中已经设置好了
    			$flake.css({
    				left: startPositionLeft,
    				opacity: randomStart
    			});
    			//加入到容器
    			$flakeContainer.append($flake);

    			//开始执行动画
    			$flake.transition({
    				top: endPositionTop,
    				left: endPositionLeft,
    				opacity: 0.7
    			}, duration, 'ease-out', function(){
    				$(this).remove()//结束后删除
    			});
    		}, 200);
    	}

    	//开始
    	$("button:first").click(function(){
    		snowflake();
    	});
    })