---
title: Day 6
draft: false
tags:
  - "#xdaystilligetjob"
date: 2025-07-12
---
### DSA
- Next permutation: 
	- Solve it by finding the breakpoint, to find the breakpoint traverse from n-2 to 0 and find when ith element is smaller than i+1th element.
	- Swap with the smallest greatest number.
	- reverse the subarray from breakpoint till last.
- Leaders of an array: 
	- Solve by traversing from right and keeping track of max element.
	- insert into the array when its greater or equal to the ith element.
- Set matrices zero: 
	- Traverse the array and find the 0s.
	- Set first column and row of that matrix as 0.
	- Traverse the sub matrix from last and set 0 when col or row (first col, or first row) is 0.
	- Set the rows to 0 from last when there is 0, same goes for cols.

### Project
- Just wrote code for getting win percentages and cp values and kind of implemented lichess cloud evaluation.
- May be launching tomorrow or Monday.
