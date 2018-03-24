var log = function() {
    console.log.apply(console, arguments)
}

var navChange = function() {
    log('函数开始');
    var navlis = $('.nav-li')
    // 循环遍历每个元素, 并且绑定点击事件
    for (var i = 0; i < navlis.length; i++) {
        var navli = navlis[i]
        log('点击开始');
        navli.on('click', function(event){
            log('变化');
            // 注意, 这次我们直接定义了函数作为参数传递, 这样做是合法的
            // 另外, 我们增加了一个 event 参数
            // 浏览器会给事件响应函数传递一个参数, 它代表了事件本身
            // 我们可以用 event.target 取出响应事件的元素
            var self = event.target
            log('self', self)
            // clearActive 函数是我们自己定义的
            // 目的是删除其他元素的 active class
            clearActive()
            // add 可以增加一个 class
            self.classList.add('nav-active')
        })
    }
}

var clearActive = function() {
    var active = $('.nav-active')
    log('active',active)
    if (active != null) {
        // 使用 classList 可以访问一个元素的所有 class
        // remove 可以删除一个 class
        active.classList.remove("nav-active")
    }
}
navChange()
// var bindEvents = function() {
//     navChange()
// }
// var __main = function() {
//     bindEvents()
// }
// $(document).ready(function(){
//     __main()
// })
