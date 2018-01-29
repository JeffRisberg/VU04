<template>
  <b-card>
    <div class="h5 text-left">
      <i class="fa fa-cogs text-muted"></i> Services ({{count || 0}})
    </div>
    <slot v-for="row in item_list || []">
      <div class="score-small">
        <div :class="'score-small-icon score-bg-' + row.score"
        >{{row.score}}</div>
      </div>
      <div class="mb-3" style="overflow:hidden;
        text-overflow:ellipsis;white-space:nowrap;"
           :data-id="row.id"
      >{{row.name}}</div>
    </slot>
  </b-card>
</template>

<script>
  export default {
    name: 'MajorServicesCard',
    props: ['count', 'item_list']
  }
</script>
