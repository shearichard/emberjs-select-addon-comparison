import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('guest', { 
      name: "",
      nationality: ""
    });
  },
  actions: {
    updateNationality(slctnValue) {
      console.log("updateNationality in route new-using-ember-power-select firing");
      this.controller.model.set('nationality' , slctnValue);
    },
    updateRecord() {
      console.log("Update is firing in route new-using-ember-power-select - V1");
      this.transitionTo('guest.index');
    },
    cancelAndExit() {
      this.transitionTo('guest.index');
    },
  }
});
