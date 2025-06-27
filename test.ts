import { brackets } from './main.js';
import * as assert from 'assert';

try {
  assert.equal(brackets("((5+3)*2+1)"), true);
  assert.equal(brackets("{[(3+1)+2]+}"), true);
  assert.equal(brackets("(3+{1-1)}"), false);
  assert.equal(brackets("[1+1]+(2*2)-{3/3}"), true);
  assert.equal(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false);
  assert.equal(brackets("[(3)+(-1)]*{3}"), true);
  assert.equal(brackets("(((([[[{{{3}}}]]]]))))"), false);
  assert.equal(brackets("[1+202]*3*({4+3)}"), false);
  assert.equal(brackets("({[3]})-[4/(3*{1001-1000}*3)/4]"), true);
  assert.equal(brackets("[[[1+[1+1]]])"), false);
  assert.equal(brackets("(((1+(1+1))))]"), false);
  assert.equal(brackets("2+3"), true);

  console.log("All tests passed");
} catch (e) {
  console.error("A test failed:");
  throw e;
}
