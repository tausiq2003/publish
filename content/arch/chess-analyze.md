---
title: Architecture of Chess-Analyze game.
draft: false
tags:
  - architecture
  - chess
date: 2025-07-19
---
### Introduction

So, first of all, in the case you don't know what I am talking about, please visit https://analyze-chess.tausiqsama.me . This is my project, that I have built and this project enables you analyze your chess games that you have played using a client side stockfish js script using web workers, which is available at  https://github.com/nmrugg/stockfish.js.

So, this below is the picture of architecture that shown here:

![[Pasted image 20250719221948.png]]

Now, first of all there are lots of components here, like board, board-container and all but i will now discuss the workflow of this website.

### Workflow
So, first you give the input in `inputs.tsx` where it has two options, `link` and `pgn` so you select one and give the input next it has `depth` which ranges from `14` - `22`. But I recommend, either go 14 or 16, because, if you go for higher depth the analysis will slow down, 22 is huge depth, now why the analysis will slow down because, the stockfish will work for more depth and in a line we have written to get analysis from that depth only means if its 22, then the stockfish web worker will go till 22 and store the results which will cause the slow down, now what if we can fasten that, yes I have fastened that using `setoption name Threads value ${somefunction(navigator.hardwareConcurrency)}`, so `navigator.hardwareConcurrency` is a js api, the browser api, which tells how many cores you have in your machine, now if you will use all of your cores then you computer will freeze, which comes in a later stage, first the analysis won't be nice because it will just skim through the web workers and it will be a mess, so we have handled that, next your computer/device will freeze. Now we are using web workers, the job of web workers is that it runs asynchronously which means it won't block the program flow, moreover you can think it running as parallely if you are a non-tech person, but parallelism and async nature is different. So, web workers is not only is js, it comes in wasm, wasm means web assembly and web assembly might be faster than native js, because it is compiled in other languages like C, C++, Rust etc. Now, for C/C++ its emscripten that does this job, but this is beyond this blog to discuss that. 

So, coming to the point use 14 or 16. Now, what happens is that I am using Next.js the stack is Next.js so Next.js has "use server" which means server actions, and there you can call your api calls, use env variables etc. So, you can think it as server, or a function executed in server, and all the functions in server actions are async in nature. So, first when we give input first its validated through [zod](https://zod.dev/) and then the pgn being extracted if it a link using different api calls and then the pgn is parsed. Next the pgn is stored in the context api, which you can think of state management, the "default state management" in react.

Next up, the analysis is loaded and a web worker is spawned, if you browser is that capable it uses the wasm file to do the analysis and first we set the [uci](https://en.wikipedia.org/wiki/Universal_Chess_Interface) the universal chess interface protocol which lets us communicate with the stockfish chess engine. Then, multipv and threads are selected to analyze. Next, we have analyze function where we load the centipawns, line, win percentage into the context. Win percentage and accuracy is calculated by this formula https://lichess.org/page/accuracy, now, next up we calculate the win difference by subtracting from previous win percentage, now if win diff < -2 its a good move, < -5 its inaccuracy, < -10 its mistake, < -20 its blunder, if the move matches with first lines its best move and till the opening its book move, if the move is a sacrifice and completely winning and diff > -2 then its brilliant move. So, now we have to calculate estimated elo and accuracy of the player which is taken from https://github.com/lichess-org/lila and finally those are calculated.

Next up, its just the other components how they get data from context and set it up. Thats the total workflow.

Hope you have enjoyed the website, if yes, you can support me at https://buymeacoffee.com/tausiqsamantaray

If you have any issues, you can raise on github. The link for this source code is in https://github.com/tausiq2003/analyze-chess

Thanks.