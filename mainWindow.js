$(() => {

  $('#repo-input').bind('input propertychange', function() {
    const repo = this.value
    $('#status-info').text("Current input: " + repo)
  })
  $('#repo-input').focus() // focus input box

  $('#info-module-1').text(module1.about() + "\n\n" + module1.testModule1())
  $('#info-module-2').text(module2.about() + "\n\n" + module2.testModule2())

})
