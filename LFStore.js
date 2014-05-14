(function() {
    'use strict';

    DS.LFStore = DS.Store.extend({
        adapter: "",
        testlog: function (){
            console.log("########################");
            console.log("#                      #");
            console.log("#  LocalForage Impl.   #");
            console.log("#                      #");
            console.log("########################");
            console.log("Test LFStore successful!");
        }
//      store: localforage
//      all: function(type){},
//      createRecord: function(type, properties){},
//      deleteRecord: function(record){},
//      didUpdateAll: function(type){},
//      find: function(type, id){},
//      getById: function(type, id, record){},
//      hasRecordForId: function(type, id){},
//      modelFor: function(key){},
//      push: function(type, data){},
//      pushMany: function(type, datas){},
//      pushPayload: function(type, payload){},
//      recordIsLoaded: function(type, id){},
//      unloadAll: function(type){},
//       unloadRecord: function(record){}
    });
})();