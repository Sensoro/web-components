interface DragOptions {
  onMove: (x: number, y: number) => void;
  onStop: () => void;
  initialEvent: PointerEvent;
}

export function drag(container: HTMLElement, options?: Partial<DragOptions>) {
  function move(pointerEvent: PointerEvent) {
    const dims = container.getBoundingClientRect();

    const defaultView = container.ownerDocument.defaultView!;

    const offsetX = dims.left + defaultView.pageXOffset;
    const offsetY = dims.top + defaultView.pageYOffset;

    const x = pointerEvent.pageX - offsetX;
    const y = pointerEvent.pageY - offsetY;

    if (options?.onMove) {
      options.onMove(x, y);
    }
  }

  function stop() {
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', stop);

    if (options?.onStop) {
      options.onStop();
    }
  }

  document.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerup', stop);

  // If an initial event is set, trigger the first drag immediately
  if (options?.initialEvent instanceof PointerEvent) {
    move(options.initialEvent);
  }
}
