var GAME_LEVELS = [

  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                         ooooo ooooo ooooo    ooooo o    o                      ",
   "                         oe    o   o   o      o   o o    o                      ",
   "                         ooo   ooooo   o      ooooo o    o                      ",
   "  x                      ooooo o   o   o      o   o oooo oooo                x  ",
   "  x                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx               x  ",
   "  x                                                                          x  ",
   "  x         xxxx       ooooo o  o ooo  oooo oooo oo   o ooo  o   o    xxxx   x  ",
   "  x                      o   oooo oo   o    oooo o  o o o  o  ooo            x  ",
   "  x  @                   o   o  o ooo  oooo o  o o   oo ooo    o             x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],
    ["                                                                              ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "            xxxxx x  x  xxx  x xxx                                              ",
   "  x         x   x x  x x   x x x  x        xx           xx                   x  ",
   "  x         xxxxx x  x x   x x x  x   xxxxxxxxx    xxxxxxxxx                 x  ",
   "  x         x   x  xx   xxx  x xxx         xx           xx                   x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                           |                              x  ",
   "  x                                                                          x  ",
   "  x                                                                         $x  ",
   "  x                 x               x                                        x  ",
   "  x  @              x =             x*                |       #          o   x  ",
   "  xxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "             x!!!x                                                              ",
   "             x!!!x                                                              ",
   "             xxxxx                                                              ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                xxxxxx         ",
   "                                                                                   xxxx         xxxxxx       xx",
   "                                                                                   xxxx         xxxxxx       xx",
   "                                                                                   xxxx                      xx",
   "                                              o           o            o              xxx                    xx",
   "                                             xxxx        xxxx         xxxxx           xxx          o         xx",
   "                                                                                      xxxx        xxxx       xx",
   "                                                                                      xxxx                   xx",
   "                                                                                      xxxx                   xx",
   "                                                                                      xxxx o                 xx",
   "                                                                                      xxxxxxxx               xx", 
   "                                                                                      xxxx        xxxx       xx",
   "                                        o                                             xxxx                 o xx",
   "                                      xxxx         oo                                 xxxx                xxxxx",
   "                               oo                 xxxx             xxxxxxxxxxxxxxxx   xxxx                   xx",
   "                              xxxxxx                                              x   xxxx                   xx",
   "                                   x                                              x   xxxx o      xxxx       xx", 
   "                                   x      xxxx                 x =    o   o   o   x   xxxxxxx                xx",
   "                   xxxx           ox                           xxxxxxxxxxxxxxxxxxxx                          xx",
   "               xxxxxxxx           xx                           xxxxxxxxxxxxxxxxxxxx                      xxxxxx",
   "    @      xxxxxxxxxxxx       = xxxx           |      x        xxxxxxxxxxxxxxxxxxxx                      xxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx         xxxxxx",
   "                                                      x!!!!!!!!x                               x!!!!!!!!!x     ",
   "                                                      x!!!!!!!!x                               x!!!!!!!!!x     ",
   "                                                      xxxxxxxxxx                               xxxxxxxxxxx     "],
     ["!!!!!!xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "!!!xxxx     xxxx!!!!xvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!xx           x!!!x                                                    x",
   "vxx             xxx                                                     x",
   " x                                                                      x",
   " x                                                                      x",
   " x                                                                      x",
   " x                                                  |           |       x",  
   " x    @       o                          x    =     o     =     o   o   x",
   " x                                  x    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   " x   xxx     xxxx      xxxxxxxxxx   x                                   x",
   " xx            xx!!!!!!!!!!!!!!!x o x                                   x",
   "!!xx!!!!!!!!!!!x!!!!!!!!!!!!!!!!x o x o         |      |                x",
   "!!!xxxx!!!!!xxxx!!!!!!!!!!!!!!!!x o xxx                                 x",
   "!!!!!!xxxxxxx!!!!!!!!!!!!!!!!!!!x                                       x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x o                oo     oo        o   x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx o         xxxxxxxxxxxxxxxxxx o xxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x o         x!!!!!!!!!!!!!!!!x o x      x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x           x!!!!!!!!!!!!!!!!x o x      x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxx!!!!!!!!!!!!!!!!x          x",
   "xxxxx!!!xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x          x",
   "x    x!x                 xxxxvxxxxxxxvxxxxxxxxxxxxxxxxxxxxxxxx o        x",
   "x     v                                                      xxxxx      x", 
   "x                                                                    |  x",
   "x                                                                       x",
   "x                                                                     o x",
   "x                                                                       x",
   "x     o        o        o        o         o          oo                x",
   "x    xxxx     xxxx     xxxx     xxxx      xxxx      xxxxxx              x", 
   "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx      o o     x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
   ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "xxxx!!!xxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!xxxxxxxxxxxxxxxx!!!xxxxxxxxxx!!!xxxxxxxxxxxx!!!xxxxxxxxxxxx!!!xxxxxxxx",
   "x   x!x                       xxxxxxxxxxxxx               x!x          x!x            x!x            x!x       x",
   "x    v                        xx          x                v            v              v              v        x",
   "x                         |   xx          x                                                                    x",
   "x                                                                                                              x",
   "x                                                                                                              x",
   "x                                                                                                              x",
   "x                                                                                                              x",
   "x                                                   oo            oo             oo             oo             x",
   "x                                               |  xxxx       |  xxxx        |  xxxx        |  xxxx       |    x",
   "x                             o    o o                                                                         x",
   "x                             x           xxxx                                                                 x",
   "x                             x    xxx    x                                                                    x",
   "x                            xxxxxxxxxxxxxx         xx   xx      xx   xx        xx   xx        xx   xx         x",
   "x    @     o   =   o   |   xxxxxx         x!!!!!!!!!!!xxx!!!!!!!!!!xxx!!!!!!!!!!!!xxx!!!!!!!!!!!!xxx!!!!!!!!!!!x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
 [ "  x     x                                                                x     x  ",
   "  x     x                                                                x     x  ",
   "  x  |  x                                                                x  |  x  ",
   "  x     x       xxxxx x   x  xxx  xx   x x    x xxxx    x   x            x     x  ",
   "  x     x         x   xxxxx x   x x x  x x x    x       xxxxx            x     x  ",
   "  xxxxxxx         x   x   x xxxxx x  x x x   x   xx         x            xxxxxxx  ",
   "  x     x         x   x   x x   x x   xx x    x    x        x            x     x  ",
   "  x     x                                       xxxx                     x     x  ",
   "  x  |  x                                                                x  |  x  ",
   "  x     x     xxxxx x     xxx  x    x x xx    x xxxxxxx      x   x       x     x  ",
   "  x     x     x   x x    x   x x    x x x x   x x                        x     x  ",
   "  xxxxxxx     xxxxx x    xxxxx  xxxx  x x  x  x x   xxxx   x       x     xxxxxxx  ",
   "  x     x     x     x    x   x    x   x x   x x x     x     x     x      x     x  ",
   "  x     x     x     xxxx x   x    x   x x    xx xxxxxxx      xxxxx       x     x  ",
   "  x  |  x                                                                x  |  x  ",
   "  x     x                                                                x     x  ",
   "  x     x    @   o   o   o   o   o   o   o   o   o   o   o   o   o   o   x     x  ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  

];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
