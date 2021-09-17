import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) != "number" || position - 1 < 0 || position > this.chain.length){
      this.chain = [];
      throw Error();
   }
   this.chain.splice(position - 1, 1);
   return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
      this.chain = [];
      return str;
  }
};
