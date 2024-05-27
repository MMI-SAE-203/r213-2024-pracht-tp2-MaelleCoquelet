<script setup lang="ts">
import AgentCard from '@/components/AgentCard.vue';
import { Collections, type AgentsResponse } from '@/pocketbase-types';
import { allAgentsSorted } from '@/backend'

const agents = await allAgentsSorted()
</script>
<template>
    <p>agents</p>
    <AgentCard v-for="agent of agents" v-bind="agent" :v-key="agent.id" />
</template>