<script setup lang="ts">
import type { MaisonRecord } from '@/types'
import MaisonCard from '@/components/MaisonCard.vue';

const maisonsListe: MaisonRecord[] = [
  {
    "adresse": "8 Rue du Faux Général, 97000 Paris",
    "collectionId": "esec94w3q54x0n5",
    "collectionName": "maisonsListe",
    "created": "2024-04-12 08:41:48.112Z",
    "favori": false,
    "id": "4teqz6rvmpyv9ft",
    "images": [
      "frames_for_your_heart_m_r1_ciddu_glc_unsplash_gpP2NiF7RZ.jpg",
      "vu_anh_ti_vptycg_3_e_unsplash_UxiXDmpHCX.jpg"
    ],
    "nbChambres": 3,
    "nbSdB": 2,
    "nomMaison": "Tome Raider",
    "prix": 87010,
    "surface": 45,
    "updated": "2024-04-12 08:44:40.343Z"
  },
  {
    "adresse": "15 Rue du Sashimi, 25000 Besançon",
    "collectionId": "esec94w3q54x0n5",
    "collectionName": "maisonsListe",
    "created": "2024-04-12 08:44:29.787Z",
    "favori": true,
    "id": "n5bd7m1m3x88ud1",
    "images": [
      "dillon_kydd_xgvwt544g8k_unsplash_3kmh4xk1xk.jpg",
      "jason_briscoe_aql_j19oc_we_unsplash_mZS0qp4VsJ.jpg",
      "john_fornander_y3_ahhrx_uby_unsplash_1_j5jTreA0sr.jpg"
    ],
    "nbChambres": 5,
    "nbSdB": 3,
    "nomMaison": "Plotbound",
    "prix": 281189,
    "surface": 15,
    "updated": "2024-04-12 08:44:29.787Z"
  },
  {
    "adresse": "80 Rue des Feuilletés Pas Cuits, 25200 Montbéliard",
    "collectionId": "esec94w3q54x0n5",
    "collectionName": "maisonsListe",
    "created": "2024-04-12 08:47:07.383Z",
    "favori": false,
    "id": "9dcp0fagqws1wpy",
    "images": [
      "ann_wallace_biep_nx5n7r4_unsplash_3UbPbNmivK.jpg",
      "greg_rivers_r_ch_fumw_ae7_e_unsplash_QQqtl8sUYv.jpg"
    ],
    "nbChambres": 1,
    "nbSdB": 1,
    "nomMaison": "LeToitientpas",
    "prix": 106495,
    "surface": 30.8,
    "updated": "2024-04-12 08:47:07.383Z"
  },
  {
    "adresse": "2 Avenue des Hamburgers, 76000 Rouen",
    "collectionId": "esec94w3q54x0n5",
    "collectionName": "maisonsListe",
    "created": "2024-04-12 08:49:14.004Z",
    "favori": true,
    "id": "vho441nosbv6dtp",
    "images": [
      "jason_briscoe_aql_j19oc_we_unsplash_1rb7yXiemB.jpg",
      "kara_eads_l7_ew_hkq1_b2s_unsplash_MygPsXJs0n.jpg"
    ],
    "nbChambres": 8,
    "nbSdB": 5,
    "nomMaison": "Villa de Verninac",
    "prix": 780000,
    "surface": 234,
    "updated": "2024-04-12 08:52:03.646Z"
  },
  {
    "adresse": "25 Boulevard des Champignons, 69123 Lyon",
    "collectionId": "esec94w3q54x0n5",
    "collectionName": "maisonsListe",
    "created": "2024-04-12 08:51:48.884Z",
    "favori": true,
    "id": "39e7pkznsasite4",
    "images": [
      "dillon_kydd_xgvwt544g8k_unsplash_UvB71fv73L.jpg"
    ],
    "nbChambres": 4,
    "nbSdB": 1,
    "nomMaison": "Tour de Cusance",
    "prix": 54285,
    "surface": 145,
    "updated": "2024-04-12 08:51:48.884Z"
  }
]
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <!-- <MaisonCard v-bind="maisonsListe[0]"></MaisonCard>
  <MaisonCard v-bind="maisonsListe[1]"></MaisonCard> -->
  <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="MaisonCard.nomMaison"></MaisonCard>
</template>
