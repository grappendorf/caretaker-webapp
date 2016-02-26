module.exports = ->

  @World = require('webapp-tester').World

  @When /^I am authenticated as adminiatrator$/, (next) ->
    @driver.visit('#').then =>
      return @driver.findElement(@webdriver.By.xpath("//label[normalize-space()='Email']"))
    .then (element) =>
      return element.getAttribute('id')
    .then (id) =>
      return @driver.findElement(@webdriver.By.xpath("//input[@aria-labelledby='#{id}']"))
    .then (element) =>
      return element.sendKeys('admin@example.com')
    .then =>
      return @driver.findElement(@webdriver.By.xpath("//label[normalize-space()='Password']"))
    .then (element) =>
      return element.getAttribute('id')
    .then (id) =>
      return @driver.findElement(@webdriver.By.xpath("//input[@aria-labelledby='#{id}']"))
    .then (element) =>
      return element.sendKeys('admin')
    .then =>
      return @driver.findElement(@webdriver.By.xpath("//*[normalize-space()='Sign in']"))
    .then (element) =>
      return element.click()
    .then =>
      next()
    , (x) =>
      next.fail x
