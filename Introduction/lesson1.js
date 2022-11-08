//console.log("hello world")
var reservoir_volume = 4.445e8;
//The amount of rainfall from a storm(in cubic metres)
var rainfall = 5e6;
var newrainfall = 0.9*rainfall;
var total = newrainfall + reservoir_volume;
var newVolume = 1.05 * reservoir_volume;
var dec_reservoir_volume = 0.95 * newVolume;
var net_reservoir_volume = dec_reservoir_volume - 2.5e5
console.log(net_reservoir_volume)

