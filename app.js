new Vue({
    el: '#app',
    //xml: '',
    data: {
    	newTodo: '',
    	todos: [
    		{ text: 'Add some todos' }
    	],
    	patientInfo: {
    		id: '',
    		ssId: '',
    		addr: {
    			streetAdd: '',
    			city: '',
    			state: '',
    			postalCode: '',
    			country: ''
    		},
    		phone: '',
    		patient: {
    			name: {
    				prefix: '',
    				given: '',
    				preferred: '',
    				family: ''
    			},
    			adminGenCode: '',
    			birthTime: '',
    			maritalStatus: '',
    			religiousCode: '',
    			raceCode: '',
    			ethnicCode: '',
    		},
    		guardian: {
    			code: '',
    			addr: {
	    			streetAdd: '',
	    			city: '',
	    			state: '',
	    			postalCode: '',
	    			country: ''
	    		},
	    		tele: '',
	    		guardianPerson: {
	    			name: {
	    				given: '',
	    				family: ''
	    			}
	    		},
	    		birthPlace: {
	    			place: {
	    				addr: {
	    					state: '',
	    					postalCode: '',
	    					country: ''
	    				}
	    			}
	    		},
	    		languageCommunication: {
	    			languageCode: '',
	    			modeCode: '',
	    			prefInd: ''
	    		}
    		}
    	},
    	providerOrganization: {
    		idRoot: '',
    		name: '',
    		tele: '',
    		addr: {
    			streetAdd: '',
    			city: '',
    			state: '',
    			postalCode: '',
    			country: ''
    		}
    	}
    },
    methods: {
    	openDoc: function() {
    		var xhttp = new XMLHttpRequest();
    		xhttp.onreadystatechange = function(){
    			if (xhttp.readyState == 4 && xhttp.status == 200)
    			{
    				readXML(xhttp);
    			}
    		}
    		var xmlDoc
    	},
    	readXML = function(xml){
    		var xmlDoc = xml.responseXML;
    		var patientXML = xmlDoc.getElementsByTagName("patientRole")[0].childNodes;
    		
    	}
    	addTodo: function() {
    		var text = this.newTodo.trim();
    		if (text) {
    			this.todos.push({ text: text })
    			this.newTodo = '';
    		}
    	},
    	removeTodo: function(index){
    		this.todos.splice(index, 1);
    	},
    	removeAll: function(){
    		this.todos.forEach(function(e){
    			this.todos.splice(e);
    		}, this);
    	}
    }
})