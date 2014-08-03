(function(){
  var $time, config, padding, counter, zero, update;
  $time = $('#time');
  config = {
    deadline: '2014-08-03T1600',
    flag: countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS,
    ending: '00:00:00.000'
  };
  padding = function(num, len){
    var result, i$;
    len == null && (len = 2);
    result = num + "";
    for (i$ = result.length; i$ < len; ++i$) {
      result = "0" + result;
    }
    return result;
  };
  counter = 0;
  zero = function(){
    $time.html(counter < 10
      ? ''
      : config.ending);
    counter += 1;
    counter %= 20;
    requestAnimationFrame(zero);
  };
  update = function(){
    var ref$, hours, minutes, seconds, milliseconds, value;
    ref$ = moment().countdown(config.deadline, config.flag), hours = ref$.hours, minutes = ref$.minutes, seconds = ref$.seconds, milliseconds = ref$.milliseconds, value = ref$.value;
    $time.html(padding(hours) + ":" + padding(minutes) + ":" + padding(seconds) + "." + padding(milliseconds, 3));
    requestAnimationFrame(value <= 0 ? zero : update);
  };
  requestAnimationFrame(update);
}).call(this);
