<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue';
import { Collections, type MaisonsListeResponse } from '@/pocketbase-types';

import { allMaisonsSorted } from '@/backend'

const maisonsListe = await allMaisonsSorted()
</script>

<template>
    <h1 class="text-2xl">Bonjour monde !</h1>
    <!-- <MaisonCard v-bind="maisonsListe[0]"></MaisonCard>
  <MaisonCard v-bind="maisonsListe[1]"></MaisonCard> -->
    <!--     <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="MaisonCard.nomMaison"></MaisonCard> -->
    <ul>
        <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
            <RouterLink :to="{
                name: '/offres/[id]',
                params: {
                    id: uneMaison.id
                }
            }" class="text-red-400 hover:text-red-600">
                {{ uneMaison.nomMaison }}
            </RouterLink>
        </li>
    </ul>
</template>
