<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue';
import { Collections, type MaisonsListeResponse } from '@/pocketbase-types';

import { allMaisonsFavori } from '@/backend'

const maisonsListe = await allMaisonsFavori()
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <!-- <MaisonCard v-bind="maisonsListe[0]"></MaisonCard>
  <MaisonCard v-bind="maisonsListe[1]"></MaisonCard> -->
  <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="MaisonCard.nomMaison"></MaisonCard>
</template>
