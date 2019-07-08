jQuery(document).ready(function(){

jQuery('.mainmenu i.fa-bars').click(function(){
	jQuery('.mainmenu .menu').addClass('menuFromRight');
});

jQuery('.mainmenu i.fa-times').click(function(){
	jQuery('.mainmenu .menu').removeClass('menuFromRight');
});

});