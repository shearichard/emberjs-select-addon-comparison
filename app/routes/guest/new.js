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
      console.log("updateNationality firing");
      this.controller.model.set('nationality' , slctnValue);
    },
    updateRecord() {
      alert("Update is firing in new/route - V1");
      this.transitionTo('guest.index');
    },
  }
  
});
