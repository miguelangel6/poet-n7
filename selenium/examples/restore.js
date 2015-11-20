module.exports ={
    'Restore':function(browser){
        browser
        .url('http://plataforma.nivel7.net/browserstack/login/index.php')
        .waitForElementVisible('body',1000)
        .setValue('input[id=username]','browserstackt')
        .setValue('input[id=password]','Browser6*')
        .submitForm('form#login')
        .waitForElementVisible('body',1000)
        .click('a[title="Plantilla de prueba No.3"]')
        .waitForElementVisible('body',1000)
        .verify.containsText("#settingsnav ul li:nth-child(9) p.tree_item.leaf a","Restore")
    		.click("#settingsnav ul li:nth-child(9) p.tree_item.leaf a")
    		.waitForElementVisible('body',1000)
    		.verify.containsText(".backup-files-table.generaltable .cell.c4.lastcol a","Restore")
    		.click(".backup-files-table.generaltable .cell.c4.lastcol a")
    
    		//Backup details
    		//Screenshot of the details
    		.saveScreenshot('screenshots/restore/restore_file.png')
    		.click('input[value="Continue"]')
    		.waitForElementVisible('body',1000)
    		//Restore course
    		//Set value to "1" if you want to merge the backup to the course, set value to "O" if you prefer to delete de contents and then restore
    		.click('input[value="0"]')
    		.saveScreenshot('screenshots/restore/restore_course.png')
    		.click('input[value="Continue"]')
    	  .waitForElementVisible('body',1000)
    		//RestoreSettings
    		//Uncheck "Include activities and resources" of the settings
    		//	.click('input[id="id_setting_root_activities"]')
    		//Uncheck "Include blocks" of the settings
    		//	.click('input[id="id_setting_root_blocks"]')
    		//Uncheck "Include filters"
    		//	.click('input[id="id_setting_root_filters"]')
    		//Uncheck "Include Calendar Filters" of the settings
    		//	.click('input[id="id_setting_root_calendarevents"]')
    		//Uncheck "Include groups and groupings" of the settings
    		//	.click('input[id="id_setting_root_groups"]')
    		.saveScreenshot('screenshots/restore/restore_settings.png')
    		.click('input[value="Next"]')
    		
    		//Clear fullname and shortname
    		.clearValue('input[id="id_setting_course_course_fullname"]')
    		.clearValue('input[id="id_setting_course_course_shortname"]')
    		
    		.saveScreenshot('screenshots/restore/restore_clearValues.png')
    
    		//Set fullname and shortname
    		.setValue('input[id=id_setting_course_course_fullname]','Plantilla de prueba No.3')
    		.setValue('input[id=id_setting_course_course_shortname]','Plantilla No.3')
    	  .waitForElementVisible('body',1000)
    		.click('input[value="Next"]')
    	  .waitForElementVisible('body',1000)
    		
    		//Restore Summary
    		.saveScreenshot('screenshots/restore/restore_summary.png')
    		.click('input[value="Perform restore"]')
        .waitForElementVisible('body',20000)
    		.saveScreenshot('screenshots/restore/restore_status.png')
    		.end();
    }
}
