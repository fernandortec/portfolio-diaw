import { ModeToggle } from "@/components/ui/mode-toggle";
import { PixelSwap } from "@/components/ui/pixel-swap";
import type { ReactElement } from "react";


export function App (): ReactElement {
  return (
    <div>

      <PixelSwap
        active={true}
        onActiveChange={() => {}}
        onComplete={() => {}}
        style=""
        firstContent={
          <div className="click-prompt">
            <span>Click me</span>
          </div>
        }
        secondContent={
          <div className="found-message">
            <span>You found me</span>
          </div>
        }
        pixelSize={64}
        gap={0}
        pixelRadius={0}
        pixelSpin={0}
        pixelScale={0.35}
        duration={1400}
        pixelDuration={450}
        pattern="random"
        randomness={0}
        fade
        trigger="hover"
      />
    </div>
  )
}