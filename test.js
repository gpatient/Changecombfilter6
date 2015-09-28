
/**
 * * @name testCombfilter
 *   @version 0.2
 * test
 */

// x1*b1+ x2*b2+ x3*b3 - y1*a1 - y2*a2

import Comb from './index.js';
import dbg from 'debug';
dbg('SampleRate')(sampleRate);


var ch = 1;
var out = [];
var step = 0.5;
var dry, wet;



var comb = Comb(211115);
var comb2 = Comb(2715);
var comb3 = Comb(915);
var comb4 = Comb(5315);


comb.feedback = 1.7415;
comb.damp = 0.5;

comb2.feedback = 1.1415;
comb2.damp = 0.5;
comb3.feedback = 1.0115;
comb3.damp = 0.7;
comb3.setInputMul(0.035);
comb4.feedback = 1.0415;
comb4.damp = 0.5;
comb4.setInputMul(0.0150);
export function dsp(t) {
  //if ((t/2) % step === 0) ch = 1 - ch;
  var wet2,wet3,wet4,snd;
  dry = Math.sin(440 * t * Math.PI * 2) * Math.exp(10 * (-t/2 % step));
  dry += Math.random()*0.3;
  wet = comb.run(dry);
  wet2 = comb2.run(dry);
  wet3 = comb3.run(dry);
  wet4 = comb4.run(dry);
  
  snd=(wet+wet2+wet3+wet4)/5;//*Math.abs(wet+0.1);
  return [snd,snd];
}
