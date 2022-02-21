import request from  'supertest'
import app from './server.util.js'
import * as jQuery from 'jquery';
//import Gallery from './public/gallery.model.js'
//import Context from './public/pma.ui'

describe('Check if URL is accessible', () => {
    it("GET Request works - 200 status code", async () =>{
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    it("Check if gallery model is returned", () => {
        check();
        var context = new Context({caller: "DemoPortal"});
        //var gallery = Gallery.createGallery(new PMA.UI.Components.Context({caller: "DemoPortal"}));
        
        //expect(gallery).
    });
})

function check(){
    console.log("mike testing hello");
}

function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
    return true;
  }
  function isObject(object) {
    return object != null && typeof object === 'object';
  }