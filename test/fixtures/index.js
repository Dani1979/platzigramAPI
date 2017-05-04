'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getImage: function getImage() {
    return {
      id: '6ab79620-08c7-11e7-a87e-adfa0e4d03b7',
      publicId: '2qY9COoAhfMrsH7mCyh86T',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/3ewrewrr.jpg',
      descripttion: '#awesome',
      tags: ['awesome'],
      createAt: new Date().toString()
    };
  },
  getImages: function getImages() {
    return [this.getImage(), this.getImage(), this.getImage()];
  },
  getImagesByTag: function getImagesByTag() {
    return [this.getImage(), this.getImage()];
  },
  getUser: function getUser() {
    return {
      id: 'uye3989432-ewre-3232-erv332ffg',
      name: 'Freddy Vega',
      username: 'freddier',
      email: 'f@platzi.test',
      password: 'pl4tzi',
      createAt: new Date().toString()
    };
  }
};
