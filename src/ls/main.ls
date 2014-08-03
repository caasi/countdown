$wrap = $ '#wrap'

config =
  deadline: '2014-08-03T1600'
  flag: countdown.HOURS .|. countdown.MINUTES .|. countdown.SECONDS .|. countdown.MILLISECONDS

update = !->
  left = moment!countdown config.deadline, config.flag
  $wrap.html "#{left.hours}:#{left.minutes}:#{left.seconds}.#{left.milliseconds}"
  request-animation-frame update

request-animation-frame update
