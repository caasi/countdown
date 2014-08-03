(function(){
  var $wrap, config, update;
  $wrap = $('#wrap');
  config = {
    deadline: '2014-08-03T1600',
    flag: countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS
  };
  update = function(){
    var left;
    left = moment().countdown(config.deadline, config.flag);
    $wrap.html(left.hours + ":" + left.minutes + ":" + left.seconds + "." + left.milliseconds);
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}).call(this);
