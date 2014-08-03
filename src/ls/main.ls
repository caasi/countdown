$time = $ '#time'

config =
  deadline: '2014-08-03T1600'
  flag: countdown.HOURS .|. countdown.MINUTES .|. countdown.SECONDS .|. countdown.MILLISECONDS

padding = (num, len) ->
  result = "#num"
  for from result.length til len
    result = "0#result"
  result

update = !->
  left = moment!countdown config.deadline, config.flag
  $time.html "#{padding left.hours, 2}:#{padding left.minutes, 2}:#{padding left.seconds, 2}.#{padding left.milliseconds, 3}"
  request-animation-frame update

request-animation-frame update
