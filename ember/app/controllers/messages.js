import Ember from 'ember';
import { Bindings } from 'ember-pusher/bindings';

export default Ember.ArrayController.extend(Bindings, {
  sortProperties: ['createdAt'],
  sortAscending: true,
  logPusherEvents: true,
  PUSHER_SUBSCRIPTIONS: {
    messages: ['new-message']
  },
  isValid: function() {
    return (this.get('name') && this.get('messageContent'));
  }.property('name', 'messageContent'),
  actions: {
    newMessage: function(data) {
      var _this = this,
      chat = jQuery('#chat');

      Ember.run.later((function() {
        _this.store.push('message', _this.store.normalize('message', data.message));
        Ember.run.schedule( 'afterRender', function () {
          // chat.scrollTop(chat[0].scrollHeight);
          chat.animate({scrollTop: chat[0].scrollHeight });
        });
      }), 200);
    },
    send: function() {
      var _this = this;
      if(this.get('isValid')) {
        var message = this.store.createRecord('message', {
          name: this.name,
          messageContent: this.messageContent
        });
        message.save().then(function() {
          _this.set('messageContent', '');
        });
      } else {
        alert('Please enter a name and a message.');
      }
    }
  }
});
