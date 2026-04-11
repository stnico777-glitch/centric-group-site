#!/usr/bin/env bash
# One-time fetch of location-specific images into public/service-areas/{id}.jpg
# Sources: Unsplash (Unsplash License) and Wikimedia Commons (per-file license).

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/service-areas"
mkdir -p "$OUT"

dl_unsplash() {
  local id="$1" file="$2"
  local n=0
  while [[ $n -lt 5 ]]; do
    if curl -fsSL --retry 3 --retry-delay 2 "https://unsplash.com/photos/${id}/download?force=true&w=1920" -o "$OUT/$file"; then
      break
    fi
    n=$((n + 1))
    sleep $((4 + n * 2))
  done
  sleep 2
}

commons_url() {
  curl -fsSL "https://commons.wikimedia.org/w/api.php?action=query&titles=File:$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$1")&prop=imageinfo&iiprop=url&format=json" \
    | python3 -c "import sys,json; d=json.load(sys.stdin); p=list(d['query']['pages'].values())[0]; print(p['imageinfo'][0]['url'])"
}

dl_commons_title() {
  local title="$1" file="$2"
  u="$(commons_url "$title")"
  curl -fsSL "$u" -o "$OUT/$file"
  sleep 1
}

# ——— Unsplash (unique photo id per area) ———
dl_unsplash q1nNO45iDtY miami.jpg
dl_unsplash jZdsmdGh0_E miami-beach.jpg
dl_unsplash 2_zGhTtzQII coral-gables.jpg
dl_unsplash XxgQGZOjQPA aventura.jpg
dl_unsplash l1cORHsLqZ0 sunny-isles-beach.jpg
dl_unsplash bm0sRH-HBTA doral.jpg
dl_unsplash 6DkQYcXYKjI north-miami.jpg
dl_unsplash YTcltme_Gus key-biscayne.jpg
dl_unsplash lj4KbgcOkWY fort-lauderdale.jpg
dl_unsplash DoYgN4mOr00 hollywood.jpg
dl_unsplash FI7W0h_43Lo pompano-beach.jpg
dl_unsplash SOm4KwmDOso deerfield-beach.jpg
dl_unsplash nF8U6HIitUk west-palm-beach.jpg
dl_unsplash m05RYm1JIUs palm-beach.jpg
dl_unsplash Ev0Vj_0PPck miami-dade-county.jpg
dl_unsplash zoiydkKd0dc broward-palm-beach-counties.jpg
dl_unsplash D43myyp1ksY parkland.jpg

# ——— Wikimedia Commons ———
dl_commons_title "Pinecrest_Parkway.jpg" kendall-pinecrest.jpg
dl_commons_title "Flamingos_at_Hialeah_Park.jpg" hialeah.jpg
dl_commons_title "Coral_Castle,_Homestead,_FL.jpg" homestead.jpg
dl_commons_title "American_Heritage_School_Aerial.jpg" plantation.jpg
dl_commons_title "Coral_Springs_-_Early_Aerial_(34425663255).jpg" coral-springs.jpg
dl_commons_title "Bonaventure_Golf_Club_Entrance,_Weston,_Florida_February_23,_2022.jpg" weston.jpg
dl_commons_title "Franklin_Academy_Pembroke_Pines_Entrance.jpg" pembroke-pines.jpg
dl_commons_title "Cathedral_Church_of_the_Resurrection_-_Miramar,_Florida.jpg" miramar.jpg
dl_commons_title "Town_Hall_(Davie,_Florida).jpg" davie-town-hall.jpg
dl_commons_title "10_Hallandale_Beach_(5680680793).jpg" hallandale-beach.jpg
dl_commons_title "2010_beach_sign_Boca_Raton_Florida_USA_4506097191.jpg" boca-raton.jpg
dl_commons_title "Delray_Beach_FL_Ocean_Blvd_A1A_north01.jpg" delray-beach.jpg
dl_commons_title "Boynton_Beach_Inlet_(3484228410).jpg" boynton-beach.jpg
dl_commons_title "Downtown_at_the_Gardens.jpg" palm-beach-gardens.jpg
dl_commons_title "Juno_Beach_Pier.jpg" jupiter.jpg
dl_commons_title "A_Horse_of_Their_Own_-_Wellington_Florida.jpg" wellington.jpg
dl_commons_title "A_Key_Largo_marina_at_dusk.jpg" key-largo.jpg

echo "Done. Images in $OUT"
