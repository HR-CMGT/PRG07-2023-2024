/**
 * Code toont uitwerking voor opdracht 3 uit mini-case 2. Je kunt het script zelf
 * aanroepen en het resultaat in je console zien.
 *
 * Deze versie support:
 *  - Meerdere Componenten die useState() gebruiken
 *  - De mogelijkheid een Component meerdere keren aan te roepen
 *  - De mogelijkheid om per component meerdere keren useState te gebruiken
 *  - De EventEmitter heeft geen directe relatie met het Framework, maar wordt
 *    gebruikt om fake events te triggeren wat normaal met een 'click' o.i.d. zou gebeuren
 */

//Custom event object used to trigger fake events to simulate the functionality of useState
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(20); //Just because my code registers the same event a lot of times as demo

/**
 * Custom framework to represent how useState might work in real life
 */
function FrameWork() {
  let state = {};
  let stateCounter = {};

  /**
   * @param value
   * @returns {(*|(function(*): *))[]}
   */
  function useState(value) {
    //Store the local caller name & arguments for later use
    const callerName = arguments.callee.caller.name;
    const callerArguments = arguments.callee.caller.arguments;

    //Set the counter per component to 0 for the first call
    if (typeof stateCounter[callerName] === 'undefined') {
      stateCounter[callerName] = 0;
    }

    //Set the stateName to make every value unique within the called component
    const stateName = callerName + stateCounter[callerName];
    if (typeof state[stateName] === 'undefined') {
      state[stateName] = {value: value, component: arguments.callee.caller};
    }
    stateCounter[callerName]++;

    /**
     * Set the new value based on the input
     *
     * @param newValue
     */
    const setter = (newValue) => {
      //Check if value is a function or not, and act on it
      if (typeof newValue !== 'function') {
        state[stateName].value = newValue;
      } else {
        state[stateName].value = newValue(state[stateName].value);
      }

      //Reset counter for called component and re-render with original arguments (props)
      stateCounter[callerName] = 0;
      state[stateName].component(...callerArguments);
    };

    //Return the array that is used by the user
    return [state[stateName].value, setter];
  }

  /**
   * First example component with props & 1 re-render
   * @param {onClick}
   */
  const FirstComponent = function ({onClick}) {
    const [name, setName] = useState('Antwan');

    eventEmitter.once('fakeClick', () => {
      setName('Bas');
      onClick();
    });

    console.log(`My name is ${name}`);
  };
  FirstComponent({onClick: () => console.log('first instance')});
  FirstComponent({onClick: () => console.log('second instance')});

  /**
   * Second example component with 3 re-renders & functions in the setter
   */
  const SecondComponent = function () {
    const [counter, setCounter] = useState(0);
    const [list, setList] = useState(['Dancing']);

    eventEmitter.once('fakeClick', () => setCounter(10));
    eventEmitter.once('fakeClick', () => setCounter((oldCounter) => oldCounter + 1));
    eventEmitter.once('fakeClick', () => setList((oldList) => {
      oldList.push('Do groceries');
      oldList.push('Listen music');
      return oldList;
    }));

    console.log(`I count ${counter}, and my list contains ${list.join(', ')}`);
  };
  SecondComponent();

  //Trigger event & log the overall state
  eventEmitter.emit('fakeClick');
  console.log(state);
}

//Start our Framework
FrameWork();
