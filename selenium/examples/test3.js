//In this example you can see how to access to Moodle platforms through CCS
module.exports ={
    'logeo Moodle':function(browser){
        browser
        .url('http://plataforma.nivel7.net/browserstack/login/index.php')
        .waitForElementVisible('body',1000)
        .setValue('input[id=username]','browserstack')
        .setValue('input[id=password]','Browser6*')
        .submitForm('form#login')
        .end();
    }
}
