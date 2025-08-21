import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type ToonMessage = {
  id: string;
  text: string;
  mood?: 'cheer' | 'hint' | 'info';
  autoCloseMs?: number;
};

type Props = {
  messageQueue: ToonMessage[];
  onDismiss: (id: string) => void;
  reducedMotion?: boolean;
  muted?: boolean;
};

export function ToonGuide({ messageQueue, onDismiss, reducedMotion }: Props) {
  const [current, setCurrent] = useState<ToonMessage | null>(null);

  useEffect(() => {
    if (!current && messageQueue.length > 0) {
      setCurrent(messageQueue[0]);
    }
  }, [messageQueue, current]);

  useEffect(() => {
    if (!current?.autoCloseMs) return;
    const t = setTimeout(() => {
      if (current) handleClose(current.id);
    }, current.autoCloseMs);
    return () => clearTimeout(t);
  }, [current]);

  function handleClose(id: string) {
    onDismiss(id);
    setCurrent(null);
  }

  const variants = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20, scale: 0.98 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 260, damping: 20 },
        },
        exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15 } },
      };

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="toon-overlay"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          role="dialog"
          aria-live="polite"
        >
          <div className="toon-bubble">
            <div className="toon-left">
              <img src="/icons/toon-cheer.svg" alt="" aria-hidden="true" />
            </div>
            <div className="toon-right">
              <p className="toon-text">{current.text}</p>
              <div className="toon-actions">
                <button className="btn primary" onClick={() => handleClose(current.id)} aria-label="Close">
                  OK!
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}