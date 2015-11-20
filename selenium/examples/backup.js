module.exports ={
  'Backup':function(browser){
        browser
        .url('http://plataforma.nivel7.net/browserstack/login/index.php')
        .waitForElementVisible('body',1000)
	//Login
  .setValue('input[id=username]','browserstackt')
  .setValue('input[id=password]','Browser6*')
  .submitForm('form#login')
  .waitForElementVisible('body',1000)
	
	//Access to course
  .click('a[title="Plantilla de prueba No.3"]')
  .waitForElementVisible('body',1000)
  .verify.containsText("#settingsnav ul li:nth-child(8) p.tree_item.leaf a","Backup")
	.click('#settingsnav ul li:nth-child(8) p.tree_item.leaf a')
	//Backup
	.waitForElementVisible('body',1000)
	.click('input[id="id_submitbutton"]')
	.waitForElementVisible('body',1000)
	.click('input[id="id_submitbutton"]')
	.waitForElementVisible('body',1000)
	.click('input[id="id_submitbutton"]')
  .waitForElementVisible('body',20000)
	.click('input[value="Continue"]')
  .waitForElementVisible('body',1000)
	.saveScreenshot('screenshots/Backups.png')
	.end();
    }
}
