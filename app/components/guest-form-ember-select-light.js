import Component from '@ember/component';

export default Component.extend({
  buttonLabel: 'Save',

  actions:{
    buttonCancelClicked(theguest) {
      alert("Cancel has been clicked")
    },
    buttonClicked(theguest) {
      alert(`guest-form-ember-select-light ${this.buttonLabel} button firing`);

      theguest.validate()
        .then(({ validations }) => {
          if(validations.get('isValid'))
          {
            this.sendAction('action', theguest);
          }
          else
          {
            //Invoke all validations in order that
            //any which fail validation will show
            //their error message
          }
        })
    }
  }
});
