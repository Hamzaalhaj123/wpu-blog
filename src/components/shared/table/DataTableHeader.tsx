import Button from "@/components/shared/Button";
import { TableHead } from "@/components/shared/table/Table";
import { flexRender, Header } from "@tanstack/react-table";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronDownIcon, ChevronsUpDownIcon, ChevronUpIcon } from "lucide-react";

type DataTableHeaderProps<TData, TValue> = {
  header: Header<TData, TValue>;
};

export default function DataTableHeader<TData, TValue>({ header }: DataTableHeaderProps<TData, TValue>) {
  const canSort = header.column.getCanSort();
  const sort = header.column.getIsSorted();

  return (
    <TableHead key={header.id}>
      <div className="flex items-center gap-2">
        {!header.isPlaceholder ? flexRender(header.column.columnDef.header, header.getContext()) : null}
        {canSort ? (
          <Button onClick={header.column.getToggleSortingHandler()} icon size="none" className="p-0.5">
            <MotionConfig transition={{ duration: 0.05 }}>
              <AnimatePresence initial={false} mode="wait">
                {sort === "asc" ? (
                  <motion.div key="down" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <ChevronUpIcon size={20} />
                  </motion.div>
                ) : sort === "desc" ? (
                  <motion.div key="up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <ChevronDownIcon size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <ChevronsUpDownIcon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </MotionConfig>
          </Button>
        ) : null}
      </div>
    </TableHead>
  );
}
