---
title: Day 1
draft: false
tags:
  - xdaystilligetjob
date: 2025-07-07
---

### DSA
- Started with Arrays.
- Revised bubble sort, selection sort, insertion sort.
- Solved sorted and rotated (https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/)
	- Solve by iterating the array once find if there is a condition where `arr[i] > arr[i+1]` find that index.
	- Then, separate the array by two parts partitioned by index. Check if both are sorted or not.
	- Then, if index is 0 then it is not rotated, so first element is <= last element, else last element < first element.
- Next question, was remove duplicates from the array (https://leetcode.com/problems/remove-duplicates-from-sorted-array)
	- Solve it by iterating through out the array.
	- maintain k = 0, this will be a #two-pointer approach.
	- if the element at k != element at i, i.e. duplicate not present and it is a sorted array.
	- swap them and increment k and i.
- Rotate array by 1 place.
	- Solve it by taking the last element as temp.
	- Right shift all the elements except last by 1 place.
	- Set first element as temp.
- Rotate array by k places (https://leetcode.com/problems/rotate-array)
	- We can do the same thing as above but it will take extra space for storing the k elements.
	- So we apply reversal algorithm.
	- First, `[1,2,3,4,5,6,7]` then if `k=3` then reverse first n-k elements, last k elements, then reverse the whole array.
	- It will be, after reversing first n-k elements, `[4,3,2,1,5,6,7]`, then, `[4,3,2,1,7,6,5]`, then, `[5,6,7,1,2,3,4]` which is the answer.
- Move zeroes (https://leetcode.com/problems/move-zeroes)
	- Traverse the whole array, keep a k = 0. We are again using #two-pointer approach.
	- if ith element is not 0, swap it with zth element and increment z.
- Union of two sorted arrays (https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1)
	- Again #two-pointer approach will be used.
	- As its sorted so, keep i at arr1 and j at arr2, then if ith element <= jth element insert that array within a new array, if jth element < ith element insert that in that new array, if and only if the last inserted array isn't equal to ith or jth within respective condition.
	- Insert the remaining.
### Core subjects(Computer Networks)
- Started with OSI model.
- Read whats the role of each model (Application Layer, Presentation Layer, Session Layer, Transport Layer, Network Layer, Data Link Layer, Physical Layer)
### Chess-Analyze Project
- So, I am building a project chess-analyze (github.com/tausiq2003/analyze-chess), which will simulate the chess.com's analysis feature for free.
- Read about workers and their async nature, so had some problems with it.
- Experimenting with stockfish.js, so extract, cp, nodes, etc. to classify the moves, and build the eval bar.
