localforage-ember
=================

LocalForage-ember is ember's data-store expendation adapted to Mozilla's LocalForage Library.

Overloading ember's default store:

```javascript
    App = Ember.Application.extend({
              /.../
              Store: DS.LFStore // Store available application-wide
          });
```