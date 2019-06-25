import Component from '@ember/component';

export default Component.extend({
  buttonLabel: 'Save',

  myValue: null,
  myNationalities: [
    { value: 'UK', label: 'United Kingdom' },
    { value: 'AU',     label: 'Australia' },
    { value: 'NZ',     label: 'New Zealand' },
  ],


  //Each of the error display areas have their
  //visibility controlled by a property in the 
  //errMsgDspCntrl object. Their values are
  //controlled by focus-out actions on each
  //of the input elements
  errMsgDspCntrl: {
    nameError:null,
    nationalityError:null,
  },
  //This name of errMsgDspCntrl is held in
  //a variable for ease of use in error 
  //messages
  nameOfErrMsgDspCntrl : 'errMsgDspCntrl',

  actions:{

    nationalityChangeAction(event){
      this.sendAction('changeNationalityHandler', event.target.value);
    },

    buttonCancelClicked(theguest) {
      this.sendAction('cancelHandler');
    },

    buttonSaveClicked(theguest) {
      theguest.validate()
        .then(({ validations }) => {
          if(validations.get('isValid'))
          {
            this.sendAction('updateRecordHandler', theguest);
          }
          else
          {
            //Iterate over validations.errors and use 'name'
            //property to property the variable which controls
            //the error display
            validations.errors.forEach(function(error) {
              let errCntrlPrpName = `${error.attribute}Error`;
              let errCntrlPrpFullName = `${this.nameOfErrMsgDspCntrl}.${errCntrlPrpName}`;
              if (this.errMsgDspCntrl.hasOwnProperty(errCntrlPrpName) == false)
              {
                let errMsg = "The property ${errCntrlPrpName} was not found in ${this.nameOfErrMsgDspCntrl} object. This is a programming error. Please report to the DRS system administrator." 
                alert(errMsg);
                throw(errMsg); 
              }
              else
              {
                this.set(errCntrlPrpFullName , true);
              }
            }, this);
          }
        })
    }
  }
});
