function OpenWindow() {

	var url = $('#url').val();
	var key = $('#key').val();
	
	var newUrl = url.replace(/%7b(.)*%7d/,'%7b' + key + '%7d');
	
	window.open(newUrl);
	
}

function getval(sel)
{
	var url = '';
	
	if (sel.value == 1){
		url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10273&extraqs=&histKey=274890632&id=%7b39A48256-6755-46CB-8069-4BE63AED6580%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7cSubArea_Applicaiton#328751439';
	}
	if (sel.value == 2){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=2&extraqs=&histKey=321306206&id=%7bD1AA5694-6FB3-46B9-B81A-5C2689FEA776%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cCustomers%7cnav_conts#330031496';
		
	}
	if (sel.value == 3){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10342&extraqs=&histKey=545945145&id=%7bB94FDA42-061E-E811-811F-70106FAA6A11%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cSFA%7csra_attribute#247818795';
	}
	if (sel.value == 4){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=112&extraqs=&histKey=590474099&id=%7b54b44a94-6f31-e811-811c-70106faa6a31%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7cSubArea_Case#828524900';
	}
	if (sel.value == 5){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10300&extraqs=&histKey=163481099&id=%7b398C9937-5FD3-E711-810E-70106FAA6A31%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cGoals%7csra_ref_applicationtype';
	}
	if (sel.value == 6){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10352&extraqs=&histKey=5665477&id=%7b919807B0-599B-E711-8107-70106FAA6A11%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cGoals%7csra_ref_datadictionary#836244875';
	}
	if (sel.value == 7){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=1&extraqs=&histKey=656489862&id=%7b8CBAB416-9F0C-E811-8116-70106FAA6A31%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cCustomers%7cnav_accts#585507393';
	}
	if (sel.value == 8){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10385&extraqs=&histKey=183296628&id=%7b3D9AE703-B9F6-E711-8119-70106FAA6A11%7d&pagetype=entityrecord&sitemappath=SFA%7cSFA%7csra_employment#465073393';
	}
	if (sel.value == 9){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10387&extraqs=&histKey=799044089&id=%7b4CB34CD5-83FA-E711-8112-70106FAAF8C1%7d&pagetype=entityrecord&sitemappath=SFA%7cSFA%7csra_post#535523046';
	}
	if (sel.value == 10){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10390&extraqs=&histKey=577928430&id=%7b4D684E3D-CF46-E811-8128-70106FAA6A11%7d&pagetype=entityrecord&sitemappath=SFA%7cSFA%7csra_role#785065176';
	}
	if (sel.value == 11){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10335&extraqs=&histKey=704052888&id=%7b7E8F1A3B-E849-E811-811D-E0071B7FE041%7d&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7csra_notification#552007542';
	}
	
	
	if (sel.value == 21){
		url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10276&extraqs=&histKey=975023898&id=%7bFBF10BE5-F91C-E811-A85F-00224800492F%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7cSubArea_Applicaiton';
	}
	if (sel.value == 22){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=2&extraqs=&histKey=813617356&id=%7bA426BF98-8FE5-4072-9B0E-D3849B9AECBD%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cCustomers%7cnav_conts';
		
	}
	if (sel.value == 23){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10277&extraqs=&histKey=906481224&id=%7b57D6AEE5-0548-4756-B21E-85AA5F62B8F0%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cSFA%7csra_attribute#511215465';
	}
	if (sel.value == 24){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=112&extraqs=&histKey=332466784&id=%7b1A64D1F5-75F0-E711-810C-70106FAA2611%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7cSubArea_Case';
	}
	if (sel.value == 25){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10301&extraqs=&histKey=693207748&id=%7bE83A068B-8AEF-E711-810C-70106FAA2611%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cGoals%7csra_ref_applicationtype';
	}
	if (sel.value == 26){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10325&extraqs=&histKey=544782694&id=%7bC85FC9A8-5521-E811-A87B-002248005A98%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cGoals%7csra_ref_datadictionary';
	}
	if (sel.value == 27){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=1&extraqs=&histKey=697718981&id=%7b49dd99b8-2c36-e811-a886-002248005489%7d&pagetype=entityrecord&sitemappath=SFA%7cCustomers%7cnav_accts#129280386';
	}
	if (sel.value == 28){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10386&extraqs=&histKey=907799398&id=%7bE0B8558C-A2EF-E711-810C-70106FAA2611%7d&pagetype=entityrecord&sitemappath=SFA%7cMA%7csra_employment#801514403';
	}
	if (sel.value == 29){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10388&extraqs=&histKey=668690879&id=%7bEB224283-28F4-E711-810C-70106FAA2611%7d&pagetype=entityrecord&sitemappath=SFA%7cMA%7csra_post#360254194';
	}
	if (sel.value == 210){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10387&extraqs=&histKey=980039169&id=%7b62C4A0A4-6549-E811-A864-00224800492F%7d&pagetype=entityrecord&sitemappath=SFA%7cMA%7csra_role#694529348';
	}
	if (sel.value == 211){
		var url = 'https://sra-sea-dev.crm11.dynamics.com/main.aspx?etc=10296&extraqs=&histKey=991259574&id=%7bA9268A11-9B48-E811-A887-002248005544%7d&pagetype=entityrecord&sitemappath=SFA%7cExtensions%7csra_notification#417785661';
	}
	
	$('#url').val(url);
}


window.onload = function () {
	 url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10273&extraqs=&histKey=274890632&id=%7b39A48256-6755-46CB-8069-4BE63AED6580%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7cSubArea_Applicaiton#328751439';
	 
	 $('#url').val(url);
};
