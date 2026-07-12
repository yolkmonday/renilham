const weights: [string, string][] = [
  ['300', '/fonts/carlasanslight-BF68bfa40288ba0.ttf'],
  ['400', '/fonts/carlasansregular-BF68bfa40294322.ttf'],
  ['600', '/fonts/carlasanssemibold-BF68bfa4027b1d1.ttf'],
  ['700', '/fonts/carlasansbold-BF68bfa40208569.ttf'],
]

export async function loadCarlaSans() {
  await Promise.all(
    weights.map(([weight, url]) => {
      const font = new FontFace('Carla Sans', `url(${url})`, { weight })
      return font.load().then(f => document.fonts.add(f))
    })
  )
}
