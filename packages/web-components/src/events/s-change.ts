type SChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    's-change': SChangeEvent;
  }
}

export default SChangeEvent;
