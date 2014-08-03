$time = $ '#time'

config =
  deadline: '2014-08-03T1600'
  flag: countdown.HOURS .|. countdown.MINUTES .|. countdown.SECONDS .|. countdown.MILLISECONDS
  ending: '00:00:00.000'

padding = (num, len = 2) ->
  result = "#num"
  for from result.length til len
    result = "0#result"
  result

counter = 0
zero = !->
  $time.html if counter < 10 then '' else config.ending
  counter += 1
  counter %= 20
  request-animation-frame zero

update = !->
  {hours, minutes, seconds, milliseconds, value} = moment!countdown config.deadline, config.flag
  $time.html "#{padding hours}:#{padding minutes}:#{padding seconds}.#{padding milliseconds, 3}"
  request-animation-frame if value <= 0 then zero else update

request-animation-frame update
