(function(){
  var $wrap, config, padding, update;
  $wrap = $('#wrap');
  config = {
    deadline: '2014-08-03T1600',
    flag: countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS
  };
  padding = function(num, len){
    var result, i$;
    result = num + "";
    for (i$ = result.length; i$ < len; ++i$) {
      result = "0" + result;
    }
    return result;
  };
  update = function(){
    var left;
    left = moment().countdown(config.deadline, config.flag);
    $wrap.html(padding(left.hours, 2) + ":" + padding(left.minutes, 2) + ":" + padding(left.seconds, 2) + "." + padding(left.milliseconds, 3));
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}).call(this);
