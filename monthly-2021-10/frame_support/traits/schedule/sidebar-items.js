initSidebarItems({"constant":[["HARD_DEADLINE","Anything of this value or lower will definitely be scheduled on the block that they ask for, even if it breaches the `MaximumWeight` limitation."],["HIGHEST_PRIORITY","The highest priority. We invert the value so that normal sorting will place the highest priority at the beginning of the list."],["LOWEST_PRIORITY","The lowest priority. Most stuff should be around here."]],"enum":[["DispatchTime","The dispatch time of a scheduled task."]],"trait":[["Anon","A type that can be used as a scheduler."],["Named","A type that can be used as a scheduler."]],"type":[["Period","Information relating to the period of a scheduled task. First item is the length of the period and the second is the number of times it should be executed in total before the task is considered finished and removed."],["Priority","Priority with which a call is scheduled. It’s just a linear amount with lowest values meaning higher priority."]]});