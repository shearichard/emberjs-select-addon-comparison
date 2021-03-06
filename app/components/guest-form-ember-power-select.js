import Component from '@ember/component';

export default Component.extend({
  buttonLabel: 'Save',

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

  nationality: undefined,

  actions:{

    searchCountries(term) {
      //Response to :
      //
      //https://restcountries.eu/rest/v2/name/z?fields=name;alpha2Code
      //
      //
      //looks like this 
      //  [ 
      //    ... 
      //    {"name":"New Zealand","alpha2Code":"NZ"}
      //    ... 
      //  ]
      //

      let url = `https://restcountries.eu/rest/v2/name/${term}?fields=name;alpha2Code`

      let cntSrchPromise = fetch(url)
        .then(function(response) {
          return response.json();
        });
      return cntSrchPromise;        
    },

    nationalityChangeAction(slctn){
      this.set('nationality', slctn);
      this.sendAction('changeNationalityHandler', slctn.alpha2Code);
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
