import React from 'react';

const glypyMapMaker = (glypy) => Object.keys(glypy).map((key) => {
  return {
    key,
    value: String.fromCharCode(parseInt(glypy[key], 16))
  };
}).reduce((map, glypy) => {
  map[glypy.key] = glypy.value
  return map;
}, {});

//http://fontawesome.io/icons/
export default glypy = glypyMapMaker({
	"cloud": "f0c2",
	"check": "f00c",
	"pencil": "f040",
	"angle-down": "f107",
	"angle-left": "f104",
	"angle-right": "f105",
	"angle-up": "f106",
	"times": "f00d",
	"times-circle": "f057",
	"search": "f002",
	"circle-thin": "f1db",
	"check-circle": "f058",
	"pencil": "f040",
	"trash": "f1f8"
})