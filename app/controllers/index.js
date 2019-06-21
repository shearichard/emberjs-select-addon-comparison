import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { empty, match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({


  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),

  isDisabled: not('isValid'),

  actualEmailAddress: computed('emailAddress', function() { 
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: observer('emailAddress', function() { 
    console.log('observer is called', this.get('emailAddress')); 
  }),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }  

});