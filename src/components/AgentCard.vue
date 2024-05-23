<script setup lang="ts">
import { Collections, type AgentsResponse } from '@/pocketbase-types';
const props = defineProps<AgentsResponse>()
</script>
<template>
    <article>
        <div>
            <h3>PRENOM AGENT</h3>
            <p>NOM AGENT</p>
        </div>
        <div>
            <p>TELEPHONE AGENT</p>
            <p>EMAIL AGENT</p>
        </div>
    </article>
</template>