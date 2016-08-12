
new Vue({
    el: '#app',    
    data: {
        xml: '',
        ccda: '',  
        demo: '',
        allergies: '',
        care_plan: '',
        chief_complaint: '',
        demographics: '',
        encounters: '',
        functional_statuses: '',
        immunizations: '',
        instructions: '',
        results: '',
        medications: '',
        problems: '',
        procedures: '',
        },
    methods: {
        openDoc: function() {
            ///scope gets wonky, keep a reference to "this"
            var self = this;
            ///create the xml http request
            var xhttp = new XMLHttpRequest();
            ///open it up
            xhttp.onreadystatechange = function(){
                if (xhttp.readyState == 4 && xhttp.status == 200)
                {
                    ///assign the response to a local variable
                    self.xml = xhttp.responseText;
                    ///parse through the gigantic xml file with help from BlueButton
                    self.ccda = BlueButton(self.xml);
                    ///set the local demo variable to the data.demo value
                    self.demo = self.ccda.data.demographics;
                    ///how does it look?
                    //console.log(self.demo.dob);

                }
            }         
            ///open from url, pass along
            xhttp.open("GET", "scripts/ccd.xml", true);
            xhttp.send();
        }
    },
    events: {
        ///helper function for the missing email.
        ///would be templated for use when any value is missing
        'child-msg': function(msg) {
            this.demo.email = msg;
        }
    }
})

///full child component used for the missing email
///would be templated for use when any value is missing
Vue.component('child', {
  template: '#child-template',
  data: function () {
    return { msg: 'Would you like to update your email address?' }
  },
  methods: {
    notify: function () {
      if (this.msg.trim()) {
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
})

