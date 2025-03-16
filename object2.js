// Object by constructor

// A Singleton is an object that is instantiated only once and provides a single shared instance throughout the application.
const TinderUserSingleton = (function () {
   let instance;
 
   function createInstance() {
     return { name: "Singleton User" };
   }
 
   return {
     getInstance: function () {
       if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

 const user1 = TinderUserSingleton.getInstance();
 const user2 = TinderUserSingleton.getInstance();
 
 console.log(user1 === user2); // true (Same instance)
//  Non singeton
 const tinderUser = new Object();
 const obj1 = new Object();
 const obj2 = new Object();
 
 console.log(obj1 === obj2); // false (Different instances)



  