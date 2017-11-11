$(() => {

  $('#repo-input').bind('input propertychange', function() {
    const repo = this.value
    $('#status-info').text("Current input: " + repo)
  })
  $('#repo-input').focus() // focus input box

})
