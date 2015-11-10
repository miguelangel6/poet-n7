//In this example we will access to a page where we can see how to use the buttons, dropdown lists and set values in texts inputs
module.exports ={
    'logeo Ogame':function(browser){
	browser
	.url('http://es.ogame.gameforge.com/')
	.waitForElementVisible('body',1000)
	.click('a[id=loginBtn]')
       	.click(".js_uniUrl option[value='s136-es.ogame.gameforge.com']")
	.setValue('input[id=usernameLogin]','Breaker')
	.setValue('input[id=passwordLogin]','Breaker6*')
	.click('input[id=loginSubmit]')
	.end();
    }
}
