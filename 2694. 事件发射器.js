class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    this.eventList = this.eventList || [];
    this.eventList.push({
      eventName,
      callback,
    });
    return {
      unsubscribe: () => {
        this.eventList = this.eventList.filter(
          (it) => it.callback !== callback
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    this.eventList = this.eventList || [];
    const arr = this.eventList.filter((it) => it.eventName === eventName);
    if (arr.length === 0) return [];
    return arr.map((it) => it.callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
