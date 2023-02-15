<script setup>
import Banner from './components/Banner.vue'

</script>


<template>
  <div class="container">
    <h1>Primary Buttons</h1>

    <div class="buttons-container">
      <TsButton btn-type="primary" :icon="true" text="Action" />
      <TsButton btn-type="primary" :icon-right="true" text="Action" />
      <TsButton btn-type="primary" text="Action" />
      <TsButton btn-type="primary" :icon="true" />
    </div>

    <h1>Secondary Buttons</h1>

    <div class="buttons-container">
      <TsButton btn-type="secondary" :icon="true" text="Action" />
      <TsButton btn-type="secondary" :icon-right="true" text="Action" />
      <TsButton btn-type="secondary" text="Action" />
      <TsButton btn-type="secondary" :icon="true" />
    </div>
  </div>

  <div class="banners-container">
    <!-- Info -->
    <TsBanner class="banner" type="info" :show-buttons="true">
      <template #title>
        This is a title
      </template>
      <template #content>
        This is a paragraph of information with additional information
      </template>
    </TsBanner>
    
    <TsBanner class="banner" type="info">
      <template #content>
        This is a paragraph of information with additional information
      </template>
    </TsBanner>

    <TsBanner class="banner" type="info">
      <template #title>
        This is a title
      </template>
      <template #content>
        This is a paragraph of information with additional information
      </template>
    </TsBanner>

    <TsBanner class="banner" type="info">
      <template #title>
        This is a title
      </template>
    </TsBanner>

    <!-- Warning -->
    <TsBanner class="banner" type="warning" :show-buttons="true">
      <template #title>
        This is a title
      </template>
      <template #content>
        This is a paragraph of information with additional information
      </template>
    </TsBanner>

    <!-- Error -->
    <TsBanner class="banner" type="error" :show-buttons="true">
      <template #title>
        This is a title
      </template>
      <template #content>
        This is a paragraph of information with additional information
      </template>
    </TsBanner>

    <!-- Success -->
    <TsBanner class="banner" type="success" :show-buttons="true">
      <template #title>
        This is a title
      </template>
      <template #content>
        This is a paragraph of information with additional information
      </template>
    </TsBanner>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-left: 20px;
}
.buttons-container {
  display: flex;
  gap: 20px;
}
.banners-container {
  margin: 50px 20px;
}
.banner {
  margin-top: 20px;
}
</style>