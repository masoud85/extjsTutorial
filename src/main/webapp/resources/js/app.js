/**
 * Created by Administrator on 10/12/2017.
 */
Ext.define('Person', {
/*
    name1: '',
    return:{
      age:12
    },
*/
constructor: function(config)
{
    this.initConfig(config)
},
    getName: function () {
        return this.name;
    },
    config:{
        lastName: 'Mohammadzadeh',
    },
    applyLastName:function(lName) {
        return Ext.String.capitalize(lName);
    },
    updateLastName : function(newValue, oldValue){
        alert('New value: ' + newValue + ', Old value: ' + oldValue);
    }
});
var obj1 = Ext.create('Person',{lastName:'Ahadi', name:'Masoud'});
console.log(obj1.name);
console.log(obj1.getName());
console.log(obj1.lastName);
console.log(obj1.getLastName());
// var obj2 = Ext.create('Person',{lastName:'Ahadi'});
// console.log(obj2.getName());
obj1.setLastName("ali");

