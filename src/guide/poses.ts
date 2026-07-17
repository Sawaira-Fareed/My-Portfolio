import idle from '../assets/guide/guide-idle.png'
import thinking from '../assets/guide/guide-thinking.png'
import explaining from '../assets/guide/guide-explaining.png'
import presenting from '../assets/guide/guide-presenting.png'
import sittingLaptop from '../assets/guide/guide-sitting-laptop.png'
import walking from '../assets/guide/guide-walking.png'
import walkingCoffee from '../assets/guide/guide-walking-coffee.png'
import confident from '../assets/guide/guide-confident.png'
import showingCode from '../assets/guide/guide-showing-code.png'

export type GuidePose =
  | 'idle'
  | 'thinking'
  | 'explaining'
  | 'presenting'
  | 'sittingLaptop'
  | 'walking'
  | 'walkingCoffee'
  | 'confident'
  | 'showingCode'

export const poseImages: Record<GuidePose, string> = {
  idle,
  thinking,
  explaining,
  presenting,
  sittingLaptop,
  walking,
  walkingCoffee,
  confident,
  showingCode,
}
