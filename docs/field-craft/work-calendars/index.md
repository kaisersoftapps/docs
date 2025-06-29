---
sidebar_position: 90
---

# Work Calendars

## Overview

Work Calendars let you control how time is tracked in fields like [Time in Status](../time-in-status/index.md). You can create and manage up to **10 distinct calendars**, which is ideal for teams in different time zones or with varied schedules.

Only **working hours** defined in a calendar are counted toward time-based fields. Time outside working hours - such as nights, weekends, or holidays - is excluded. This ensures accurate tracking based on actual work time.

---

## Example Calendar: Standard Working Hours (8/5)

This calendar represents a typical workweek:  
**Monday to Friday, 09:00–17:00**.

- Each working day = 8 hours = 28,800 seconds  
- One workweek = 5 days = 40 hours = **144,000 seconds**

### Scenario

A work item remains in a specific status from **Monday, 1 June 2025, 00:00:00** to **Friday, 14 June 2025, 23:59:59**.  
That period includes **10 working days**.

- Counted time = 10 × 8h = **80 hours = 288,000 seconds**
- Displayed value = **"2w"**, since 1 week = 144,000 seconds

| Date       | 01.06 | 02.06 | 03.06 | 04.06 | 05.06 | 06.06 | 07.06 | 08.06 | 09.06 | 10.06 | 11.06 | 12.06 | 13.06 | 14.06 |
|------------|-------|-------|-------|-------|-------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| Day        | Mon   | Tue   | Wed   | Thu   | Fri   | Sat    | Sun    | Mon    | Tue    | Wed    | Thu    | Fri    | Sat    | Sun    |
| Counted (d)| 1d    | 1d    | 1d    | 1d    | 1d    | 0d     | 0d     | 1d     | 1d     | 1d     | 1d     | 1d     | 0d     | 0d     |
| Counted (h)| 8h    | 8h    | 8h    | 8h    | 8h    | 0h     | 0h     | 8h     | 8h     | 8h     | 8h     | 8h     | 0h     | 0h     |
| Counted (s)| 28800 | 28800 | 28800 | 28800 | 28800 | 0      | 0      | 28800 | 28800 | 28800 | 28800 | 28800 | 0      | 0      |

---

## Example Calendar: 24/7

The 24/7 calendar is for teams that operate continuously. It includes all hours, every day of the week, with **no breaks or holidays**.

- Each day = 24 hours = 86,400 seconds  
- One week = 7 days = **168 hours = 604,800 seconds**

### Scenario

Using the same date range as above:

- Total time = 14 days × 24h = **336 hours = 1,209,600 seconds**
- Displayed value = **"2w"**, since 1 week = 604,800 seconds in this calendar

So while the display stays "2w", the raw value differs significantly due to the calendar.

---

## Key Concept

The **definition of "1 week"** changes depending on the calendar:

| Calendar     | 1 Week =         |
|--------------|------------------|
| Standard 8/5 | 144,000 seconds  |
| 24/7         | 604,800 seconds  |

Despite these differences, the **displayed value** like `"2w"` stays the same. What changes is the **raw value**, which allows calculations to reflect actual working time.

---

## ⚠️ Important Note

Switching a work calendar for an existing field **does not automatically recalculate** the time values for existing items.  
You must perform a [manual reindex](../reindex/index.md) to update the values accordingly.

:::
