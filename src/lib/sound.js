// Âm thanh nhỏ bằng WebAudio, không cần file.
import { settings } from './store'
let ctx
function tone(freq, dur, type = 'sine', when = 0, gain = .08) {
  ctx = ctx || new (window.AudioContext || window.webkitAudioContext)()
  const o = ctx.createOscillator(), g = ctx.createGain()
  o.type = type; o.frequency.value = freq
  g.gain.setValueAtTime(gain, ctx.currentTime + when)
  g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + when + dur)
  o.connect(g).connect(ctx.destination)
  o.start(ctx.currentTime + when); o.stop(ctx.currentTime + when + dur)
}
export function sfx(name) {
  if (!settings.get().sound) return
  try {
    if (name === 'ok') { tone(660, .12); tone(880, .18, 'sine', .1) }
    if (name === 'no') { tone(220, .25, 'triangle') }
    if (name === 'win') { [523, 659, 784, 1047].forEach((f, i) => tone(f, .25, 'sine', i * .12)) }
    if (name === 'tick') { tone(1200, .04, 'square', 0, .03) }
  } catch {}
}
