//常用函数的封装  事件的节流(throttle)和防抖(debounce)


//fn 是我们需要包装的事件回调，delay是时间间隔的阈值
export function throttle(fn:Function,delay:number){
    //last 为上一次触发回调的时间，timer是定时器
    let last = 0,
    timer:any = null;
    //将throttle处理结果当作函数返回
    return function(){
        //保留调用时的this上下文
        let context = this;
        //保留调用时传入的参数
        let args = arguments;
        //记录本次触发回调的时间
        let now = +new Date();
        //判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
        if(now - last <delay){
            //如果时间间隔小于我们设定的时间间隔的阈值,则本次触发操作设定一个新的定时器
            clearTimeout(timer);
            timer = setTimeout(function(){
                last  = now;
                fn.apply(context,args);
            },delay)
        }else{
            //如果时间间隔超出了我们设定的时间间隔阈值,那就不等了,无论如何也要给用户一次响应
            last = now;
            fn.apply(context,args);
        }
    }


}


//判断是移动端还是pc端, true表示移动端, false表示pc 端
export function isMobileOrPc(){
    if(/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)){
        return true;
    }else{
        return false;
    }
}


//根据QueryString 参数名称 获取值
export function getQueryStringByName(name:string){
    let result = window.location.search.match(new RegExp("[?&]"+name+"=([A^&]+)","i"));
    if(result == null || result.length < 1){
        return ""
    }
    return result[1];
}
