import useResizeObserver from "@/hooks/utils/useResizeObserver";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type AutoHeightContainerProps = {
  children?: ReactNode;
};

export default function AutoHeightContainer({ children }: AutoHeightContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height = 0 } = useResizeObserver({ ref: containerRef });
  return (
    <motion.div animate={{ height: height }} className="overflow-hidden">
      <div ref={containerRef} className="relative">
        <AnimatePresence mode="popLayout" presenceAffectsLayout>
          {children ? (
            <motion.div key="test" className="p-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {children}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
