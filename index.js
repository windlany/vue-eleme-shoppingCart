var app = new Vue({
    el: '#app',
    data: { 
        navs: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
        selector: 0,
        goods: [
            {
                title: 'A',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'B',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'C',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'D',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'E',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'F',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'G',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'H',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'I',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'J',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'K',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'L',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
            {
                title: 'M',
                items: [{food: 'food1', num: 0}, {food: 'food2', num: 0}, {food: 'food3', num: 0}, {food: 'food4', num: 0}]
            },
        ],
        total: 0,  // 购买总量

    }, 
    methods: {
        // 点击右侧导航栏
        toHash(item, index) {
            this.selector = index;
            window.location.hash = item;
            
            // 导航栏向上滚动相应距离，一个li的高度为54px
            this.$refs.left.scrollTop = (index > 7 ? index-7 : 0)*54;
        },
        // 食品选购按钮
        increase(index1, index2, event) { 
            this.total++;
            this.goods[index1].items[index2].num++;

            // 小球动画 
            var top = event.clientY, // 小球降落起点
                left = event.clientX,
                endTop = window.innerHeight - 30,  // 小球降落终点
                endLeft = 20; 

            // // 小球到达起点
            var outer = $('#points .pointPre').first().removeClass("pointPre").css({
                left: left + 'px',
                top: top + 'px'
            });
            var inner = outer.find(".point-inner"); 
 
            setTimeout(function() { 
                // 将jquery对象转换为DOM对象
                outer[0].style.webkitTransform = 'translate3d(0,' + (endTop - top) + 'px,0)';
                inner[0].style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)';
                
                // 小球运动完毕恢复到原点
                setTimeout(function() {
                    outer.removeAttr("style").addClass("pointPre");
                    inner.removeAttr("style");
                }, 1000);  //这里的延迟值和小球的运动时间相关
            }, 1);
        },
        reduce(index1, index2) {
            this.total--;
            this.goods[index1].items[index2].num--;
        },
        // 右侧菜单滑动
        listScroll() {
            // 为了达到联动效果，右侧滑动则改变左侧导航栏样式
            var titles = document.getElementsByClassName('goodTitle');
            for(var i = 0; i < titles.length; i++) {
                var style = titles[i].getBoundingClientRect();
                if(style.top == 107) {
                    this.toHash(titles[i].innerHTML, i);
                }
            }
        }
    } 
});