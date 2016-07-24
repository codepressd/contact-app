var Contacts = {

	listOfContacts:[
		

	],

	addContact: function (contact){
		
		this.listOfContacts.push(contact);
		
	},

	getContact: function(id){
		return this.listOfContacts[id];
	}

};

/*On page*/

$(document).ready(function(){
	$('form').on('submit', function(event){
		var newContact = {};
		event.preventDefault();
		newContact = { 
			firstname : $('.firstname').val(),
			lastname : $('.lastname').val(),
			phonenumber : $('.phone').val(),
			address : $('.address').val(),
			city : $('.city').val(),
			state : $('.state').val()
		
		}

		Contacts.addContact(newContact);
		$('p > input').val('');
	});
});