export const flatComponentTempalte = () => `\
<script setup lang="ts">
</script>

<template>
</template>

<style scoped>
</style>
`;

export const dotVueComponent = (isTypeScript: boolean, stylesheet: string) => `\
<script setup${isTypeScript ? ' lang="ts"' : ''}>
</script>

<template>
</template>

<style scoped src="./${stylesheet}" />
`;
