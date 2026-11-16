import { useCallback } from 'react';

// pointer position as CSS variables (--rx, --ry, --mx, --my, --px, --py)

function useTilt(maxDeg = 8) {
  const onPointerMove = useCallback(
    (event) => {
      if (event.pointerType !== 'mouse') return;
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      el.style.setProperty('--ry', `${((x - 0.5) * 2 * maxDeg).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-(y - 0.5) * 2 * maxDeg).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
      el.style.setProperty('--px', `${((0.5 - x) * 14).toFixed(1)}px`);
      el.style.setProperty('--py', `${((0.5 - y) * 10).toFixed(1)}px`);
    },
    [maxDeg]
  );

  const onPointerLeave = useCallback((event) => {
    const el = event.currentTarget;
    ['--rx', '--ry', '--mx', '--my', '--px', '--py'].forEach((name) => el.style.removeProperty(name));
  }, []);

  return { onPointerMove, onPointerLeave };
}

export default useTilt;
