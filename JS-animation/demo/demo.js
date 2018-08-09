/*
 * @Author: wanghan
 * @Date:   2018-08-07 20:26:31
 * @Last Modified by:   wanghan
 * @Last Modified time: 2018-08-07 20:41:37
 */
var imgUrl = "rabbit.png";
var positions = ['0 -854', '-174 -852', '-349 -852', '-524 -852',
    '-698 -852', '-873 -848'
];
var ele = document.getElementById("rabbit");

animation(ele, positions, imgUrl);

function animation(ele, positions, imgUrl) {
    ele.style.backgroundImage = 'url:(' + imgUrl + ')';
    ele.style.backgroundRepeat = 'no-repeat';

    var index = 0;

    function run() {
        var position = positions[index].split(' ');
        ele.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';

        index++;

        if (index >= positions.length) {
            index = 0;
        }
        setTimeout(run, 80);
    }

    run();
}