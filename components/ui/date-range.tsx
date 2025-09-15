"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

type DateRange = { start?: string; end?: string };

function toISO(date: Date): string {
    const y = date.getFullYear();
    const m = `${date.getMonth() + 1}`.padStart(2, "0");
    const d = `${date.getDate()}`.padStart(2, "0");
    return `${y}-${m}-${d}`;
}

function fromISO(value?: string): Date | null {
    if (!value) return null;
    const [y, m, d] = value.split("-").map(Number);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
}

function startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, count: number): Date {
    return new Date(date.getFullYear(), date.getMonth() + count, 1);
}

function getMonthMatrix(date: Date): (Date | null)[][] {
    const first = startOfMonth(date);
    const firstDay = first.getDay(); // 0-6, Sun-Sat
    const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(first.getFullYear(), first.getMonth(), d));
    while (cells.length % 7 !== 0) cells.push(null);
    const rows: (Date | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
    return rows;
}

function isSameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isBetween(date: Date, start?: Date | null, end?: Date | null): boolean {
    if (!start || !end) return false;
    const t = date.setHours(0, 0, 0, 0);
    const s = start.setHours(0, 0, 0, 0);
    const e = end.setHours(0, 0, 0, 0);
    return t > s && t < e;
}

export default function DateRangePicker({ start, end, onChange }: { start?: string; end?: string; onChange: (range: DateRange) => void }) {
    const today = new Date();
    const [view, setView] = useState<Date>(start ? fromISO(start) || startOfMonth(today) : startOfMonth(today));
    const nextView = useMemo(() => addMonths(view, 1), [view]);

    const startDate = fromISO(start || "");
    const endDate = fromISO(end || "");

    const selectDate = (date: Date) => {
        if (!startDate || (startDate && endDate)) {
            onChange({ start: toISO(date), end: undefined });
            return;
        }
        if (startDate && !endDate) {
            if (date < startDate) {
                onChange({ start: toISO(date), end: undefined });
            } else {
                onChange({ start: toISO(startDate), end: toISO(date) });
            }
        }
    };

    const Month = ({ date }: { date: Date }) => {
        const rows = getMonthMatrix(date);
        const monthLabel = date.toLocaleString(undefined, { month: "long", year: "numeric" });
        return (
            <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium text-on-bg">{monthLabel}</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground mb-1">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                        <div key={d} className="text-center py-1">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {rows.flat().map((cell, idx) => {
                        if (!cell) return <div key={idx} className="h-8" />;
                        const isStart = startDate && isSameDay(cell, startDate);
                        const isEnd = endDate && isSameDay(cell, endDate);
                        const inRange = isBetween(cell, startDate, endDate);
                        const isSelected = isStart || isEnd;
                        return (
                            <button
                                key={idx}
                                className={`h-8 w-8 rounded-full text-xs transition-colors mx-auto ${isSelected
                                    ? 'bg-black text-white'
                                    : inRange
                                        ? 'bg-black/10 text-on-bg'
                                        : 'hover:bg-black/5 text-on-bg'
                                    }`}
                                onClick={() => selectDate(cell)}
                            >
                                {cell.getDate()}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full md:w-auto rounded-2xl surface-bg text-on-bg ring-1 ring-border shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border">
                <button aria-label="Previous month" className="p-1 rounded hover:surface-muted" onClick={() => setView(addMonths(view, -1))}>
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="text-sm text-muted-foreground">Select dates</div>
                <button aria-label="Next month" className="p-1 rounded hover:surface-muted" onClick={() => setView(addMonths(view, 1))}>
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
                <Month date={view} />
                <Month date={nextView} />
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t border-border">
                <button className="text-sm text-muted-foreground hover:text-on-bg" onClick={() => onChange({ start: undefined, end: undefined })}>Clear</button>
                <div className="text-xs text-muted-foreground">
                    {start && end ? `${start} → ${end}` : start ? `${start}` : 'No dates selected'}
                </div>
            </div>
        </div>
    );
}


