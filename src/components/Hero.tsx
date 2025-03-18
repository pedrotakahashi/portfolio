
import { ChevronDown, Code, Server, Globe, Dices, Settings, Cloud, Database, Shield } from 'lucide-react';
import D20Animation from './D20Animation';
import { useState } from 'react';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import Eye from './Eye';
import Beholder from './Beholder';

const Hero = () => {

  const [isRolling, setIsRolling] = useState(false);
  const [initiativeResult, setInitiativeResult] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRollInitiative = () => {
    setIsRolling(true);
    setDialogOpen(true);
  };

  const handleRollComplete = (result: number) => {
    setInitiativeResult(result);
    setIsRolling(false);
  };

  return (
    <section id="hero" className="relative pt-24 md:pt-32 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-rpg-light-blue/5 top-[-300px] right-[-200px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-rpg-royal-blue/5 bottom-[-200px] left-[-200px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Character Sheet */}
          <div className="md:col-span-7 space-y-6 opacity-1 animate-fade-in">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-rpg-royal-blue/10 text-rpg-royal-blue text-sm font-medium mb-2">
                <D20Animation size={"3x"} className="mr-2" />
                <span>Level 31 Fullstack Developer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-rpg-deep-blue text-shadow">
                Pedro Takahashi
              </h1>
              <p className="text-xl md:text-2xl text-rpg-royal-blue/80 font-light mt-2">
                Crafting digital experiences with code and creativity
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a passionate Fullstack Developer who combines technical expertise with creative problem-solving.
              My quest is to build exceptional digital experiences that blend functionality with elegant design.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <a
                href="#contact"
                className="rpg-button flex items-center justify-center h-12 px-6 py-3 rounded-md border-2 border-rpg-royal-blue text-rpg-royal-white font-display text-lg transition-all duration-300 hover:bg-rpg-royal-blue/5 hover:shadow-md hover:translate-y-[-2px]"
              >
                Start Quest
              </a>

              <a
                href="#projects"
                className="rpg-button flex items-center justify-center h-12 px-6 py-3 rounded-md border-2 border-rpg-royal-blue text-rpg-royal-white font-display text-lg transition-all duration-300 hover:bg-rpg-royal-blue/5 hover:shadow-md hover:translate-y-[-2px]"
              >
                View Completed Quests
              </a>

              <Button
                onClick={handleRollInitiative}
                className="rpg-button flex items-center justify-center h-12 px-6 py-3 rounded-md border-2 border-rpg-royal-blue text-rpg-royal-white font-display text-lg transition-all duration-300 hover:bg-rpg-royal-blue/5 hover:shadow-md hover:translate-y-[-2px]"
              >
                <Dices size={24} />
                Roll Perception
              </Button>
            </div>


          </div>

          {/* Character Stats */}
          <div className="md:col-span-5 opacity-0 animate-fade-in-delay-1">
            <div className="glass-card p-6">
              <div className="mb-6 text-center">
                <h3 className="font-display text-xl text-rpg-deep-blue mb-2">Character Stats</h3>
                <div className="h-1 w-16 bg-rpg-light-blue mx-auto"></div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="character-stat">
                  <Code size={24} className="text-rpg-royal-blue mb-1" />
                  <div className="character-stat-value">85</div>
                  <div className="character-stat-label">Frontend</div>
                </div>

                <div className="character-stat">
                  <Server size={24} className="text-rpg-royal-blue mb-1" />
                  <div className="character-stat-value">70</div>
                  <div className="character-stat-label">Backend</div>
                </div>

                <div className="character-stat">
                  <Database size={24} className="text-rpg-royal-blue mb-1" />
                  <div className="character-stat-value">80</div>
                  <div className="character-stat-label">Database</div>
                </div>

                <div className="character-stat">
                  <Cloud size={24} className="text-rpg-royal-blue mb-1" />
                  <div className="character-stat-value">30</div>
                  <div className="character-stat-label">Cloud</div>
                </div>

                <div className="character-stat">
                  <Settings size={24} className="text-rpg-royal-blue mb-1" />
                  <div className="character-stat-value">65</div>
                  <div className="character-stat-label">DevOps</div>
                </div>

                <div className="character-stat">
                  <Shield size={24} className="text-rpg-royal-blue mb-1" />
                  <div className="character-stat-value">20</div>
                  <div className="character-stat-label">Security</div>
                </div>

              </div>

              <div className="mt-6 bg-rpg-deep-blue/5 p-4 rounded-lg border border-rpg-deep-blue/10">
                <div className="flex items-start space-x-2">
                  <D20Animation size={"3x"} color="#1A365D" className="mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-rpg-royal-blue text-sm">Special Abilities</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Proficient in creating scalable applications, responsive UIs, and optimizing database performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#skills" className="scroll-indicator">
        <ChevronDown size={32} className="text-rpg-light-blue animate-pulse-subtle" />
      </a>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="glass-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-center text-rpg-deep-blue">
              Roll d20 for Perception
            </DialogTitle>
            <DialogDescription className="text-center mt-1">
              {isRolling ? "Rolling the Dice..." : initiativeResult !== null ? `Result: ${initiativeResult}` : "Click roll initiative to roll a d20"}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-10">
            <div className="h-32 w-32 flex items-center justify-center relative">
              <D20Animation
                size={"4x"}
                color="#1A365D"
                isRolling={isRolling}
                onRollComplete={handleRollComplete}
                result={initiativeResult}
                className="transform scale-150"
              />
            </div>

            {!isRolling && (
              <Button
                onClick={() => setIsRolling(true)}
                className="rpg-button mt-4"
              >
                <Dices size={18} className="mr-2" />
                Roll Again
              </Button>
            )}
            <div className="flex flex-col items-center justify-center py-10 ">
              {initiativeResult !== null && !isRolling && (
                <div className={`mt-0.5 p-3 rounded-lg text-center ${initiativeResult >= 15 ? 'bg-green-100 text-green-800' : initiativeResult >= 10 ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                  {initiativeResult >= 15 ? (
                    <span className="font-display">You notice a hideous creature chasing you, a spherical creature full of tentacles with eyes, a creature you have never seen before.</span>
                  ) : (
                    <span className="font-display">You don't know what it is, but you realize that there is something watching you, something that gives you chills.</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {initiativeResult !== null && initiativeResult < 11 && (
        <div style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 1000
        }}>
          <Eye />
        </div>
      )}
      {initiativeResult !== null && initiativeResult >= 12 && initiativeResult <= 20 && <Beholder />}
    </section>
  );
};

export default Hero;