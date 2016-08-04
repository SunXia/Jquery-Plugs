/****************************************
@Name：slide 幻灯片轮播组件
@Author：SunXia
@Date：2016-08-04
@Blog：http://sentsin.com
@Copyright：SunXia(筱梅梅)        
*/
(function ($) {
    $.fn.slider = function (options) {
        var me = this;
        //使用鼠标悬浮事件触发
        var defualts = { switchingMode: "mouseenter" };

        //融合配置项  
        var opts = $.extend({}, defualts, options);
		console.log(opts.title);
        //DOM容器对象，类似MX框架中的$e  
        var $e = $(this);

        //当前轮播图片列表索引  
        var selectedIndex = 0;

        //小图标列表
        var $lis_ico;

        //图片列表  
        var $lis;

        var time;

        //控制是否执行定时计划 false执行 true不执行
        var isPlay = false;
        //初始化方法  
        me.init = function () {
            $lis_ico = $("ul.lib li", $e);
            $lis = $(".slide li", $e);

            //绑定鼠标悬浮事件  
            $lis.bind(opts.switchingMode, function () {
                console.log("aaa");
				//var idx = $lis.index($(this))
                //console.log(idx);
                //me.selectImg(idx);
            });

            //执行定时方法  autoPlay
            time = setInterval(me.autoPlay, 3000);
        };


        /**  
        *  鼠标移动到图片  
        *  
        */
        me.selectImg = function (idx) {
            if (selectedIndex != idx) {
                //此处可用控制 轮播 当前显示图片的样式等
                isPlay = true;
                selectedIndex = idx;
                $lis.eq(selectedIndex).show();
                $lis_ico.eq(selectedIndex).addClass("on").siblings().removeClass("on");
            };
        }

        /**  
        *  定时方法  
        *  
        */
        me.autoPlay = function () {
            if (!isPlay) {
                $lis.hide();
                $lis.eq(selectedIndex).show();
                $lis_ico.eq(selectedIndex).addClass("on").siblings().removeClass("on");
                selectedIndex++;
                if (selectedIndex == $lis.length) {
                    selectedIndex = 0;
                }
            }
        };

        //自动执行初始化函数  
        me.init();

        //返回函数对象  
        return this;
    };

})(jQuery);  