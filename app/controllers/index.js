import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { empty, match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({


  useBackend: false,

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
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email, nationality: 'nz' });
      if (this.useBackend)
      {
        newInvitation.save();
      }

      this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }  

});
