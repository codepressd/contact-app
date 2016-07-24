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

$(document).ready(function(){



/*Takes information from form and stores it*/


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

		Contacts.addContact(newContact);// adds newContact to the Object
		$('ul.list-contacts').append('<li>'+newContact.firstname+ ' ' +newContact.lastname+'</li>')

		$('p > input').val('');
	});

/*Click on a name and show that contact's information*/

	$('.list-contacts').on('click', function(event){

		var $target = $(event.target);
		var index = $target.index();

		var contactInfo = Contacts.getContact(index);
		$('.info-list > li').remove();
		$('.info-list').append('<li> First name: '+contactInfo.firstname+ '</li><li> Last name: '+contactInfo.lastname+ '</li><li> Phone Number: '+contactInfo.phonenumber+ '</li><li> Street Address: '+contactInfo.address+ ' '+contactInfo.city+ ', '+contactInfo.state+'</li>');

	});
});